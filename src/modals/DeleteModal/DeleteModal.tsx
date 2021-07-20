import React from 'react';

import { Button, ModalWrapper } from '@modules';

import { BUTTON_PULSE_TYPE, BUTTON_SIZE } from '@constants';
import { FONT_VARIANTS } from '@globalStyled';

import { DeleteBlockTitle, DeleteBlockText, DeleteQuestionDiv } from './styled';
import { ModalButtonsWrapperDiv } from '@modules/ModalWrapper/styles';
import { DeleteBlockProps } from './types';

export const DeleteModal: React.FC<DeleteBlockProps> = ({
  onClose,
  onConfirm,
  text,
  title = 'Вы уверены?',
  windowLevel,
  visible,
}) => {
  const { secondary } = BUTTON_PULSE_TYPE;
  const { body2Regular, body2Semibold } = FONT_VARIANTS;

  return (
    <ModalWrapper windowLevel={windowLevel} visible={visible} onClose={onClose}>
      <DeleteQuestionDiv>
        <DeleteBlockTitle forwardedAs="h4" variant={body2Semibold}>
          {title}
        </DeleteBlockTitle>

        {text && (
          <DeleteBlockText variant={body2Regular} forwardedAs="div">
            {text}
          </DeleteBlockText>
        )}

        <ModalButtonsWrapperDiv>
          <Button type={secondary} onClick={onClose} size={BUTTON_SIZE.s}>
            отмена
          </Button>

          <Button
            size={BUTTON_SIZE.s}
            onClick={() => {
              onConfirm();
              onClose();
            }}
          >
            да, удалить
          </Button>
        </ModalButtonsWrapperDiv>
      </DeleteQuestionDiv>
    </ModalWrapper>
  );
};
