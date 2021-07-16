import { ReactNode } from 'react';
import { Size } from '@pulse/ui/components/Modal/types';
export declare type ModalWrapperProps = {
    actionBar?: ReactNode;
    onClose: () => void;
    children: ReactNode;
    windowLevel?: number;
    size?: Size;
    header?: ReactNode;
};
