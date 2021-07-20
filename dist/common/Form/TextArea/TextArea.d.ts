import React, { FocusEvent } from 'react';
import { BasicFormComponent } from '../__types__';
declare type TextFieldProps = BasicFormComponent & {
    maxLength?: number;
    fitText?: boolean;
    showProgress?: boolean;
};
declare type State = {
    isFocus: boolean;
};
export default class TextArea extends React.Component<TextFieldProps, State> {
    $textField: React.RefObject<HTMLTextAreaElement>;
    static defaultProps: {
        withContext: boolean;
    };
    state: {
        isFocus: boolean;
    };
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate({ value: prevValue }: TextFieldProps): void;
    onBlur: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
    onChange: (currentValue: string) => void;
    onFocus: (e: FocusEvent<HTMLTextAreaElement>) => void;
    static contextType: React.Context<{}>;
    render(): JSX.Element;
}
export {};
