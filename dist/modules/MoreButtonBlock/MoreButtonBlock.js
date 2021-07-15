import React from 'react';
import { MoreButton } from '@pulse/ui/components/Group';
export const MoreButtonBlock = (props) => {
    const { opened, children } = props;
    return (React.createElement(MoreButton, { ...props, "$opened": opened }, children));
};
