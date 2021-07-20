import React from 'react';
import { Button, ModalWrapper } from "../../modules";
import { BUTTON_PULSE_TYPE, BUTTON_SIZE } from "../../constants";
import { FONT_VARIANTS } from "../../globalStyled";
import { DeleteBlockTitle, DeleteBlockText, DeleteQuestionDiv } from './styled';
import { ModalButtonsWrapperDiv } from "../../modules/ModalWrapper/styles";
export const DeleteModal = ({ onClose, onConfirm, text, title = 'Вы уверены?', windowLevel, visible, }) => {
    const { secondary } = BUTTON_PULSE_TYPE;
    const { body2Regular, body2Semibold } = FONT_VARIANTS;
    return (React.createElement(ModalWrapper, { windowLevel: windowLevel, visible: visible, onClose: onClose },
        React.createElement(DeleteQuestionDiv, null,
            React.createElement(DeleteBlockTitle, { forwardedAs: "h4", variant: body2Semibold }, title),
            text && (React.createElement(DeleteBlockText, { variant: body2Regular, forwardedAs: "div" }, text)),
            React.createElement(ModalButtonsWrapperDiv, null,
                React.createElement(Button, { type: secondary, onClick: onClose, size: BUTTON_SIZE.s }, "\u043E\u0442\u043C\u0435\u043D\u0430"),
                React.createElement(Button, { size: BUTTON_SIZE.s, onClick: () => {
                        onConfirm();
                        onClose();
                    } }, "\u0434\u0430, \u0443\u0434\u0430\u043B\u0438\u0442\u044C")))));
};
