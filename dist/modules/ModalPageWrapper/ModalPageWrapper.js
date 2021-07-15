import React, { useEffect } from 'react';
import classNames from 'classnames';
import { NO_OVERFLOW_CLASS } from "../../constants";
import { Modal } from '@pulse/ui/components/Modal';
import { ReactComponent as CloseSvg } from './icon/close.svg';
import ModalBarBlock from './ModalBarBlock';
import ModalButtonBlock from './ModalButtonBlock';
import { ModalPageWrapperHeaderDiv, ModalWrapperActionBarDiv } from './styles';
export const ModalPageWrapper = React.forwardRef(({ actionBar, onClose, children, windowLevel = 1, size = 'm' }, ref) => {
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
    const _actionBar = actionBar ? (React.createElement(ModalBarBlock, { className: "assessment-client-modal-page-action" },
        React.createElement(ModalWrapperActionBarDiv, null, actionBar))) : null;
    const _header = size !== 's' && (React.createElement(ModalPageWrapperHeaderDiv, null,
        React.createElement("div", null),
        React.createElement(ModalButtonBlock, { "$containsOnlyIcon": true, onClick: () => onClose() },
            React.createElement(CloseSvg, null))));
    return (React.createElement(Modal, { "$size": size, "$header": _header, "$actionBar": _actionBar, "$onClose": onClose, className: classNames('assessment-client-modal assessment-client-modal-page'), ref: ref }, children));
});
