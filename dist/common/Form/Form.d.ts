/// <reference types="node" />
import React, { ReactNode } from 'react';
export declare type FormContextType = {
    fields: {
        [key: string]: {
            value: any;
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
declare type FormProps = {
    onSubmit?: Function;
    callback?: () => void;
    children: ReactNode;
    className?: string;
    initialValues?: {
        [key: string]: any;
    };
    onChange?: Function;
    disabled?: number;
    handlerError?: (resp: Record<string, any>) => {
        data: {
            [key: string]: {}[] | {};
        };
        message: string;
    };
    onSuccess?: string;
    validationAlerts?: boolean;
    disableOnSubmit?: boolean;
};
declare type State = {
    fields: {};
    hasError: boolean;
    errorMessage: string;
    disabled: number;
    isSuccess: boolean;
    validationAlerts: boolean;
};
export declare const FormContext: React.Context<{}>;
export default class Form extends React.Component<FormProps, State> {
    id: NodeJS.Timeout;
    $form: React.RefObject<HTMLFormElement>;
    formUnmount: boolean;
    constructor(props: FormProps);
    componentDidUpdate(prevProps: FormProps): void;
    componentWillUnmount(): void;
    get fields(): any;
    _handleSubmit: () => void;
    resetForm: () => void;
    deleteField: (fieldName: string) => void;
    addField: (fieldProps: any) => void;
    onFieldChange: (fieldName: string, value: any, callBack?: Function | undefined) => void;
    onFieldFocusChange: (fieldName: string, value: any) => void;
    validateField: (fieldName: string, value: string) => any;
    resetFieldValidation: (fieldName: string) => void;
    checkErrors: () => void;
    validateFields: () => Promise<any[]>;
    setError: (err?: Error | null | undefined, validationAlerts?: boolean | undefined) => void;
    setSuccess: (isSuccess: boolean) => void;
    _serializeFields: () => {};
    onSubmit: (e?: any) => void;
    disableForm: (disabled: number) => void;
    updateFieldsError: ({ message, data }: Record<string, any>) => void;
    updateInitValue(): void;
    onFocusInit: (event: FocusEvent) => void;
    render(): JSX.Element;
}
export {};
