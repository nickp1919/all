import React from 'react';
import { ActionButton } from '@pulse/ui/components/Modal';
export const ModalButtonBlock = React.forwardRef((props, ref) => {
    return (React.createElement(ActionButton, { ...props, ref: ref }, props.children));
});
