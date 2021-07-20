import React from 'react';
import { StyledLabel } from './styled';
export default class Label extends React.Component {
    render() {
        const { children, name } = this.props;
        return (React.createElement(StyledLabel, { htmlFor: name, forwardedAs: "label" }, children));
    }
}
