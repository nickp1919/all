/// <reference types="react" />
import { IBoxProps } from './IBoxProps';
import { ExtraTypeButton } from './button';
import { TEstimatedPerson, TEstimator, TPersonSendType, TFilteredEstimators, TGlobalSearchEstimators, TEstimatorsSendType } from './assessment360';
export { IBoxProps, ExtraTypeButton, TEstimatedPerson, TGlobalSearchEstimators, TPersonSendType, TEstimator, TFilteredEstimators, TEstimatorsSendType, };
export declare type FontPropType = {
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
export declare type TMessages = string[];
export declare type Dictionary<T> = {
    [key: string]: T;
};
export declare type TFile = {
    id: string;
    createTime: string;
    link: string;
    name: string;
};
