import React from 'react';
import cn from 'classnames';
import { FORM } from "../../constants";
const { FORM_DISABLED_STATE } = FORM;
import Validator from './validator';
import { isUndefined } from "../../utils";
/*type FieldProps = {
  [key: string];
};*/
export const FormContext = React.createContext({});
const initState = {
    fields: {},
    hasError: false,
    errorMessage: '',
    disabled: FORM_DISABLED_STATE.ENABLED,
    isSuccess: false,
    validationAlerts: true,
};
const VALIDATION_DELAY = 1000;
export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.id = setTimeout(() => { }, 0);
        this.$form = React.createRef();
        this.formUnmount = false;
        this._handleSubmit = () => {
            this.onSubmit();
        };
        this.resetForm = () => {
            Object.keys(this.fields).forEach((fieldName) => {
                this.fields[fieldName].value = this.fields[fieldName].initValue;
                this.fields[fieldName].validation.setError(false);
            });
            this.disableForm(FORM_DISABLED_STATE.ENABLED);
            this.setError();
        };
        this.deleteField = (fieldName) => {
            delete this.fields[fieldName];
            this.setState({
                fields: this.fields,
            });
        };
        this.addField = (fieldProps) => {
            // TODO: any
            const { initialValues } = this.props;
            const { value: propValue = '' } = fieldProps.value !== null && fieldProps;
            this.setState(({ fields }) => {
                const value = initialValues && !isUndefined(initialValues[fieldProps.name])
                    ? initialValues[fieldProps.name]
                    : propValue;
                return {
                    fields: {
                        ...fields,
                        [fieldProps.name]: {
                            value,
                            initValue: value,
                            grabIfDirty: !!fieldProps.grabIfDirty,
                            validateOnSubmit: fieldProps.validateOnSubmit,
                            dynamicValidate: fieldProps.dynamicValidate,
                            validation: new Validator(fieldProps, this),
                        },
                    },
                };
            });
        };
        this.onFieldChange = (fieldName, value, callBack) => {
            // TODO: any
            const { isSuccess } = this.state, { onChange } = this.props;
            if (isSuccess) {
                this.setSuccess(false);
            }
            this.resetFieldValidation(fieldName);
            this.setState(({ fields }) => ({
                // TODO: any
                fields: {
                    ...fields,
                    [fieldName]: {
                        ...fields[fieldName],
                        value,
                    },
                },
            }), () => {
                if (this.fields[fieldName].validateOnSubmit) {
                    if (callBack)
                        callBack();
                }
                else if (this.fields[fieldName].dynamicValidate) {
                    clearTimeout(this.id);
                    this.id = setTimeout(() => this.validateField(fieldName, value).then((res) => !res && callBack ? callBack() : null), VALIDATION_DELAY);
                }
                else {
                    this.checkErrors();
                }
                onChange && onChange(this.fields);
            });
        };
        this.onFieldFocusChange = (fieldName, value) => {
            // TODO: any
            const { fields } = this.state, // TODO: any
            field = fields[fieldName];
            if (this.id) {
                clearTimeout(this.id);
            }
            if (field === null || field === void 0 ? void 0 : field.validateOnSubmit)
                return;
            if ((field === null || field === void 0 ? void 0 : field.initValue) !== (field === null || field === void 0 ? void 0 : field.value))
                this.validateField(fieldName, value);
        };
        this.validateField = (fieldName, value) => {
            // TODO: any
            return this.fields[fieldName].validation
                .validate(value)
                .then(() => {
                this.checkErrors();
                return false;
            })
                .catch((err) => {
                const { validationAlerts } = this.state;
                this.setError(err, validationAlerts);
                return true;
            });
        };
        this.resetFieldValidation = (fieldName) => {
            var _a, _b;
            (_b = (_a = this.fields[fieldName]) === null || _a === void 0 ? void 0 : _a.validation) === null || _b === void 0 ? void 0 : _b.setError(false);
        };
        // resetFieldsValidation = () => {
        //   Object.keys(this.fields).forEach(this.resetFieldValidation);
        // };
        this.checkErrors = () => {
            const { disabled } = this.state;
            let haveError = false;
            Object.keys(this.fields).forEach((field) => {
                if (haveError) {
                    return;
                }
                if (this.fields[field].validation.isError) {
                    haveError = true;
                }
            });
            if (!haveError && disabled) {
                this.disableForm(FORM_DISABLED_STATE.ENABLED);
                this.setError(null);
            }
        };
        this.validateFields = () => {
            const fieldsValidation = Object.keys(this.fields).map((field) => this.fields[field].validation.validate(this.fields[field].value));
            return Promise.all(fieldsValidation);
        };
        this.setError = (err, validationAlerts) => {
            this.setState(() => {
                // TODO: any
                if (!err) {
                    return {
                        hasError: false,
                        errorMessage: '',
                    };
                }
                return {
                    hasError: true,
                    isSuccess: false,
                    errorMessage: validationAlerts ? err.message : '',
                    disabled: FORM_DISABLED_STATE.SUBMIT_BUTTON,
                };
            });
        };
        this.setSuccess = (isSuccess) => this.setState({ isSuccess });
        this._serializeFields = () => Object.keys(this.fields).reduce((acc, field) => {
            const fieldState = this.fields[field];
            if (fieldState.grabIfDirty) {
                return fieldState.value === fieldState.initValue
                    ? acc
                    : { ...acc, [field]: fieldState.value };
            }
            return {
                ...acc,
                [field]: fieldState.value,
            };
        }, {});
        this.onSubmit = (e) => {
            if (e) {
                e.preventDefault();
            }
            const { disableOnSubmit = true } = this.props;
            if (disableOnSubmit) {
                this.disableForm(FORM_DISABLED_STATE.FORM);
            }
            const { props: { onSubmit, callback, handlerError, onSuccess }, } = this;
            this.validateFields()
                .then(() => {
                if (onSubmit) {
                    onSubmit(this._serializeFields());
                }
            })
                .catch((error) => {
                this.disableForm(FORM_DISABLED_STATE.SUBMIT_BUTTON);
                this.setError(error);
            })
                .then(() => {
                if (this.formUnmount) {
                    return;
                }
                this.disableForm(FORM_DISABLED_STATE.ENABLED);
                this.updateInitValue();
                if (callback)
                    callback();
                if (onSuccess)
                    this.setSuccess(true);
            })
                .catch((resp) => {
                const errorDetails = handlerError ? handlerError(resp) : resp;
                this.disableForm(FORM_DISABLED_STATE.SUBMIT_BUTTON);
                this.updateFieldsError(errorDetails);
            });
        };
        this.disableForm = (disabled) => this.setState({ disabled });
        this.updateFieldsError = ({ message, data }) => {
            if (data) {
                Object.keys(data).forEach((field) => {
                    if (this.fields[field]) {
                        const errorMessage = Array.isArray(data[field])
                            ? data[field].map(({ message: fieldError }) => fieldError).join(', ')
                            : data[field].message;
                        this.fields[field].validation.setError(true, errorMessage);
                    }
                });
            }
            this.setError(new Error(message), true);
        };
        this.onFocusInit = (event) => {
            //const { currentTarget } = event || {};
        };
        const { disabled, validationAlerts } = props;
        this.state = Object.assign({}, initState, disabled ? { disabled } : {}, typeof validationAlerts !== 'undefined' ? { validationAlerts } : {});
    }
    componentDidUpdate(prevProps) {
        const { disabled, initialValues } = this.props; // TODO: any
        const { fields } = this.state; // TODO: any
        if (disabled !== prevProps.disabled) {
            this.disableForm(disabled);
        }
        if (initialValues !== prevProps.initialValues) {
            const updateFields = {}; // TODO: any
            Object.keys(fields).forEach((field) => {
                if (!isUndefined(initialValues[field])) {
                    updateFields[field] = {
                        ...fields[field],
                        value: initialValues[field],
                    };
                }
            });
            this.setState(({ fields }) => {
                return {
                    fields: {
                        ...fields,
                        ...updateFields,
                    },
                };
            });
        }
    }
    componentWillUnmount() {
        this.formUnmount = true;
    }
    get fields() {
        const { fields } = this.state;
        return fields;
    }
    updateInitValue() {
        const newFields = {}; // TODO: any
        Object.keys(this.fields).forEach((field) => {
            newFields[field] = {
                ...this.fields[field],
                initValue: this.fields[field].value,
            };
        });
        this.setState({
            fields: newFields,
        });
    }
    render() {
        const { state: { fields, disabled, errorMessage, isSuccess }, props: { children, className, onSuccess }, addField, deleteField, onFieldChange, onFieldFocusChange, onSubmit, disableForm, onFocusInit, } = this;
        const value = {
            isSuccess: isSuccess ? onSuccess : '',
            fields,
            addField,
            deleteField,
            onChange: onFieldChange,
            onBlur: onFieldFocusChange,
            onFocus: onFocusInit,
            disabled,
            errorMessage,
            onSubmit,
            disableForm,
        };
        const classList = cn('appForm', className);
        return (React.createElement("form", { ref: this.$form, onSubmit: this.onSubmit, className: classList, noValidate: true },
            React.createElement(FormContext.Provider, { value: value }, children)));
    }
}
