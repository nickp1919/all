/// <reference types="react" />
import { IBoxProps } from './IBoxProps';
import { ExtraTypeButton } from './button';
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
declare type TEstimatedPerson = {
    personId: string;
    firstName: string;
    lastName: string;
    positionFullName: string;
    positionFuncBlock: string;
    unitFullName?: string;
    photo: string;
};
export { IBoxProps, FontPropType, ExtraTypeButton, TEstimatedPerson };
