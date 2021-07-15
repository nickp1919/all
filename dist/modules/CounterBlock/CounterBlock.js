import React from 'react';
import { Counter } from '@pulse/ui/components/Title';
const CounterBlock = React.forwardRef((props, ref) => {
    return (React.createElement(Counter, { ...props, ref: ref }, props.children));
});
export default CounterBlock;
