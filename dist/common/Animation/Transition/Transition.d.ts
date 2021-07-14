import { ReactNode } from 'react';
declare type Props = {
    children: ReactNode;
    animation?: 'opacity' | 'scale' | 'moveLeft' | string;
    appear?: boolean;
    reverse?: boolean;
    durationAppear?: number;
    durationLeave?: number;
};
export declare const TransitionBLock: ({ children, reverse }: Props) => JSX.Element;
export {};
