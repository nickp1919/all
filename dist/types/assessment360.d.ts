import { TMessages } from "./";
import { IPersonInfoGlobalSearch } from "../modals/AddUsersIn/types";
export declare type Assessment360State = {
    estimators: TEstimators;
    evaluatePersons: TEvaluatePersons;
    actualEvaluation: TActualEvaluation;
    calibrating: TFindForTweakType;
    competencyList: TCompetency[];
    values360List: TValue[];
    report: TReports;
};
export declare type TEvaluatePersons = {
    loaded: boolean;
    messages: TMessages;
    roles: TRoleItem[];
    participants: TEstimator[];
};
export declare type TEstimators = {
    messages: TMessages;
    loaded: boolean;
    values: TEstimator[];
    roles: TRoleItem[];
};
export declare type TNumberedQuestion = {
    number: number;
    question: TEvaluationQuestion;
};
export declare type TActualEvaluation = {
    loaded: boolean;
    questions: TEvaluationQuestion[];
    subjects: string[];
};
export declare type TEvaluationQuestion = {
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
export declare type TEstimatedPerson = {
    personId: string;
    firstName: string;
    lastName: string;
    positionFullName: string;
    positionFuncBlock: string;
    unitFullName?: string;
    photo: string;
    isChecked: boolean;
};
export declare type TEstimator = {
    assessment360Id: string;
    type: 'FIXED' | 'REGULAR';
    role: TRole;
    person: TEstimatedPerson;
    completeStatus: TEstimatedStatus;
    commented: boolean;
    retryId: string;
};
export declare type TPersonSendType = {
    person: {
        personId: string;
    };
    role: string;
};
export declare type TEstimatorsSendType = {
    id: string;
    estimators: TPersonSendType[];
};
export declare type TRole = 'SELF' | 'BOSS' | 'COLLEAGUE' | 'SUBORDINATE';
export declare type TEstimatedStatus = 'NOT_STARTED' | 'SUCCESS';
export declare type TFilteredEstimators = {
    count: number;
    title: string;
    values: TEstimator[];
    isAddNewUserAvailable: boolean;
};
export declare type TGlobalSearchEstimators = IPersonInfoGlobalSearch & Partial<TEstimatedPerson> & Partial<TParticipant>;
export declare type TParticipant = {
    participant: TEstimatedPerson;
};
export declare type TRoleItem = {
    title: string;
    code: TRole & 'ALL';
    count: number;
    color: string;
    isAddNewUserAvailable: boolean;
};
export declare type TQuestion360Info = {
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
export declare type TCompetency = {
    id: string;
    name: string;
    description: string;
    order: number;
};
export declare type TValue = {
    id: string;
    value: number;
    description: string;
    colorIos: string;
    colorWeb: string;
    subjectTarget: 'ALL' | 'BOSS';
};
export declare type TFindForTweakSendType = {
    id: string;
    idCompetency: string;
};
export declare type TFindForTweakScoresValues = {
    users: TEstimator[];
    value: number;
};
export declare type TFindForTweakScores = {
    title: string;
    values: TFindForTweakScoresValues[];
};
export declare type TFindForTweakType = {
    messages: TMessages;
    roles: TRoleItem[];
    scores: TFindForTweakScores[];
    loaded: boolean;
};
export declare type TReport = {
    createTime: null;
    id: null;
    link: string;
    name: string;
};
export declare type TReports = {
    containsCompetencies: boolean;
    competenciesReport: TReport;
    loaded: boolean;
};
export declare type TAggregatorTIDSend = {
    aggregatorId: string;
};
export declare type TIndicator = {
    id: string;
    name: string;
};
export declare type TSelectedIndicator = {
    id: string;
    name: string;
    answerValue: number;
};
