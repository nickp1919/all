import React from 'react';
declare class Notificator {
    static notify: (message: string, type: string, options?: Partial<{
        key: string;
        content: React.ReactElement<any, string | ((props: any) => React.ReactElement<any, any> | null) | (new (props: any) => React.Component<any, any, any>)>;
        closable: boolean;
        onClose: Function;
        duration: number | null;
        style: React.CSSProperties;
        closeIcon: React.ReactElement<any, string | ((props: any) => React.ReactElement<any, any> | null) | (new (props: any) => React.Component<any, any, any>)>;
    }>) => void;
    static error: (message: string, options?: Partial<{
        key: string;
        content: React.ReactElement<any, string | ((props: any) => React.ReactElement<any, any> | null) | (new (props: any) => React.Component<any, any, any>)>;
        closable: boolean;
        onClose: Function;
        duration: number | null;
        style: React.CSSProperties;
        closeIcon: React.ReactElement<any, string | ((props: any) => React.ReactElement<any, any> | null) | (new (props: any) => React.Component<any, any, any>)>;
    }> | undefined) => void;
    static info: (message: string, options?: Partial<{
        key: string;
        content: React.ReactElement<any, string | ((props: any) => React.ReactElement<any, any> | null) | (new (props: any) => React.Component<any, any, any>)>;
        closable: boolean;
        onClose: Function;
        duration: number | null;
        style: React.CSSProperties;
        closeIcon: React.ReactElement<any, string | ((props: any) => React.ReactElement<any, any> | null) | (new (props: any) => React.Component<any, any, any>)>;
    }> | undefined) => void;
    static success: (message: string, options?: Partial<{
        key: string;
        content: React.ReactElement<any, string | ((props: any) => React.ReactElement<any, any> | null) | (new (props: any) => React.Component<any, any, any>)>;
        closable: boolean;
        onClose: Function;
        duration: number | null;
        style: React.CSSProperties;
        closeIcon: React.ReactElement<any, string | ((props: any) => React.ReactElement<any, any> | null) | (new (props: any) => React.Component<any, any, any>)>;
    }> | undefined) => void;
    static destroy: () => void;
    static removeNotice: (key: string) => void;
}
export default Notificator;
