export const DATE_FORMAT = 'dd.MM.yyyy';

export const QUESTION = {
  LIKERT_ANSWER_TYPE: {
    DESCRIPTIONANDNUM: { name: 'Выводить все', value: 'DESCRIPTIONANDNUM' },
    NUM: { name: 'Только цифры', value: 'NUM' },
    NUMANDTITLE: { name: 'Названия и цифры', value: 'NUMANDTITLE' },
    TITLE: { name: 'Только названия', value: 'TITLE' },
    DESCRIPTION: { name: 'Подробные описания и названия', value: 'DESCRIPTION' },
  },
  ANSWER_VARIANT: {
    VALUE: 'answerVariant',
  },
};

export const NUMBERS = {
  ZERO: 0,
  ONE: 1,
};

export const ASSESSMENT_360 = {
  BUTTONS: [
    {
      name: 'оценка сотрудников',
      url: 'evaluate-persons360',
    },
    {
      name: 'калибровка',
      url: 'calibrating360',
    },
  ],
  TYPE: {
    FIXED: {
      name: 'FIXED',
    },
    REGULAR: {
      name: 'REGULAR',
    },
  },
  ROLES: {
    ALL: {
      name: 'ALL',
      value: 'все',
    },
    BOSS: {
      name: 'BOSS',
      value: 'руководитель',
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
  },
  URL: 'assignment/asmt360/v1/',
  STATUSES: {
    NOT_STARTED: {
      name: 'NOT_STARTED',
      value: 'еще без оценок',
    },
    ESTIMATED_360: {
      name: 'ESTIMATED_360',
      value: 'оценены',
    },
    SUCCESS: {
      name: 'SUCCESS',
      value: 'завершены',
    },
  },
};

export const ALL_TAG = {
  name: 'ALL',
  value: 'все',
  color: 'tag01',
};

export type ColorType = '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11';

export const TAG_COLORS: { [key: string]: ColorType } = {
  TAG_01: '01',
  TAG_02: '02',
  TAG_03: '03',
  TAG_04: '04',
  TAG_05: '05',
  TAG_06: '06',
  TAG_07: '07',
  TAG_08: '08',
  TAG_09: '09',
  TAG_10: '10',
  TAG_11: '11',
};

export const MESSAGES = {
  variant: {
    black: 'black',
    default: 'default',
  },
};

// текст кнопок на главной странице теста/опроса
export const TEST_MAIN_BUTTONS_TEXT = {
  CANCEL_ASSIGMENT_BUTTON: 'отказаться',
  ADDITIONAL_MATERIAL_BUTTON: 'дополнительная информация',
  FINISH_BUTTON: 'завершить',
  START_BUTTON: 'начать',
  START_RETRY_BUTTON: 'новая попытка',
  CONTINUE_BUTTON: 'продолжить',
};
