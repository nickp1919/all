import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

import { ModalWrapperDiv, OverlayStyled, ModalCloseSvg, ModalCloseDiv } from './styled';
import { IModal, KeyEvent } from './types';

const ESC = 27;

export const ModalOur: React.FC<IModal> = React.forwardRef(
  ({ children, className, onClose, onClick, visible, isCloseIcon = false }, ref) => {
    const modalRoot = document.getElementById('modal-root');

    if (!modalRoot) return null;

    const handleKeyUp = (event: KeyEvent) => {
      if (event.keyCode === ESC) {
        onClose(event);
      }
    };

    useEffect(() => {
      document.body.addEventListener('keyup', handleKeyUp);

      return () => {
        document.body.removeEventListener('keyup', handleKeyUp);
      };
    }, []);

    const Portal = (
      <OverlayStyled onClick={onClose} ref={ref}>
        <ModalWrapperDiv className={className}>
          {isCloseIcon && (
            <ModalCloseDiv onClick={onClose}>
              <ModalCloseSvg />
            </ModalCloseDiv>
          )}

          {children}
        </ModalWrapperDiv>
      </OverlayStyled>
    );

    return ReactDOM.createPortal(Portal, modalRoot);
  }
);
