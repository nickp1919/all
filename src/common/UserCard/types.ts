import { TEstimatedPerson } from '@types-lib';

export type TUserCardProps = {
  person: TEstimatedPerson;
  short?: boolean;
  onClick?: (evaluatePerson: TEstimatedPerson) => void;
};
