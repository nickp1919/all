import React, { FC, useEffect } from 'react';
import classNames from 'classnames';

import { NO_OVERFLOW_CLASS } from '@constants-lib';

import { ModalOur } from '@common-lib';

import { ModalWrapperProps } from './types';

export const ModalWrapper: FC<ModalWrapperProps> = ({
  className,
  visible,
  onClose,
  onClick,
  children,
  windowLevel = 1,
  isCloseIcon,
}) => {
  useEffect(() => {
    const body: HTMLElement = document.body;

    if (body && windowLevel === 1) {
      body.classList.add(NO_OVERFLOW_CLASS);
    }

    return () => {
      if (body && windowLevel === 1) {
        body.classList.remove(NO_OVERFLOW_CLASS);
      }
    };
  }, [windowLevel]);

  return (
    <ModalOur
      className={classNames('assessment-client-modal', className)}
      onClose={onClose}
      onClick={onClick}
      isCloseIcon={isCloseIcon}
    >
      {children}
    </ModalOur>
  );
};
