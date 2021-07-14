export const DATE_FORMAT1 = 'd MMMM';
export const DATE_FORMAT2 = 'dd MMMM yyyy';
export const DATE_FORMAT3 = 'dd.MM.yyyy, HH:mm';
export const DATE_FORMAT4 = 'dd.MM.yyyy  |  HH:mm';
export const DATE_FORMAT_SERVER = 'ISO 8601';

export const CREATE_QUESTION = {
  TYPE_UPDATE: {
    ANSWER: 'answer',
    QUESTION: 'question',
    DELETE_ANSWER: 'delete_answer',
    INFO: 'info',
    COPY_QUESTION: 'copy_question',
    DELETE_MATRIX_HEAD: 'delete_matrix_head',
    MATRIX_HEAD: 'matrix_head',
    LIKERT_INITIAL_VALUE: 'likert_initial_value',
    LIKERT_CHANGE_TYPE: 'likert_change_type',
  },
  SCORING_TYPE: {
    CORRECTINCORRECT: { name: 'Правильно / Неправильно', value: 'CORRECTINCORRECT' },
    NOSCORE: { name: 'Не оценивается', value: 'NOSCORE' },
    /*EACHOWNSCORE: { name: 'Каждый ответ имеет свой балл', value: 'EACHOWNSCORE' },*/
  },
  ESSAY_ANSWER_TYPE: {
    ONLYTEXT: { name: 'Только текст', value: 'ONLYTEXT' },
    // ONLYFILE: { name: 'Только файл', value: 'ONLYFILE' },
    // TEXTANDFILE: { name: 'Текст и файл', value: 'TEXTANDFILE' },
  },
  LIKERT_ANSWER_TYPE: {
    DESCRIPTIONANDNUM: { name: 'Выводить все', value: 'DESCRIPTIONANDNUM' },
    NUM: { name: 'Только цифры', value: 'NUM' },
    NUMANDTITLE: { name: 'Названия и цифры', value: 'NUMANDTITLE' },
    TITLE: { name: 'Только названия', value: 'TITLE' },
    DESCRIPTION: { name: 'Описания и названия', value: 'DESCRIPTION' },
  },
  MATRIX_ANSWER_TYPE: {
    SINGLE: {
      name: 'Единственный',
      value: 'SINGLE',
    },
    /*MULTIPLE: {
			name: 'Множественный',
			value: 'MULTIPLE',
		},*/
  },
  SAVE_TYPE: {
    NEW: 'new',
    UPDATE: 'update',
    COPY: 'copy',
  },
  SAVE_QUESTIONS_INIT: {
    NEW_QUESTION: 'newQuestion',
    APPLY_SAVE: 'applySave',
    APPLY_SAVE_COPY: 'applySaveCopy',
    SAVE_AND_CLOSE: 'saveAndClose',
  },
};

export const ASSIGNMENTS = {
  ROUTE: 'assignment',
  ROUTE_360: 'assessment360-group',
  ROUTE_COLLECTION: 'assignments',
  ROUTE_COLLECTION_360: 'assessment360-groups',
  BUTTONS: {
    info: {
      name: 'основное',
      url: 'info',
    },
    participants: {
      name: 'участники',
      url: 'participants',
      count: 0,
    },
    reports: {
      name: 'отчетность',
      url: 'reports',
    },
  },
  BUTTONS_360: [
    {
      name: 'основное',
      url: 'info',
    },
    {
      name: 'формы оценки',
      url: 'forms',
    },
    {
      name: 'отчетность',
      url: 'reports',
    },
  ],
  RETRY_ATTEMPTS: {
    LIMIT: {
      id: 'limit',
      name: 'ограничить число попыток',
    },
    NO_LIMIT: {
      id: 'no-limit',
      name: 'не ограничить',
    },
  },
};

export const TESTNAVMODE = {
  RANDOM: 'случайным образом',
  SCALAR: 'последовательными блоками',
};

export const MAIN_BUTTONS = [
  {
    name: 'дашборд',
    url: undefined,
    childrens: ['events'],
  },
  {
    name: 'каталог',
    url: 'tests-catalog',
  },
  {
    name: 'проекты',
    url: 'projects',
  },
  // {
  //   name: 'шкалы оценивания',
  //   url: 'scales',
  // },
];

export const PROJECT = {
  ROLES: {
    OWNER: { name: 'Владелец', value: 'OWNER' },
    PARTICIPANT: { name: 'Редактор', value: 'PARTICIPANT' },
  },
  BUTTONS: [
    {
      name: 'основное',
      url: 'info',
    },
    {
      name: 'каталог',
      url: 'catalog',
    },
    {
      name: 'команда',
      url: 'team',
    },
    {
      name: 'шкалы оценивания',
      url: 'scales',
    },
    /*{
			name: 'отчетность',
			url: 'reports',
			disabled: true,
		},*/
  ],
  TYPE: {
    SBERTEST: { value: 'SBERTEST', name: 'шкалы оценивания' },
  },
};

export const INF_TEXT = {
  INFINITY: '∞',
  UNLIMITED: 'не ограничено',
};

export const PAGINATION = {
  SIZE_SELECTOR_COUNTS: [25, 50, 100],
  FIRST_PAGE: 0,
};

export const REPORT = {
  STATUS: {
    COMPLETED: { name: 'COMPLETED', value: 'Сформирован' },
  },
  TYPE: {
    REPORT_RETRIES: { name: 'Отчет по попыткам', value: 'REPORT_RETRIES' },
    REPORT_TEST_PROTOCOL: { name: 'Отчет с детализацией ответов', value: 'REPORT_TEST_PROTOCOL' },
    REPORT_ASSIGNMENTS: { name: 'Отчет по назначениям', value: 'REPORT_ASSIGNMENTS' },
    REPORT_SBERTEST: { name: 'Сбертест - тестирование способностей', value: 'REPORT_SBERTEST' },
    REPORT_HORIZONTAL_MATRIX: {
      name: 'Отчет горизонтальная матрица',
      value: 'REPORT_HORIZONTAL_MATRIX',
    },
    REPORT_VERTICAL_MATRIX: { name: 'Отчет вертикальная матрица', value: 'REPORT_VERTICAL_MATRIX' },
  },
  ERROR_STATUS: {
    NOT_ACCEPTABLE: { name: 'Not Acceptable', code: 406 },
  },
};

export const SUBJECTS = {
  MOD: {
    SEPARATE: 'SEPARATE',
    DEPENDED: 'DEPENDED',
  },
  DRAG_TYPE: {
    SUBJECT: 'subject',
    QUESTION: 'question',
    SUBJECTS_BLOCK: 'subjects-block',
    QUESTIONS_BLOCK: 'questions-block',
  },
  OPEN: {
    YES: 'yes',
    NO: 'no',
  },
  SUBJECTS_CONTROL_WRAPPER: 'subjectsControlWrapper',
  SUBJECTS_CONTROL_LIST: 'subjectsControlList',
};

export const ASSESSMENT_360_ROLES = {
  BOSS: {
    name: 'BOSS',
    value: 'руководитель',
  },
  FUNC_BOSS: {
    name: 'FUNC_BOSS',
    value: 'функц. руководитель',
  },
  COLLEAGUE: {
    name: 'COLLEAGUE',
    value: 'коллега',
  },
  SUBORDINATE: {
    name: 'SUBORDINATE',
    value: 'подчиненный',
  },
  SELF: {
    name: 'SELF',
    value: 'самооценка',
  },
};

export const ASSESSMENET_360_USER_TYPES = {
  REGULAR: 'REGULAR',
  FIXED: 'FIXED',
};

export const ESTIMATOR_STATUSES = {
  SUCCESS: 'Успешно',
  FAILED: 'Не успешно',
  ESTIMATED_360: 'Оценен',
  NOT_STARTED: 'Не начато',
};
