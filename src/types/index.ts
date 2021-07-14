import { IBoxProps } from './IBoxProps';

import { SizeButton, TypeButton, ExtraTypeButton } from './button';

type FontPropType = {
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

type SizeModal = 's' | 'm' | 'l';

type TEstimatedPerson = {
  personId: string;
  firstName: string;
  lastName: string;
  positionFullName: string;
  positionFuncBlock: string;
  unitFullName?: string;
  photo: string;
};

export {
  IBoxProps,
  FontPropType,
  SizeModal,
  SizeButton,
  TypeButton,
  ExtraTypeButton,
  TEstimatedPerson,
};
