import React, { ReactNode } from 'react';
import cn from 'classnames';

import { FORM } from '@constants';

const { FORM_DISABLED_STATE } = FORM;

import Validator from './validator';
import { isUndefined } from '@utils';

export type FormContextType = {
  fields: {
    [key: string]: {
      value: any; // TODO: any
      validation: {
        errorMessages?: string;
        hasError?: boolean;
      };
    };
  };
  onChange: Function;
  addField: Function;
  deleteField: Function;
  onSubmit: Function;
  onBlur: Function;
  disableForm: Function;
  onFocus: Function;
  errorMessage: string;
  isSuccess: string | undefined;
  disabled: number;
};

type FormProps = {
  //action: (serializeFields: {} | { [p: string] }) => Promise<{}>;
  onSubmit?: Function;
  callback?: () => void;
  children: ReactNode;
  className?: string;
  initialValues?: {
    [key: string]: any; // TODO: any
  };
  onChange?: Function;
  disabled?: number;
  handlerError?: (
    resp: Record<string, any> // TODO: any
  ) => {
    data: {
      [key: string]: {}[] | {};
    };
    message: string;
  };
  onSuccess?: string;
  validationAlerts?: boolean;
  disableOnSubmit?: boolean;
};

type State = {
  fields: {};
  hasError: boolean;
  errorMessage: string;
  disabled: number;
  isSuccess: boolean;
  validationAlerts: boolean;
};

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

export default class Form extends React.Component<FormProps, State> {
  id = setTimeout(() => {}, 0);
  $form = React.createRef<HTMLFormElement>();

  formUnmount = false;

  constructor(props: FormProps) {
    super(props);

    const { disabled, validationAlerts } = props;

    this.state = Object.assign(
      {},
      initState,
      disabled ? { disabled } : {},
      typeof validationAlerts !== 'undefined' ? { validationAlerts } : {}
    );
  }

  componentDidUpdate(prevProps: FormProps) {
    const { disabled, initialValues }: any = this.props; // TODO: any
    const { fields }: any = this.state; // TODO: any

    if (disabled !== prevProps.disabled) {
      this.disableForm(disabled);
    }

    if (initialValues !== prevProps.initialValues) {
      const updateFields: any = {}; // TODO: any

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

  get fields(): any {
    const { fields } = this.state;

    return fields;
  }

  _handleSubmit = () => {
    this.onSubmit();
  };

  resetForm = () => {
    Object.keys(this.fields).forEach((fieldName) => {
      this.fields[fieldName].value = this.fields[fieldName].initValue;
      this.fields[fieldName].validation.setError(false);
    });

    this.disableForm(FORM_DISABLED_STATE.ENABLED);
    this.setError();
  };

  deleteField = (fieldName: string) => {
    delete this.fields[fieldName];

    this.setState({
      fields: this.fields,
    });
  };

  addField = (fieldProps: any) => {
    // TODO: any
    const { initialValues } = this.props;
    const { value: propValue = '' } = fieldProps.value !== null && fieldProps;

    this.setState(({ fields }) => {
      const value =
        initialValues && !isUndefined(initialValues[fieldProps.name])
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

  onFieldChange = (fieldName: string, value: any, callBack?: Function) => {
    // TODO: any

    const { isSuccess } = this.state,
      { onChange } = this.props;

    if (isSuccess) {
      this.setSuccess(false);
    }

    this.resetFieldValidation(fieldName);

    this.setState(
      ({ fields }: any) => ({
        // TODO: any

        fields: {
          ...fields,
          [fieldName]: {
            ...fields[fieldName],
            value,
          },
        },
      }),
      () => {
        if (this.fields[fieldName].validateOnSubmit) {
          if (callBack) callBack();
        } else if (this.fields[fieldName].dynamicValidate) {
          clearTimeout(this.id);

          this.id = setTimeout(
            () =>
              this.validateField(fieldName, value).then((res: boolean) =>
                !res && callBack ? callBack() : null
              ),
            VALIDATION_DELAY
          );
        } else {
          this.checkErrors();
        }

        onChange && onChange(this.fields);
      }
    );
  };

  onFieldFocusChange = (fieldName: string, value: any) => {
    // TODO: any
    const { fields }: any = this.state, // TODO: any
      field = fields[fieldName];

    if (this.id) {
      clearTimeout(this.id);
    }

    if (field?.validateOnSubmit) return;

    if (field?.initValue !== field?.value) this.validateField(fieldName, value);
  };

  validateField = (fieldName: string, value: string) => {
    // TODO: any
    return this.fields[fieldName].validation
      .validate(value)
      .then(() => {
        this.checkErrors();
        return false;
      })
      .catch((err: Error) => {
        const { validationAlerts } = this.state;

        this.setError(err, validationAlerts);

        return true;
      });
  };

  resetFieldValidation = (fieldName: string) => {
    this.fields[fieldName]?.validation?.setError(false);
  };

  // resetFieldsValidation = () => {
  //   Object.keys(this.fields).forEach(this.resetFieldValidation);
  // };

  checkErrors = () => {
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

  validateFields = () => {
    const fieldsValidation = Object.keys(this.fields).map((field) =>
      this.fields[field].validation.validate(this.fields[field].value)
    );

    return Promise.all(fieldsValidation);
  };

  setError = (err?: Error | null, validationAlerts?: boolean) => {
    this.setState((): any => {
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

  setSuccess = (isSuccess: boolean) => this.setState({ isSuccess });

  _serializeFields = () =>
    Object.keys(this.fields).reduce((acc, field) => {
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

  onSubmit = (e?: any) => {
    if (e) {
      e.preventDefault();
    }

    const { disableOnSubmit = true } = this.props;

    if (disableOnSubmit) {
      this.disableForm(FORM_DISABLED_STATE.FORM);
    }

    const {
      props: { onSubmit, callback, handlerError, onSuccess },
    } = this;

    this.validateFields()
      .then(() => {
        if (onSubmit) {
          onSubmit(this._serializeFields());
        }
      })
      .catch((error: Error) => {
        this.disableForm(FORM_DISABLED_STATE.SUBMIT_BUTTON);
        this.setError(error);
      })
      .then(() => {
        if (this.formUnmount) {
          return;
        }

        this.disableForm(FORM_DISABLED_STATE.ENABLED);
        this.updateInitValue();

        if (callback) callback();
        if (onSuccess) this.setSuccess(true);
      })
      .catch((resp: any) => {
        const errorDetails = handlerError ? handlerError(resp) : resp;

        this.disableForm(FORM_DISABLED_STATE.SUBMIT_BUTTON);
        this.updateFieldsError(errorDetails);
      });
  };

  disableForm = (disabled: number) => this.setState({ disabled });

  updateFieldsError = ({ message, data }: Record<string, any>) => {
    if (data) {
      Object.keys(data).forEach((field) => {
        if (this.fields[field]) {
          const errorMessage = Array.isArray(data[field])
            ? data[field].map(({ message: fieldError }: any) => fieldError).join(', ')
            : data[field].message;

          this.fields[field].validation.setError(true, errorMessage);
        }
      });
    }

    this.setError(new Error(message), true);
  };

  updateInitValue() {
    const newFields: any = {}; // TODO: any

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

  onFocusInit = (event: FocusEvent) => {
    //const { currentTarget } = event || {};
  };

  render() {
    const {
      state: { fields, disabled, errorMessage, isSuccess },
      props: { children, className, onSuccess },
      addField,
      deleteField,
      onFieldChange,
      onFieldFocusChange,
      onSubmit,
      disableForm,
      onFocusInit,
    } = this;

    const value: FormContextType = {
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

    return (
      <form ref={this.$form} onSubmit={this.onSubmit} className={classList} noValidate>
        <FormContext.Provider value={value}>{children}</FormContext.Provider>
      </form>
    );
  }
}
