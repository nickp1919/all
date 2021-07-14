import React from 'react';
import { Button } from '@pulse/ui/components/AvatarStack/Button/styled';
const AvatarButtonBlock = React.forwardRef((props, ref) => {
    const { size = 's', children, onClick } = props;
    return (React.createElement(Button, { "$size": size, ref: ref, onClick: onClick }, children));
});
export default AvatarButtonBlock;
