import React from 'react';
import { BasicFormComponent } from '../__types__';
declare type TConnectTo = {
    name: string;
    handler: (value: string) => string;
};
declare const _default: React.ForwardRefExoticComponent<BasicFormComponent & {
    type?: string | undefined;
    readonly?: boolean | undefined;
    min?: number | undefined;
    max?: number | undefined;
    autocomplete?: "on" | "off" | undefined;
    connectTo?: TConnectTo[] | undefined;
    noValidate?: boolean | undefined;
    maxLength?: number | undefined;
    hidden?: boolean | undefined;
    mask?: {
        test: Function;
    } | undefined;
    icon?: {
        element: React.ReactNode;
        rightAlign?: boolean | undefined;
    } | undefined;
    autoFocus?: boolean | undefined;
} & React.RefAttributes<unknown>>;
export default _default;
