import React from 'react';
import { BasicFormComponent } from '../__types__';
declare type Props = BasicFormComponent & {
    name: string;
    value?: string;
    label?: string;
    img?: string;
};
export declare function renderMark({ error, checked, onClick, }: {
    error: string;
    checked: boolean | undefined;
    onClick?: Function;
}): JSX.Element;
export default class Radio extends React.Component<Props> {
    $inputRef: React.RefObject<HTMLInputElement>;
    static defaultProps: {
        withContext: boolean;
    };
    componentDidMount(): void;
    componentWillUnmount(): void;
    onChange: ({ value }: {
        id?: string | undefined;
        value: string;
    }) => void;
    static contextType: React.Context<{}>;
    render(): JSX.Element;
}
export {};
