import React from 'react';
import { ModalWrapper } from "../../modules";
import { PhotoDiv } from './styled';
export const ShowBigPhotoModal = ({ onClose, img, visible }) => {
    return (React.createElement(ModalWrapper, { onClose: onClose, visible: visible, isCloseIcon: true },
        React.createElement(PhotoDiv, { img: img })));
};
