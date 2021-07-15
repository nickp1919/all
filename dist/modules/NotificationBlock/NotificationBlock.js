import React from 'react';
import { Notification } from '@pulse/ui/components/Notification';
export const NotificationBlock = (props) => {
    const { children, onClose, icon, background, action } = props;
    return (React.createElement(Notification, { "$background": background, "$onClose": onClose, "$action": action, "$icon": icon }, children));
};
