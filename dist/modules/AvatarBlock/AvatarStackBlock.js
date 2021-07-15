import React from 'react';
import { AvatarStack } from '@pulse/ui/components/AvatarStack';
const AvatarStackBlock = React.forwardRef((props, ref) => {
    const { size = 'm', type, children } = props;
    return (React.createElement(AvatarStack, { "$size": size, "$type": type, ref: ref }, children));
});
export default AvatarStackBlock;
