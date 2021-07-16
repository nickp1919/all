import { TEstimatedPerson } from '@types';

export type TUserCardProps = {
  person: TEstimatedPerson;
  short?: boolean;
  onClick?: (evaluatePerson: TEstimatedPerson) => void;
};
