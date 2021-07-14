import { SyntheticEvent } from 'react';
export declare type KeyEvent = {
    keyCode: number;
};
export declare type IModal = {
    className?: string;
    onClose: (e: KeyEvent) => void;
    onClick?: (e: SyntheticEvent) => void;
    visible?: boolean;
    isCloseIcon?: boolean;
};
