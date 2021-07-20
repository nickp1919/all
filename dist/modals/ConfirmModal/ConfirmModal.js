import React from 'react';
import { Button, ModalWrapper, TitleBlock } from "../../modules";
import { BUTTON_PULSE_TYPE, BUTTON_SIZE } from "../../constants";
import { FONT_VARIANTS, TITLE_SIZE } from "../../globalStyled";
import { ConfirmModalDiv, ConfirmText } from './styled';
import { ModalButtonsWrapperDiv } from "../../modules/ModalWrapper/styles";
export const ConfirmModal = ({ title = 'Вы уверены?', text, onClose, onConfirm, buttonText, buttonClose = 'отмена', windowLevel, visible, }) => {
    const { secondary } = BUTTON_PULSE_TYPE;
    const { body2Regular } = FONT_VARIANTS;
    const { subheadline } = TITLE_SIZE;
    return (React.createElement(ModalWrapper, { visible: visible, windowLevel: windowLevel, onClose: onClose },
        React.createElement(ConfirmModalDiv, null,
            React.createElement(TitleBlock, { size: subheadline }, title),
            text && React.createElement(ConfirmText, { variant: body2Regular }, text),
            React.createElement(ModalButtonsWrapperDiv, null,
                React.createElement(Button, { type: secondary, onClick: onClose, size: BUTTON_SIZE.s }, buttonClose),
                React.createElement(Button, { size: BUTTON_SIZE.s, onClick: () => {
                        onConfirm();
                        onClose();
                    } }, buttonText)))));
};
