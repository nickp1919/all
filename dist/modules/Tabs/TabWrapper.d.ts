import React from 'react';
declare const TabWrapper: React.ForwardRefExoticComponent<{
    onClick?: (() => void) | undefined;
    disabled?: boolean | undefined;
    tabIndex?: number | undefined;
    isActive?: boolean | undefined;
    badge?: boolean | undefined;
    children: React.ReactNode;
    count?: number | null | undefined;
} & React.RefAttributes<HTMLDivElement>>;
export default TabWrapper;
