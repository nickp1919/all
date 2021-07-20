export default class Validator {
    form: any;
    errorMessage: string;
    isError: boolean;
    compareWith: {} | null;
    fieldProps: any;
    validationMethods: any;
    constructor(fieldProps: any, form: any);
    setError: (isError: boolean, errorMessage?: string) => void;
    get fieldState(): any;
    validate: (value: string) => any;
}
