import { ElementType, ReactNode } from 'react';
export declare type TSubtitleProps = {
    children: ReactNode;
    itemsLength?: number;
    withPlusButton?: boolean;
    onPlusButtonClick?: () => void;
    iconSize?: {
        width: number;
        height: number;
    };
    as?: ElementType;
    variant?: string;
};
