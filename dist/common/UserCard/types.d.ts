import { TEstimatedPerson } from "../../types";
export declare type TUserCardProps = {
    person: TEstimatedPerson;
    short?: boolean;
    onClick?: (evaluatePerson: TEstimatedPerson) => void;
};
