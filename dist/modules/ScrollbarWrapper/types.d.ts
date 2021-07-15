import { CSSProperties, ReactNode } from 'react';
export declare type ScrollbarWrapperProps = {
    children: ReactNode;
    height: string | number;
    horizontalStyle?: CSSProperties;
    verticalStyle?: CSSProperties;
    viewStyle?: CSSProperties;
    options?: any;
    ref?: HTMLDivElement;
    style?: CSSProperties;
    HeightMax?: number;
};
