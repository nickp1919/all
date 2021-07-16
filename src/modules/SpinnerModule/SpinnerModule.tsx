import React from 'react';

import { Spinner, SpinnerProps } from '@pulse/ui/components/Spinner';

import { SpinnerWrapper } from './styled';

export const SpinnerModule = (props: SpinnerProps) => {
  return (
    <SpinnerWrapper>
      <Spinner {...props} />
    </SpinnerWrapper>
  );
};
