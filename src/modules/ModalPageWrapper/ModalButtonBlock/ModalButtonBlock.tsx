import React from 'react';

import { ActionButton } from '@pulse/ui/components/Modal';

import { ActionButtonProps } from './types';

export const ModalButtonBlock = React.forwardRef<HTMLButtonElement, ActionButtonProps>(
  (props, ref) => {
    return (
      <ActionButton {...props} ref={ref}>
        {props.children}
      </ActionButton>
    );
  }
);
