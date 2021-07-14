import React from 'react';
import { Gutter } from '@pulse/ui/components/Layout/Gutter';
const GutterBlock = React.forwardRef((props, ref) => {
    return (React.createElement(Gutter, { ...props, ref: ref }, props.children));
});
export default GutterBlock;
