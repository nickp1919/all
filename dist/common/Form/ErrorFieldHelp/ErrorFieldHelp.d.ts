import React from 'react';
import { BasicFormComponent } from "../__types__";
declare type Props = BasicFormComponent & {
    type?: string;
    noValidate?: boolean;
    text: string;
    styles?: React.CSSProperties;
};
export default class ErrorFieldHelp extends React.Component<Props> {
    static defaultProps: {
        type: string;
    };
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate({ value: prevValue }: Readonly<Props>): void;
    onChange: (currentValue: string) => void;
    static contextType: React.Context<{}>;
    render(): JSX.Element;
}
export {};
