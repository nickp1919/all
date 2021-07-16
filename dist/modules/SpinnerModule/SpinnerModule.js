import React from 'react';
import { Spinner } from '@pulse/ui/components/Spinner';
import { SpinnerWrapper } from './styled';
export const SpinnerModule = (props) => {
    return (React.createElement(SpinnerWrapper, null,
        React.createElement(Spinner, { ...props })));
};
