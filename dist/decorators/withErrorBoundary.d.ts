import React, { ComponentType, ErrorInfo } from 'react';
interface IErrComponentProps {
    error: Error | null;
    errorInfo: ErrorInfo | null;
}
export interface IErrorBoundaryState extends IErrComponentProps {
    hasError: boolean;
}
declare const withErrorBoundary: (WrappedComponent: ComponentType<any>, ErrComponent: ComponentType<IErrComponentProps>) => {
    new <T extends {}>(props: T): {
        componentDidCatch(error: Error, errorInfo: ErrorInfo): void;
        render(): JSX.Element;
        context: any;
        setState<K extends keyof IErrorBoundaryState>(state: IErrorBoundaryState | ((prevState: Readonly<IErrorBoundaryState>, props: Readonly<T>) => IErrorBoundaryState | Pick<IErrorBoundaryState, K> | null) | Pick<IErrorBoundaryState, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<T> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<IErrorBoundaryState>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<T>, nextState: Readonly<IErrorBoundaryState>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<T>, prevState: Readonly<IErrorBoundaryState>): any;
        componentDidUpdate?(prevProps: Readonly<T>, prevState: Readonly<IErrorBoundaryState>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<T>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<T>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<T>, nextState: Readonly<IErrorBoundaryState>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<T>, nextState: Readonly<IErrorBoundaryState>, nextContext: any): void;
    };
    getDerivedStateFromError(): {
        hasError: boolean;
    };
    contextType?: React.Context<any> | undefined;
};
export default withErrorBoundary;
