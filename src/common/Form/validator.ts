import { reverseBind } from '@utils';

import { FORM } from '@constants';

const { FORM_ALERTS } = FORM;

import VALIDATORS from './validators_scheme';

export default class Validator {
  form: any; // TODO: any
  errorMessage: string;
  isError: boolean;
  compareWith: {} | null;
  fieldProps: any; // TODO: any
  validationMethods: any; // TODO: any

  constructor(fieldProps: any, form: any) {
    // TODO: any
    this.form = form;
    this.errorMessage = '';
    this.isError = false;
    this.compareWith = null;
    this.fieldProps = fieldProps;

    this.validationMethods = Object.keys(VALIDATORS).reduce((acc: any, options) => {
      // TODO: any
      if (fieldProps[options]) {
        if (typeof VALIDATORS[options as keyof typeof VALIDATORS].method === 'function') {
          const { method, errorMessage } = VALIDATORS[options as keyof typeof VALIDATORS];

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

        return [...acc, VALIDATORS[options as keyof typeof VALIDATORS]];
      }

      if (fieldProps.type === options && !fieldProps.noValidate) {
        return [...acc, VALIDATORS[options as keyof typeof VALIDATORS]];
      }

      return acc;
    }, []);

    if (fieldProps.validate) {
      if (Array.isArray(fieldProps.validate)) {
        this.validationMethods = this.validationMethods.concat(fieldProps.validate);
      } else {
        this.validationMethods.push(fieldProps.validate);
      }
    }

    if (fieldProps.asyncValidation) {
      this.validationMethods.push({ method: fieldProps.asyncValidation });
    }
  }

  setError = (isError: boolean, errorMessage = '') => {
    this.errorMessage = errorMessage;
    this.isError = isError;
  };

  get fieldState() {
    return this.form.fields[this.fieldProps.name];
  }

  validate = (value: string) =>
    this.validationMethods.reduce(
      (
        promise: any,
        { method, errorMessage, formError }: any // TODO: any
      ) =>
        promise.then(async () => {
          if (this.fieldState.initValue === value && this.fieldState.grabIfDirty) {
            return;
          }

          let result;

          if (method instanceof RegExp) {
            result = value ? await method.test(value) : true;
          } else if (typeof method === 'function') {
            result = this.compareWith
              ? await method(value, this.compareWith, this.form.state)
              : await method(value, this.form);
          } else if (!method) {
            return;
          }

          if (result) {
            this.setError(false);

            return;
          }

          let message;

          if (typeof errorMessage === 'string') {
            message = errorMessage;
          } else if (typeof errorMessage === 'function') {
            message = errorMessage(this.fieldProps);
          }

          this.setError(true, message);

          if (formError) {
            throw new Error(formError);
          }

          throw new Error(FORM_ALERTS.NOT_ALL_FIELD_FILLED);
        }),
      Promise.resolve()
    );
}
