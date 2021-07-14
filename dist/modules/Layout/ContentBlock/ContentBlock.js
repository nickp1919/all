import React from 'react';
import { Content } from '@pulse/ui/components/Layout/Content';
const ContentBlock = React.forwardRef((props, ref) => {
    return (React.createElement(Content, { ...props, ref: ref }, props.children));
});
export default ContentBlock;
