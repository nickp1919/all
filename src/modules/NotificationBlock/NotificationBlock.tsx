import React from 'react';
import { Notification } from '@pulse/ui/components/Notification';
import { TNotification } from './types';

export const NotificationBlock = (props: TNotification) => {
  const { children, onClose, icon, background, action } = props;

  return (
    <Notification $background={background} $onClose={onClose} $action={action} $icon={icon}>
      {children}
    </Notification>
  );
};
