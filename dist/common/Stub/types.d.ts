import { ReactNode } from 'react';
declare type TIcon = 'glasses' | 'magic';
export declare type TStubProps = {
    title: ReactNode | string;
    description: ReactNode | string;
    icon?: ReactNode | TIcon;
    extraBodyRegular?: boolean;
};
export {};
