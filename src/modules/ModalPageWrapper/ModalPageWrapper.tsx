import React, { useEffect } from 'react';
import classNames from 'classnames';

import { NO_OVERFLOW_CLASS } from '@constants-lib';

import { Modal } from '@pulse/ui/components/Modal';

import { ReactComponent as CloseSvg } from './icon/close.svg';

import ModalBarBlock from './ModalBarBlock';
import ModalButtonBlock from './ModalButtonBlock';

import { ModalPageWrapperHeaderDiv, ModalWrapperActionBarDiv } from './styles';
import { ModalWrapperProps } from './types';

export const ModalPageWrapper = React.forwardRef<HTMLDivElement, ModalWrapperProps>(
  ({ actionBar, onClose, children, windowLevel = 1, size = 'm' }, ref) => {
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

    const _actionBar = actionBar ? (
      <ModalBarBlock className="assessment-client-modal-page-action">
        <ModalWrapperActionBarDiv>{actionBar}</ModalWrapperActionBarDiv>
      </ModalBarBlock>
    ) : null;

    const _header = size !== 's' && (
      <ModalPageWrapperHeaderDiv>
        <div />

        <ModalButtonBlock $containsOnlyIcon onClick={() => onClose()}>
          <CloseSvg />
        </ModalButtonBlock>
      </ModalPageWrapperHeaderDiv>
    );

    return (
      <Modal
        $size={size}
        $header={_header}
        $actionBar={_actionBar}
        $onClose={onClose}
        className={classNames('assessment-client-modal assessment-client-modal-page')}
        ref={ref}
      >
        {children}
      </Modal>
    );
  }
);
