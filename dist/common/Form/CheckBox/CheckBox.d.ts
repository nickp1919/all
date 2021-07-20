import React from 'react';
import { BasicFormComponent } from '../__types__';
export declare function renderMark({ error, checked, onClick, }: {
    error: string;
    checked: boolean | undefined;
    onClick?: Function;
}): JSX.Element;
declare type CheckboxProps = BasicFormComponent & {
    text?: string;
    agreement?: boolean;
    inset?: boolean;
    id?: string | undefined;
    onChange?: any;
    img?: string;
};
export default class CheckBox extends React.Component<CheckboxProps> {
    static defaultProps: {
        value: boolean;
        withContext: boolean;
    };
    $inputRef: React.RefObject<HTMLInputElement>;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate({ value: prevValue }: CheckboxProps): void;
    onChange: (currentValue: boolean) => void;
    onEnterPress: (event: {
        key: string;
    }) => void;
    onClick(): void;
    static contextType: React.Context<{}>;
    render(): JSX.Element;
}
export {};
