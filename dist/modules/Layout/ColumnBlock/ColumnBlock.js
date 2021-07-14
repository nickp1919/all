import React from 'react';
import { Column } from '@pulse/ui/components/Layout/Column';
const ColumnBlock = React.forwardRef((props, ref) => {
    return (React.createElement(Column, { ...props, ref: ref }, props.children));
});
export default ColumnBlock;
