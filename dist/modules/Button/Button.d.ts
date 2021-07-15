import React from 'react';
import { ExtraType } from './types';
import { Size, Type } from '@pulse/ui/components/Button/types';
export declare const Button: React.ForwardRefExoticComponent<{
    size?: Size | undefined;
    onClick?: (() => void) | undefined;
    disabled?: boolean | undefined;
    type?: Type | undefined;
    className?: string | undefined;
    extraType?: ExtraType | undefined;
    children: React.ReactNode;
} & React.RefAttributes<HTMLButtonElement>>;
