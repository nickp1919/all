export declare const DATE_FORMAT = "dd.MM.yyyy";
export declare const QUESTION: {
    LIKERT_ANSWER_TYPE: {
        DESCRIPTIONANDNUM: {
            name: string;
            value: string;
        };
        NUM: {
            name: string;
            value: string;
        };
        NUMANDTITLE: {
            name: string;
            value: string;
        };
        TITLE: {
            name: string;
            value: string;
        };
        DESCRIPTION: {
            name: string;
            value: string;
        };
    };
    ANSWER_VARIANT: {
        VALUE: string;
    };
};
export declare const NUMBERS: {
    ZERO: number;
    ONE: number;
};
export declare const ASSESSMENT_360: {
    BUTTONS: {
        name: string;
        url: string;
    }[];
    TYPE: {
        FIXED: {
            name: string;
        };
        REGULAR: {
            name: string;
        };
    };
    ROLES: {
        ALL: {
            name: string;
            value: string;
        };
        BOSS: {
            name: string;
            value: string;
        };
        COLLEAGUE: {
            name: string;
            value: string;
        };
        SUBORDINATE: {
            name: string;
            value: string;
        };
        SELF: {
            name: string;
            value: string;
        };
    };
    URL: string;
    STATUSES: {
        NOT_STARTED: {
            name: string;
            value: string;
        };
        ESTIMATED_360: {
            name: string;
            value: string;
        };
        SUCCESS: {
            name: string;
            value: string;
        };
    };
};
export declare const ALL_TAG: {
    name: string;
    value: string;
    color: string;
};
export declare type ColorType = '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11';
export declare const TAG_COLORS: {
    [key: string]: ColorType;
};
export declare const MESSAGES: {
    variant: {
        black: string;
        default: string;
    };
};
export declare const TEST_MAIN_BUTTONS_TEXT: {
    CANCEL_ASSIGMENT_BUTTON: string;
    ADDITIONAL_MATERIAL_BUTTON: string;
    FINISH_BUTTON: string;
    START_BUTTON: string;
    START_RETRY_BUTTON: string;
    CONTINUE_BUTTON: string;
};
