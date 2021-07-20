import React from 'react';

import { Button, ModalWrapper, TitleBlock } from '@modules';

import { BUTTON_PULSE_TYPE, BUTTON_SIZE } from '@constants';
import { FONT_VARIANTS, TITLE_SIZE } from '@globalStyled';

import { ConfirmModalDiv, ConfirmText } from './styled';
import { ModalButtonsWrapperDiv } from '@modules/ModalWrapper/styles';
import { TConfrimModalProps } from './types';

export const ConfirmModal: React.FC<TConfrimModalProps> = ({
  title = 'Вы уверены?',
  text,
  onClose,
  onConfirm,
  buttonText,
  buttonClose = 'отмена',
  windowLevel,
  visible,
}) => {
  const { secondary } = BUTTON_PULSE_TYPE;
  const { body2Regular } = FONT_VARIANTS;
  const { subheadline } = TITLE_SIZE;

  return (
    <ModalWrapper visible={visible} windowLevel={windowLevel} onClose={onClose}>
      <ConfirmModalDiv>
        <TitleBlock size={subheadline}>{title}</TitleBlock>

        {text && <ConfirmText variant={body2Regular}>{text}</ConfirmText>}

        <ModalButtonsWrapperDiv>
          <Button type={secondary} onClick={onClose} size={BUTTON_SIZE.s}>
            {buttonClose}
          </Button>

          <Button
            size={BUTTON_SIZE.s}
            onClick={() => {
              onConfirm();
              onClose();
            }}
          >
            {buttonText}
          </Button>
        </ModalButtonsWrapperDiv>
      </ConfirmModalDiv>
    </ModalWrapper>
  );
};
