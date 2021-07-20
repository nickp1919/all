export const API = {
    http: '/api-web/assessment/',
    img: '/api-web/cs/api/1/',
};
export const SORTING = {
    reverse: 'reverse',
    increase: 'increase',
    number: 'number',
};
export const NO_OVERFLOW_CLASS = 'assessment-client-overflow';
export const BUTTON_EXTRA_TYPE = {
    TEXT_BUTTON: 'textButton',
    CANCEL_BUTTON: 'cancel',
    WARNING_BUTTON: 'warning',
};
export const BUTTON_PULSE_TYPE = {
    secondary: 'secondary',
    tertiary: 'tertiary',
    primary: 'primary',
};
export const BUTTON_SIZE = {
    s: 's',
    m: 'm',
    l: 'l',
};
export const MODAL_SIZE = {
    s: 's',
    m: 'm',
    l: 'l',
};
export const TEST = {
    TYPE_QUESTION: {
        SINGLE_CHOICE: {
            name: 'одиночный',
            value: 'SINGLE_CHOICE',
        },
        MULTIPLE_CHOICE: {
            name: 'множественный',
            value: 'MULTIPLE_CHOICE',
        },
        SORTING: {
            name: 'сортировка',
            value: 'SORTING',
        },
        LIKERT_SCALE: {
            name: 'ликерт',
            value: 'LIKERT_SCALE',
        },
        CORRESPONDENCE: {
            name: 'сортировка',
            value: 'CORRESPONDENCE',
        },
        TEXT: {
            name: 'вопросы с текстом',
            value: 'TEXT',
        },
        ESSAY: {
            name: 'эссе',
            value: 'ESSAY',
        },
        MATRIX: {
            name: 'матрица',
            value: 'MATRIX',
        },
        ASMT_360: {
            name: 'оценка 360',
            value: 'ASMT_360',
        },
    },
    TEST_SHOW_MODE: {
        SHOWALL: 'SHOWALL',
        SHOWSEPERATE: 'SHOWSEPERATE',
    },
    ANSWER_TYPE: {
        CHOICE: 'choice',
        ESSAY: 'essay',
        LIKERT: 'likert',
        MATRIX: 'matrix',
    },
    MAIN_PAGE_INFO: {
        STATUS: 'общий результат',
        POINTS: 'набрано баллов',
        PERCENT: 'процент',
        TIME: 'время прохождения',
    },
    TYPE: {
        SURVEY: {
            name: 'опрос',
            value: 'SURVEY',
        },
        TEST: {
            name: 'тест',
            value: 'TEST',
        },
        ASMT_360: {
            name: 'Оценка 360',
            value: 'ASMT_360',
        },
    },
    ESSAY_ANSWER_TYPE: {
        ONLYTEXT: 'ONLYTEXT',
        ONLYFILE: 'ONLYFILE',
        TEXTANDFILE: 'TEXTANDFILE',
    },
    SCALE_TYPE: {
        GRADE: 'GRADE',
        PERCENT: 'PERCENT',
    },
    TYPE_FIELD: {
        DROPDOWN: 'DROPDOWN',
        COMMON: 'COMMON',
    },
    BUTTONS: [
        {
            name: 'основное',
            url: 'info',
        },
        /*{
                name: 'содержание',
                url: 'subjects',
            },*/
        {
            name: 'назначение',
            url: 'assignments',
        },
        {
            name: 'отчетность',
            url: 'reports',
        },
        /*{
                name: 'проверка',
                url: 'verification',
            },*/
        /*{
                name: 'результаты',
                url: 'results',
            },*/
    ],
    BUTTONS_360: [
        {
            name: 'основное',
            url: 'info',
        },
        {
            name: 'агрегатор назначений',
            url: 'assessment360-groups',
        },
    ],
    TEST_FINISH_MODE: {
        FINISHONCE: 'FINISHONCE',
        BESTSCORE: 'BESTSCORE',
        BESTPERCENT: 'BESTPERCENT',
        ALLATTEMPTSUSED: 'ALLATTEMPTSUSED',
    },
    TEST_HINT: [
        {
            id: 'tag.01',
            name: 'обычное',
        },
        {
            id: 'tag.02',
            name: 'важное',
        },
        {
            id: 'tag.07',
            name: 'супер-важное',
        },
    ],
    TEST_SCALE_TYPE: {
        PERCENT: 'PERCENT',
        GRADE: 'GRADE',
    },
    TEST_TYPE: {
        SURVEY: {
            name: 'опрос',
            value: 'SURVEY',
        },
        TEST: {
            name: 'тест',
            value: 'TEST',
        },
        ASMT_360: {
            name: 'оценка 360',
            value: 'ASMT_360',
        },
    },
};
export const STATUSES = {
    TEST_NEW: {
        ACTIVE: 'ACTIVE',
    },
    TEST_COMPLETED: {
        SUCCESS: 'SUCCESS',
        FAILED: 'FAILED',
        CHECKING_RESULT: 'CHECKING_RESULT',
        NO_ATTEMPTS: 'NO_ATTEMPTS',
    },
    TEST_COMPLETED_TRANSLATE: {
        SUCCESS: 'Успешно',
        FAILED: 'Не успешно',
        CHECKING_RESULT: 'В процессе',
    },
    RETRY_STATUS: {
        ACTIVE: 'ACTIVE',
        CLOSED: 'CLOSED',
        CREATED: 'CREATED',
    },
    ASSIGNMENT_STATUS: {
        ACTIVE: 'ACTIVE',
        CLOSED: 'CLOSED',
        REMOVED: 'REMOVED',
        REMOVED_BY_USER: 'REMOVED_BY_USER',
    },
    EST_NEW: {
        ACTIVE: 'ACTIVE',
    },
    ASSIGNMENT: {
        ACTIVE: 'ACTIVE',
        REMOVED: 'REMOVED',
    },
};
export const ERROR = {
    FORBIDDEN: {
        code: 403,
        text: 'У вас не достаточно прав доступа',
    },
};
export const FORM = {
    FORM_ALERTS: {
        REQUIRED_FIELDS: 'Please fill all required fields',
        NOT_ALL_FIELD_FILLED: 'Please, correct the fields before submit',
    },
    FORM_DISABLED_STATE: {
        ENABLED: 0,
        SUBMIT_BUTTON: 1,
        FORM: 2,
    },
    FIELD_ALERTS: {
        REQUIRED_FIELD: 'This field is required',
        CORRECT_EMAIL: 'Please, enter a correct email',
        PASSWORDS_MATCH: 'Passwords does not match!',
        PASSWORD_CONFIRM: 'Password confirm is required',
        RECAPTCHA_TEXT: 'Don’t be a robot. Pass the reCAPTCHA',
        AGREEMENT_TEXT: 'You must agree in order to proceed',
        REFERRER_TEXT: 'Referrer ID may contain 6 or 9 latin letters and numbers',
    },
    FIELD_TOOLTIPS: {
        EMAIL: 'Enter a valid e-mail address',
        PASSWORD: 'The password field must contain minimum 8 characters, at least one uppercase letter, one lowercase letter and one number',
        ETHER_ADDRESS: 'Please enter correct Ethereum wallet address',
        REFERRER: 'It must contains of 6 latin symbols and numbers',
    },
};
export const FORM_VALIDATE = {
    EMAIL: {
        name: 'email',
        rule: new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/),
        message: FORM.FIELD_ALERTS.CORRECT_EMAIL,
        tooltip: FORM.FIELD_TOOLTIPS.EMAIL,
    },
    ONLY_NUMBERS: {
        rule: /^\d+$/g,
    },
};
export const POPUP_DIRECTION = {
    TOP: 'top',
    TOP_LEFT: 'topLeft',
    TOP_RIGHT: 'topRight',
    BOTTOM: 'bottom',
    BOTTOM_LEFT: 'bottomLeft',
    BOTTOM_RIGHT: 'bottomRight',
};
export const HTTP_SEARCH_USERS = {
    OPTIONS: {
        errorCodeQuery: 'error.code',
        errorMessageQuery: 'error.message',
        headers: {
            'X-HRP-Device-Type': 'web',
        },
    },
    URL: '/globalsearch/api/v2/search/',
};
export const TIME_OUTS = {
    default: 200,
    checkBox: 5,
};
export const REGEXP_RECIPES = {
    // ^$ будет просто соответствовать строке без символов между началом и концом ввода.
    NATURAL_NUMBERS: new RegExp('^$|^[0-9][0-9]*$'),
    NATURAL_NUMBERS_WITH_ONE: new RegExp('^$|^[1-9][0-9]*$'), // Натуральные числа - начиная с 1
};
export const RESOLUTION = {
    mobile: {
        default: '980px',
        phone: '500px',
    },
};
export const INDENTS = {
    default: '2%',
};
export const FontType = {
    default: {
        fontFamily: 'Helvetica, Arial, sans-serif;',
        variant: 'body2Regular',
        color: 'inherit',
        as: 'div',
        fontWeight: 'font-weight: 400;',
    },
    bold: {
        fontWeight: 'font-weight: bold;',
    },
};
export const BIG_MODAL = {
    height: '90vh',
};
