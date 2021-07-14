import React from 'react';
import { Size } from './types';
declare const TagBlock: React.ForwardRefExoticComponent<{
    onClick?: (() => void) | undefined;
    size?: Size | undefined;
    isActive?: boolean | undefined;
    bgColor?: string | undefined;
    children: React.ReactNode;
    style?: any;
    as?: React.ElementType<any> | undefined;
} & React.RefAttributes<HTMLAnchorElement>>;
export default TagBlock;
