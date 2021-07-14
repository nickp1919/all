import React, { Component } from 'react';

export const forwardedRef = (Component: any) => {
  class ForwardedRef extends React.Component<any> {
    render() {
      const { forwardedRef, ...rest } = this.props;

      return <Component ref={forwardedRef} {...rest} />;
    }
  }

  return React.forwardRef((props, ref) => {
    return <ForwardedRef {...props} forwardedRef={ref} />;
  });
};
