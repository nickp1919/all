import { TEstimatedPerson } from '@types-lib';
export declare type TUserCardProps = {
    person: TEstimatedPerson;
    short?: boolean;
    onClick?: (evaluatePerson: TEstimatedPerson) => void;
};
