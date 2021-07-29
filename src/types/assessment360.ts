import { TMessages } from '@types';
import { IPersonInfoGlobalSearch } from '@modals/AddUsersIn/types';

export type Assessment360State = {
  estimators: TEstimators;
  evaluatePersons: TEvaluatePersons;
  actualEvaluation: TActualEvaluation;
  calibrating: TFindForTweakType;
  competencyList: TCompetency[];
  values360List: TValue[];
  report: TReports;
};

export type TEvaluatePersons = {
  loaded: boolean;
  messages: TMessages;
  roles: TRoleItem[];
  participants: TEstimator[];
};

export type TEstimators = {
  messages: TMessages;
  loaded: boolean;
  values: TEstimator[];
  roles: TRoleItem[];
};

export type TNumberedQuestion = {
  number: number;
  question: TEvaluationQuestion;
};

export type TActualEvaluation = {
  loaded: boolean;
  questions: TEvaluationQuestion[];
  subjects: string[];
};

export type TEvaluationQuestion = {
  id: string;
  prompt: string;
  wasAnswered: boolean;
  orderNumber: number;
  type: 'ASMT_360' | 'SINGLE_CHOICE';
  question360Info: TQuestion360Info;
  choiceQuestionInfo?: any;
  subject: {
    child: {
      id: string;
      parentId: string;
      name: string;
    };
    id: string;
    name: string;
    number: number;
  };
};

export type TEstimatedPerson = {
  personId: string;
  firstName: string;
  lastName: string;
  positionFullName: string;
  positionFuncBlock: string;
  unitFullName?: string;
  photo: string;
  isChecked: boolean;
};

export type TEstimator = {
  assessment360Id: string;
  type: 'FIXED' | 'REGULAR';
  role: TRole;
  person: TEstimatedPerson;
  completeStatus: TEstimatedStatus;
  commented: boolean;
  retryId: string;
};

export type TPersonSendType = {
  person: Partial<TEstimatedPerson>;
  role: string;
};

export type TEstimatorsSendType = { id: string; estimators: TPersonSendType[] };

export type TRole = 'SELF' | 'BOSS' | 'COLLEAGUE' | 'SUBORDINATE';

export type TEstimatedStatus = 'NOT_STARTED' | 'SUCCESS';

export type TFilteredEstimators = {
  count: number;
  title: string;
  values: TEstimator[];
  isAddNewUserAvailable: boolean;
};

export type TGlobalSearchEstimators = IPersonInfoGlobalSearch &
  Partial<TEstimatedPerson> &
  Partial<TParticipant> &
  any; // TODO any

export type TParticipant = {
  participant: TEstimatedPerson;
};

export type TRoleItem = {
  title: string;
  code: TRole & 'ALL';
  count: number;
  color: string;
  isAddNewUserAvailable: boolean;
};

export type TQuestion360Info = {
  answer: {
    id: string;
    comment: string;
    selected360: {
      value: number;
      selectedIndicators: TSelectedIndicator[];
    };
  };
  competency: {
    id: string;
    name: string;
    order: number;
    description: string;
    indicators: TIndicator[];
  };
  useColor: boolean;
};

export type TCompetency = {
  id: string;
  name: string;
  description: string;
  order: number;
};

export type TValue = {
  id: string;
  value: number;
  description: string;
  colorIos: string;
  colorWeb: string;
  subjectTarget: 'ALL' | 'BOSS';
};

export type TFindForTweakSendType = { id: string; idCompetency: string };

export type TFindForTweakScoresValues = {
  users: TEstimator[];
  value: number;
};

export type TFindForTweakScores = {
  title: string;
  values: TFindForTweakScoresValues[];
};

export type TFindForTweakType = {
  messages: TMessages;
  roles: TRoleItem[];
  scores: TFindForTweakScores[];
  loaded: boolean;
};

export type TReport = {
  createTime: null;
  id: null;
  link: string;
  name: string;
};

export type TReports = {
  containsCompetencies: boolean;
  competenciesReport: TReport;
  loaded: boolean;
};

export type TAggregatorTIDSend = {
  aggregatorId: string;
};

export type TIndicator = {
  id: string;
  name: string;
};

export type TSelectedIndicator = {
  id: string;
  name: string;
  answerValue: number;
};
