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

export { IBoxProps, FontPropType, SizeModal, SizeButton, TypeButton, ExtraTypeButton };
