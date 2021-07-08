import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { ModalWrapperDiv, OverlayStyled, ModalCloseSvg, ModalCloseDiv } from './styled';
const ESC = 27;
export const ModalOur = React.forwardRef(({ children, className, onClose, onClick, visible, isCloseIcon = false }, ref) => {
    const modalRoot = document.getElementById('modal-root');
    if (!modalRoot)
        return null;
    const handleKeyUp = (event) => {
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
    const Portal = (React.createElement(OverlayStyled, { onClick: onClose, ref: ref },
        React.createElement(ModalWrapperDiv, { className: className },
            isCloseIcon && (React.createElement(ModalCloseDiv, { onClick: onClose },
                React.createElement(ModalCloseSvg, null))),
            children)));
    return ReactDOM.createPortal(Portal, modalRoot);
});
