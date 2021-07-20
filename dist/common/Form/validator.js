import { reverseBind } from "../../utils";
import { FORM } from "../../constants";
const { FORM_ALERTS } = FORM;
import VALIDATORS from './validators_scheme';
export default class Validator {
    constructor(fieldProps, form) {
        this.setError = (isError, errorMessage = '') => {
            this.errorMessage = errorMessage;
            this.isError = isError;
        };
        this.validate = (value) => this.validationMethods.reduce((promise, { method, errorMessage, formError } // TODO: any
        ) => promise.then(async () => {
            if (this.fieldState.initValue === value && this.fieldState.grabIfDirty) {
                return;
            }
            let result;
            if (method instanceof RegExp) {
                result = value ? await method.test(value) : true;
            }
            else if (typeof method === 'function') {
                result = this.compareWith
                    ? await method(value, this.compareWith, this.form.state)
                    : await method(value, this.form);
            }
            else if (!method) {
                return;
            }
            if (result) {
                this.setError(false);
                return;
            }
            let message;
            if (typeof errorMessage === 'string') {
                message = errorMessage;
            }
            else if (typeof errorMessage === 'function') {
                message = errorMessage(this.fieldProps);
            }
            this.setError(true, message);
            if (formError) {
                throw new Error(formError);
            }
            throw new Error(FORM_ALERTS.NOT_ALL_FIELD_FILLED);
        }), Promise.resolve());
        // TODO: any
        this.form = form;
        this.errorMessage = '';
        this.isError = false;
        this.compareWith = null;
        this.fieldProps = fieldProps;
        this.validationMethods = Object.keys(VALIDATORS).reduce((acc, options) => {
            // TODO: any
            if (fieldProps[options]) {
                if (typeof VALIDATORS[options].method === 'function') {
                    const { method, errorMessage } = VALIDATORS[options];
                    if (options === 'equalWith') {
                        this.compareWith = fieldProps[options];
                        return [
                            ...acc,
                            {
                                method,
                                errorMessage,
                            },
                        ];
                    }
                    return [
                        ...acc,
                        {
                            method: reverseBind(method, fieldProps[options]),
                            errorMessage,
                        },
                    ];
                }
                return [...acc, VALIDATORS[options]];
            }
            if (fieldProps.type === options && !fieldProps.noValidate) {
                return [...acc, VALIDATORS[options]];
            }
            return acc;
        }, []);
        if (fieldProps.validate) {
            if (Array.isArray(fieldProps.validate)) {
                this.validationMethods = this.validationMethods.concat(fieldProps.validate);
            }
            else {
                this.validationMethods.push(fieldProps.validate);
            }
        }
        if (fieldProps.asyncValidation) {
            this.validationMethods.push({ method: fieldProps.asyncValidation });
        }
    }
    get fieldState() {
        return this.form.fields[this.fieldProps.name];
    }
}
