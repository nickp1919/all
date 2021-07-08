import React from 'react';
import { Type } from './types';
declare const TabsContainer: React.ForwardRefExoticComponent<{
    type?: Type | undefined;
    children: React.ReactNode;
} & React.RefAttributes<HTMLDivElement>>;
export default TabsContainer;
