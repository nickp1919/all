import React, { ReactNode } from 'react';
declare type LabelProps = {
    children: ReactNode;
    name: string;
};
export default class Label extends React.Component<LabelProps> {
    render(): JSX.Element;
}
export {};
