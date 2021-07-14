import { ReactNode } from 'react';
export declare type SizeModal = 's' | 'm' | 'l';
export declare type ModalWrapperProps = {
    actionBar?: ReactNode;
    onClose: () => void;
    children: ReactNode;
    windowLevel?: number;
    size?: SizeModal;
    header?: ReactNode;
};
