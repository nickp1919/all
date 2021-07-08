import React from 'react';
import { TOptions } from './types';
export declare class Notificator {
    static notify: (message: string, type: string, options?: TOptions) => void;
    static error: (message: string, options?: Partial<{
        key: string;
        content: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
        closable: boolean;
        onClose: Function;
        duration: number | null;
        style: React.CSSProperties;
        closeIcon: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    }> | undefined) => void;
    static info: (message: string, options?: Partial<{
        key: string;
        content: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
        closable: boolean;
        onClose: Function;
        duration: number | null;
        style: React.CSSProperties;
        closeIcon: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    }> | undefined) => void;
    static success: (message: string, options?: Partial<{
        key: string;
        content: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
        closable: boolean;
        onClose: Function;
        duration: number | null;
        style: React.CSSProperties;
        closeIcon: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    }> | undefined) => void;
    static destroy: () => void;
    static removeNotice: (key: string) => void;
}
