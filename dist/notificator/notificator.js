import React from 'react';
import Notification from 'rc-notification';
import { ReactComponent as CheckCircleSvg } from './icons/check-circle.svg';
import { ReactComponent as InfoCircleSvg } from './icons/info-circle.svg';
import { ReactComponent as CloseCircleSvg } from './icons/close-circle.svg';
import { NotificatorWrapperDiv, ErrorIconDiv, InfoIconDiv, SuccessIconDiv, NotificatorText, } from './styled';
let notification = null;
Notification.newInstance({ prefixCls: 'assessment-admin_rc-notification', style: { top: 30, right: 30 } }, (n) => (notification = n));
class Notificator {
    static notify = (message, type, options = {}) => {
        const icon = getIcon(type);
        const content = (React.createElement(NotificatorWrapperDiv, null,
            icon,
            React.createElement(NotificatorText, null, message)));
        notification.notice({
            content,
            closable: true,
            duration: 3,
            key: type,
            ...options,
        });
    };
    static error = (message, options) => {
        Notificator.notify(message, 'error', { duration: null, ...options });
    };
    static info = (message, options) => {
        Notificator.notify(message, 'info', options);
    };
    static success = (message, options) => {
        Notificator.notify(message, 'success', options);
    };
    static destroy = () => {
        notification.component.setState({ notices: [] });
    };
    static removeNotice = (key) => {
        notification.removeNotice(key);
    };
}
function getIcon(type) {
    const icons = {
        error: [ErrorIconDiv, CloseCircleSvg],
        info: [InfoIconDiv, InfoCircleSvg],
        success: [SuccessIconDiv, CheckCircleSvg],
    };
    const [Outer, Inner] = icons[type];
    return (React.createElement(Outer, null,
        React.createElement(Inner, null)));
}
export default Notificator;
