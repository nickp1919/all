import React from 'react';
import { ActionBar } from '@pulse/ui/components/Modal';
export const ModalBarBlock = (props) => {
    return React.createElement(ActionBar, { ...props }, props.children);
};
