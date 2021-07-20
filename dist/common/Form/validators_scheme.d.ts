declare const VALIDATORS: {
    required: {
        method: (value: string) => boolean;
        errorMessage: string;
        formError: string;
    };
    agreement: {
        method: (value: string) => boolean;
        errorMessage: string;
    };
    email: {
        method: RegExp;
        errorMessage: string;
    };
    address: {
        method: RegExp;
        errorMessage: string;
    };
    password: {
        method: RegExp;
        errorMessage: string;
    };
    equalWith: {
        method: (value: string, fieldName: string, { fields }: any) => boolean;
        errorMessage: string;
    };
    referrer: {
        method: (value: string) => boolean | "" | null;
        errorMessage: string;
    };
};
export default VALIDATORS;
