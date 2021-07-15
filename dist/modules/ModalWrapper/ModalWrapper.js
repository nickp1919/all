import React, { useEffect } from 'react';
import classNames from 'classnames';
import { NO_OVERFLOW_CLASS } from "../../constants";
import { ModalOur } from "../../common";
export const ModalWrapper = ({ className, visible, onClose, onClick, children, windowLevel = 1, isCloseIcon, }) => {
    useEffect(() => {
        const body = document.body;
        if (body && windowLevel === 1) {
            body.classList.add(NO_OVERFLOW_CLASS);
        }
        return () => {
            if (body && windowLevel === 1) {
                body.classList.remove(NO_OVERFLOW_CLASS);
            }
        };
    }, [windowLevel]);
    return (React.createElement(ModalOur, { className: classNames('assessment-client-modal', className), onClose: onClose, onClick: onClick, isCloseIcon: isCloseIcon }, children));
};
