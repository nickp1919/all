/// <reference types="react" />
import { IBoxProps } from './IBoxProps';
import { SizeButton, TypeButton, ExtraTypeButton } from './button';
declare type FontPropType = {
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
declare type SizeModal = 's' | 'm' | 'l';
export { IBoxProps, FontPropType, SizeModal, SizeButton, TypeButton, ExtraTypeButton };
