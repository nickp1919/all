import * as React from 'react';
export declare type FormExposed = {
    submit: () => void;
    reset: () => void;
    element: React.ElementRef<any>;
    validateField(name: string, value: any): Promise<any>;
    changeState: (value: {}) => void;
};
export declare type FormComponentsProps = {
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
export declare type FormContextType = {
    fields: {
        [key: string]: {
            value: any;
            validation: {
                errorMessages?: [] | Record<string, any>;
                hasError?: boolean;
            };
        };
    };
    onSubmit: any;
    onChange: any;
    addField: Function;
    errorMessage: string;
};
export declare type BasicFormComponent = {
    id?: string;
    name: string;
    label?: string;
    placeholder?: string;
    value?: any;
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
