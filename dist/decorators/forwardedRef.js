import React from 'react';
export const forwardedRef = (Component) => {
    class ForwardedRef extends React.Component {
        render() {
            const { forwardedRef, ...rest } = this.props;
            return React.createElement(Component, { ref: forwardedRef, ...rest });
        }
    }
    return React.forwardRef((props, ref) => {
        return React.createElement(ForwardedRef, { ...props, forwardedRef: ref });
    });
};
