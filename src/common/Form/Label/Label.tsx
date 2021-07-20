import React, { ReactNode } from 'react';

type LabelProps = {
  children: ReactNode;
  name: string;
};

import { StyledLabel } from './styled';

export default class Label extends React.Component<LabelProps> {
  render() {
    const { children, name } = this.props;

    return (
      <StyledLabel htmlFor={name} forwardedAs="label">
        {children}
      </StyledLabel>
    );
  }
}
