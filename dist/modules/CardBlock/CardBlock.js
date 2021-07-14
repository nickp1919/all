import React from 'react';
import { Card } from '@pulse/ui/components/Card';
const CardBlock = React.forwardRef((props, ref) => {
    const { shadow = true } = props;
    return (React.createElement(Card, { "$shadow": shadow, ...props, ref: ref }, props.children));
});
export default CardBlock;
