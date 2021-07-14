import React, { ReactNode } from 'react';
declare type TriggerProps = {
    className?: string;
    children?: ReactNode;
    trigger?: Record<string, any>;
    width?: string;
    getTriggerRef?: Function;
};
export declare const Trigger: ({ trigger, children, className, width, getTriggerRef }: TriggerProps) => JSX.Element;
declare type PopupContentProps = {
    className?: string;
    children?: ReactNode;
    width?: string;
    popupContent?: {
        className: string;
    };
    getPopupContentRef?: Function;
};
export declare const PopupContent: ({ popupContent, className, width, children, getPopupContentRef, }: PopupContentProps) => JSX.Element;
declare type PopupProps = {
    className?: string;
    preventClicked?: boolean;
    position: {
        direction: string;
        centered: boolean;
    };
    behavior: 'hover' | 'click';
    children?: ReactNode;
    onChange?: Function;
    disabled?: boolean;
};
declare type PopupState = {
    trigger: boolean;
    widthOfScreen: number;
    heightOfScreen: number;
    centerAlignment: number;
    isMount: boolean;
    position: {
        direction: string;
        centered: boolean;
    };
};
export default class Popup extends React.Component<PopupProps, PopupState> {
    state: PopupState;
    $trigger: any;
    $popupContent: any;
    idOnResize: any;
    idOnScroll: any;
    eventHandler: any;
    constructor(props: PopupProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    setWindowParams: () => void;
    setPosition: () => void;
    getTriggerRef: (ref: HTMLDivElement) => void;
    getPopupContentRef: (ref: HTMLDivElement) => void;
    getPopupPosition(): string;
    getPosition(position: {
        direction: string;
        centered: boolean;
    }): string;
    eventHandlerCreator: (eventName: string) => (e: Event) => void;
    addListenerToWindow: (init: boolean) => void;
    showPopup: (value: boolean) => void;
    render(): JSX.Element;
}
export {};
