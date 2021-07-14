import React from 'react';
import { State } from './types';
declare const FilterBlock: React.ForwardRefExoticComponent<{
    state?: State | undefined;
    bgColor?: string | undefined;
    onClick?: any;
    counter: number;
    children: React.ReactNode;
} & React.RefAttributes<HTMLAnchorElement>>;
export default FilterBlock;
