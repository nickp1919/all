import { ReactNode, SyntheticEvent } from 'react';
import { KeyEvent } from "../../common/ModalOur/types";
export declare type ModalWrapperProps = {
    visible?: boolean;
    className?: string;
    onClose: (e: KeyEvent) => void;
    onClick?: (e: SyntheticEvent) => void;
    children: ReactNode;
    windowLevel?: number;
    isCloseIcon?: boolean;
};
