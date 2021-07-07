import { ReactNode } from 'react';
import { AnyStyledComponent } from 'styled-components';
export declare type WidthBlocks = Array<string>;
export interface UIAdaptiveOptions {
    colInit: number;
    widthBlocks: WidthBlocks;
    hidden?: {
        mobile?: boolean;
        desktop?: boolean;
    };
    stretch?: {
        out?: boolean;
        in?: boolean;
    };
}
export declare type UIAdaptiveProps = {
    options: UIAdaptiveOptions;
    children: ReactNode;
    breakpoints?: TBreakpoints;
    type?: string;
    indents?: boolean;
};
export declare type TVariants = {
    [key: string]: AnyStyledComponent;
};
export declare type TBreakpoints = {
    [key: number]: {
        col: number;
        widthBlocks?: Array<string>;
        hidden?: boolean;
        stretch?: {
            out?: boolean;
            in?: boolean;
        };
    };
};
