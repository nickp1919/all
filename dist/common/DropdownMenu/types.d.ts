import { ReactNode } from 'react';
export declare type TDropdownMenuProps = {
    list: TListItem[];
    className?: string;
    dropdownClassName?: string;
};
export declare type TListItem = {
    title?: string;
    component?: ReactNode;
    onClick: () => void;
};
