export declare const API: {
    http: string;
    img: string;
};
export declare const SORTING: {
    reverse: string;
    increase: string;
    number: string;
};
export declare const NO_OVERFLOW_CLASS = "assessment-client-overflow";
export declare type ExtraType = 'cancel' | 'textButton' | 'warning';
export declare const BUTTON_EXTRA_TYPE: {
    [key: string]: ExtraType;
};
export declare type Type = 'primary' | 'secondary' | 'tertiary' | undefined;
export declare const BUTTON_PULSE_TYPE: {
    [key: string]: Type;
};
export declare type Size = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
export declare const BUTTON_SIZE: {
    [key: string]: Size;
};
export declare type SizeModal = 's' | 'm' | 'l';
export declare const MODAL_SIZE: {
    [key: string]: SizeModal;
};
export declare const TEST: {
    TYPE_QUESTION: {
        SINGLE_CHOICE: {
            name: string;
            value: string;
        };
        MULTIPLE_CHOICE: {
            name: string;
            value: string;
        };
        SORTING: {
            name: string;
            value: string;
        };
        LIKERT_SCALE: {
            name: string;
            value: string;
        };
        CORRESPONDENCE: {
            name: string;
            value: string;
        };
        TEXT: {
            name: string;
            value: string;
        };
        ESSAY: {
            name: string;
            value: string;
        };
        MATRIX: {
            name: string;
            value: string;
        };
        ASMT_360: {
            name: string;
            value: string;
        };
    };
    TEST_SHOW_MODE: {
        SHOWALL: string;
        SHOWSEPERATE: string;
    };
    ANSWER_TYPE: {
        CHOICE: string;
        ESSAY: string;
        LIKERT: string;
        MATRIX: string;
    };
    MAIN_PAGE_INFO: {
        STATUS: string;
        POINTS: string;
        PERCENT: string;
        TIME: string;
    };
    TYPE: {
        SURVEY: {
            name: string;
            value: string;
        };
        TEST: {
            name: string;
            value: string;
        };
        ASMT_360: {
            name: string;
            value: string;
        };
    };
    ESSAY_ANSWER_TYPE: {
        ONLYTEXT: string;
        ONLYFILE: string;
        TEXTANDFILE: string;
    };
    SCALE_TYPE: {
        GRADE: string;
        PERCENT: string;
    };
    TYPE_FIELD: {
        DROPDOWN: string;
        COMMON: string;
    };
    BUTTONS: {
        name: string;
        url: string;
    }[];
    BUTTONS_360: {
        name: string;
        url: string;
    }[];
    TEST_FINISH_MODE: {
        FINISHONCE: string;
        BESTSCORE: string;
        BESTPERCENT: string;
        ALLATTEMPTSUSED: string;
    };
    TEST_HINT: {
        id: string;
        name: string;
    }[];
    TEST_SCALE_TYPE: {
        PERCENT: string;
        GRADE: string;
    };
    TEST_TYPE: {
        SURVEY: {
            name: string;
            value: string;
        };
        TEST: {
            name: string;
            value: string;
        };
        ASMT_360: {
            name: string;
            value: string;
        };
    };
};
export declare const STATUSES: {
    TEST_NEW: {
        ACTIVE: string;
    };
    TEST_COMPLETED: {
        SUCCESS: string;
        FAILED: string;
        CHECKING_RESULT: string;
        NO_ATTEMPTS: string;
    };
    TEST_COMPLETED_TRANSLATE: {
        SUCCESS: string;
        FAILED: string;
        CHECKING_RESULT: string;
    };
    RETRY_STATUS: {
        ACTIVE: string;
        CLOSED: string;
        CREATED: string;
    };
    ASSIGNMENT_STATUS: {
        ACTIVE: string;
        CLOSED: string;
        REMOVED: string;
        REMOVED_BY_USER: string;
    };
    EST_NEW: {
        ACTIVE: string;
    };
    ASSIGNMENT: {
        ACTIVE: string;
        REMOVED: string;
    };
};
export declare const ERROR: {
    FORBIDDEN: {
        code: number;
        text: string;
    };
};
export declare const FORM: {
    FORM_ALERTS: {
        REQUIRED_FIELDS: string;
        NOT_ALL_FIELD_FILLED: string;
    };
    FORM_DISABLED_STATE: {
        ENABLED: number;
        SUBMIT_BUTTON: number;
        FORM: number;
    };
    FIELD_ALERTS: {
        REQUIRED_FIELD: string;
        CORRECT_EMAIL: string;
        PASSWORDS_MATCH: string;
        PASSWORD_CONFIRM: string;
        RECAPTCHA_TEXT: string;
        AGREEMENT_TEXT: string;
        REFERRER_TEXT: string;
    };
    FIELD_TOOLTIPS: {
        EMAIL: string;
        PASSWORD: string;
        ETHER_ADDRESS: string;
        REFERRER: string;
    };
};
export declare const FORM_VALIDATE: {
    EMAIL: {
        name: string;
        rule: RegExp;
        message: string;
        tooltip: string;
    };
    ONLY_NUMBERS: {
        rule: RegExp;
    };
};
export declare const POPUP_DIRECTION: {
    [key: string]: string;
};
export declare const HTTP_SEARCH_USERS: {
    OPTIONS: {
        errorCodeQuery: string;
        errorMessageQuery: string;
        headers: {
            'X-HRP-Device-Type': string;
        };
    };
    URL: string;
};
export declare const TIME_OUTS: {
    default: number;
    checkBox: number;
};
export declare const REGEXP_RECIPES: {
    NATURAL_NUMBERS: RegExp;
    NATURAL_NUMBERS_WITH_ONE: RegExp;
};
export declare const RESOLUTION: {
    mobile: {
        default: string;
        phone: string;
    };
};
export declare const INDENTS: {
    default: string;
};
