import React, { ChangeEvent } from 'react';
import { BasicFormComponent } from '../__types__';
declare type Props = BasicFormComponent & {
    name: string;
    value?: string;
    label?: string;
    onChange?: any;
    checked?: boolean;
};
export default class RadioText extends React.Component<Props> {
    $radioInput: React.RefObject<HTMLInputElement>;
    static defaultProps: {
        withContext: boolean;
    };
    constructor(props: Props);
    componentDidMount(): void;
    componentWillUnmount(): void;
    onChange: ({ id, value }: {
        id: string;
        value: string;
    }) => void;
    static contextType: React.Context<{}>;
    initChange(e: ChangeEvent<HTMLInputElement>): void;
    render(): JSX.Element;
}
export {};
