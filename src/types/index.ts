import { IBoxProps } from './IBoxProps';
import { ExtraTypeButton } from './button';

import {
  TEstimatedPerson,
  TEstimator,
  TPersonSendType,
  TFilteredEstimators,
  TGlobalSearchEstimators,
  TEstimatorsSendType,
} from './assessment360';

export {
  IBoxProps,
  ExtraTypeButton,
  TEstimatedPerson,
  TGlobalSearchEstimators,
  TPersonSendType,
  TEstimator,
  TFilteredEstimators,
  TEstimatorsSendType,
};

export type FontPropType = {
  default: {
    fontFamily: string;
    variant: string;
    color: string;
    as: React.ElementType;
    fontWeight: string;
  };
  bold: {
    fontWeight: string;
  };
};

export type TMessages = string[];

export type Dictionary<T> = {
  [key: string]: T;
};

export type TFile = {
  id: string;
  createTime: string;
  link: string;
  name: string;
};
