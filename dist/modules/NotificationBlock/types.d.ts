import React from 'react';
export declare type Background = '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11';
export interface NotificationAction {
    handler: () => void;
    /**
     * @default "посмотреть"
     */
    text?: string;
}
export declare type TNotification = {
    onClose?: () => void;
    children: React.ReactNode;
    icon?: React.ReactNode;
    background?: Background;
    action?: NotificationAction;
};
