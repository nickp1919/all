import { ReactElement, CSSProperties } from 'react';
export declare type TOptions = Partial<{
    key: string;
    content: ReactElement;
    closable: boolean;
    onClose: Function;
    duration: number | null;
    style: CSSProperties;
    closeIcon: ReactElement;
}>;
