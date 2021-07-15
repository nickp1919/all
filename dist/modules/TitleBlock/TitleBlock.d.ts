import React from 'react';
import { Size } from '@pulse/ui/components/Title/types';
declare const TitleBlock: React.ForwardRefExoticComponent<{
    onClick?: (() => void) | undefined;
    size?: Size | undefined;
    isActive?: boolean | undefined;
    isTab?: boolean | undefined;
    children: React.ReactNode;
    withPlusButton?: boolean | undefined;
    onPlusButtonClick?: (() => void) | undefined;
    iconSize?: {
        width: number;
        height: number;
    } | undefined;
} & React.RefAttributes<HTMLDivElement>>;
export default TitleBlock;
