export declare const DATE_FORMAT1 = "d MMMM";
export declare const DATE_FORMAT2 = "dd MMMM yyyy";
export declare const DATE_FORMAT3 = "dd.MM.yyyy, HH:mm";
export declare const DATE_FORMAT4 = "dd.MM.yyyy  |  HH:mm";
export declare const DATE_FORMAT_SERVER = "ISO 8601";
export declare const CREATE_QUESTION: {
    TYPE_UPDATE: {
        ANSWER: string;
        QUESTION: string;
        DELETE_ANSWER: string;
        INFO: string;
        COPY_QUESTION: string;
        DELETE_MATRIX_HEAD: string;
        MATRIX_HEAD: string;
        LIKERT_INITIAL_VALUE: string;
        LIKERT_CHANGE_TYPE: string;
    };
    SCORING_TYPE: {
        CORRECTINCORRECT: {
            name: string;
            value: string;
        };
        NOSCORE: {
            name: string;
            value: string;
        };
    };
    ESSAY_ANSWER_TYPE: {
        ONLYTEXT: {
            name: string;
            value: string;
        };
    };
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
    MATRIX_ANSWER_TYPE: {
        SINGLE: {
            name: string;
            value: string;
        };
    };
    SAVE_TYPE: {
        NEW: string;
        UPDATE: string;
        COPY: string;
    };
    SAVE_QUESTIONS_INIT: {
        NEW_QUESTION: string;
        APPLY_SAVE: string;
        APPLY_SAVE_COPY: string;
        SAVE_AND_CLOSE: string;
    };
};
export declare const ASSIGNMENTS: {
    ROUTE: string;
    ROUTE_360: string;
    ROUTE_COLLECTION: string;
    ROUTE_COLLECTION_360: string;
    BUTTONS: {
        info: {
            name: string;
            url: string;
        };
        participants: {
            name: string;
            url: string;
            count: number;
        };
        reports: {
            name: string;
            url: string;
        };
    };
    BUTTONS_360: {
        name: string;
        url: string;
    }[];
    RETRY_ATTEMPTS: {
        LIMIT: {
            id: string;
            name: string;
        };
        NO_LIMIT: {
            id: string;
            name: string;
        };
    };
};
export declare const TESTNAVMODE: {
    RANDOM: string;
    SCALAR: string;
};
export declare const MAIN_BUTTONS: ({
    name: string;
    url: undefined;
    childrens: string[];
} | {
    name: string;
    url: string;
    childrens?: undefined;
})[];
export declare const PROJECT: {
    ROLES: {
        OWNER: {
            name: string;
            value: string;
        };
        PARTICIPANT: {
            name: string;
            value: string;
        };
    };
    BUTTONS: {
        name: string;
        url: string;
    }[];
    TYPE: {
        SBERTEST: {
            value: string;
            name: string;
        };
    };
};
export declare const INF_TEXT: {
    INFINITY: string;
    UNLIMITED: string;
};
export declare const PAGINATION: {
    SIZE_SELECTOR_COUNTS: number[];
    FIRST_PAGE: number;
};
export declare const REPORT: {
    STATUS: {
        COMPLETED: {
            name: string;
            value: string;
        };
    };
    TYPE: {
        REPORT_RETRIES: {
            name: string;
            value: string;
        };
        REPORT_TEST_PROTOCOL: {
            name: string;
            value: string;
        };
        REPORT_ASSIGNMENTS: {
            name: string;
            value: string;
        };
        REPORT_SBERTEST: {
            name: string;
            value: string;
        };
        REPORT_HORIZONTAL_MATRIX: {
            name: string;
            value: string;
        };
        REPORT_VERTICAL_MATRIX: {
            name: string;
            value: string;
        };
    };
    ERROR_STATUS: {
        NOT_ACCEPTABLE: {
            name: string;
            code: number;
        };
    };
};
export declare const SUBJECTS: {
    MOD: {
        SEPARATE: string;
        DEPENDED: string;
    };
    DRAG_TYPE: {
        SUBJECT: string;
        QUESTION: string;
        SUBJECTS_BLOCK: string;
        QUESTIONS_BLOCK: string;
    };
    OPEN: {
        YES: string;
        NO: string;
    };
    SUBJECTS_CONTROL_WRAPPER: string;
    SUBJECTS_CONTROL_LIST: string;
};
export declare const ASSESSMENT_360_ROLES: {
    BOSS: {
        name: string;
        value: string;
    };
    FUNC_BOSS: {
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
export declare const ASSESSMENET_360_USER_TYPES: {
    REGULAR: string;
    FIXED: string;
};
export declare const ESTIMATOR_STATUSES: {
    SUCCESS: string;
    FAILED: string;
    ESTIMATED_360: string;
    NOT_STARTED: string;
};
