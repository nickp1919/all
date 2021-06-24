import React, { ReactElement } from 'react';
import Notification from 'rc-notification';

import { ReactComponent as CheckCircleSvg } from './icons/check-circle.svg';
import { ReactComponent as InfoCircleSvg } from './icons/info-circle.svg';
import { ReactComponent as CloseCircleSvg } from './icons/close-circle.svg';

import {
  NotificatorWrapperDiv,
  ErrorIconDiv,
  InfoIconDiv,
  SuccessIconDiv,
  NotificatorText,
} from './styled';
import { TOptions } from './types';

let notification: any = null;
Notification.newInstance(
  { prefixCls: 'assessment-admin_rc-notification', style: { top: 30, right: 30 } },
  (n) => (notification = n)
);

class Notificator {
  static notify = (message: string, type: string, options: TOptions = {}) => {
    const icon = getIcon(type);
    const content: React.ReactNode = (
      <NotificatorWrapperDiv>
        {icon}

        <NotificatorText variant={'body1Regular'}>{message}</NotificatorText>
      </NotificatorWrapperDiv>
    );

    notification.notice({
      content,
      closable: true,
      duration: 3,
      key: type,
      ...options,
    });
  };

  static error = (message: string, options?: TOptions) => {
    Notificator.notify(message, 'error', { duration: null, ...options });
  };

  static info = (message: string, options?: TOptions) => {
    Notificator.notify(message, 'info', options);
  };

  static success = (message: string, options?: TOptions) => {
    Notificator.notify(message, 'success', options);
  };

  static destroy = () => {
    notification.component.setState({ notices: [] });
  };

  static removeNotice = (key: string) => {
    notification.removeNotice(key);
  };
}

function getIcon(type: string): ReactElement {
  const icons = {
    error: [ErrorIconDiv, CloseCircleSvg],
    info: [InfoIconDiv, InfoCircleSvg],
    success: [SuccessIconDiv, CheckCircleSvg],
  };
  const [Outer, Inner] = icons[type as keyof typeof icons];

  return (
    <Outer>
      <Inner />
    </Outer>
  );
}

export default Notificator;
