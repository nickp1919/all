import * as React from 'react';

export type FormExposed = {
  submit: () => void;
  reset: () => void;
  element: React.ElementRef<any>; // TODO: any
  validateField(name: string, value: any): Promise<any>; // TODO: any
  changeState: (value: {}) => void;
};

// export type FormEventCallBack = (value: string | boolean, form: FormExposed) => void;

export type FormComponentsProps = {
  name: string;
  label?: string;
  placeholder?: string;
  value?: string | number | boolean;
  className?: string;
  icon?: {
    element: React.ReactNode;
    rightAlign?: boolean;
  };
  disabled?: boolean;
  tooltip?: string;
  maxLength?: number;
  form?: FormExposed;
  autocomplete?: 'on' | 'off';
  required?: boolean;
};

export type FormContextType = {
  fields: {
    [key: string]: {
      value: any; // TODO: any
      validation: {
        errorMessages?: [] | Record<string, any>; // TODO: any
        hasError?: boolean;
      };
    };
  };
  onSubmit: any; // TODO: any
  onChange: any; // TODO: any
  addField: Function;
  errorMessage: string;
};

export type BasicFormComponent = {
  id?: string;
  name: string;
  label?: string;
  placeholder?: string;
  value?: any; // TODO: any
  className?: string;
  disabled?: boolean;
  required?: boolean;
  grabIfDirty?: boolean;
  validate?: {} | {}[];
  onChange?: (value: string, context?: FormContextType) => void;
  onFocus?: (e: any, context?: FormContextType) => void;
  onBlur?: (e: any, context?: FormContextType) => void;
  validateOnSubmit?: boolean;
  dynamicValidate?: boolean;
  hidden?: boolean;
  tabIndex?: number;
  withContext?: boolean;
  checked?: boolean;
};
