import React from 'react';
import ReactDOM from 'react-dom';
import cn from 'classnames';
import { POPUP_DIRECTION } from "../../constants";
import { EventRegistration } from "../../utils";
import { TransitionBLock } from "../Animation/Transition/Transition";
const traceBubblingByClass = (event, classNames) => {
    // TODO: any
    // composedPath() отсутствует в flow type Event,
    // однако он есть в действующей спецификации API EventDom https://developer.mozilla.org/en-US/docs/Web/API/Event/composedPath.
    // $FlowFixMe
    let path = (event.composedPath && event.composedPath()) || [];
    if (event.nativeEvent) {
        path = (event.nativeEvent.composedPath && event.nativeEvent.composedPath()) || [];
    }
    for (let i = 0; i < path.length; i += 1) {
        if (path[i].classList !== undefined) {
            let hasInclude;
            if (Array.isArray(classNames)) {
                hasInclude = classNames.reduce((acc, className) => acc || path[i].classList.contains(className), false);
            }
            else {
                hasInclude = path[i].classList.contains(classNames);
            }
            if (hasInclude) {
                return hasInclude;
            }
        }
        else
            break;
    }
    return false;
};
const eventRegistrator = new EventRegistration(50);
const ID_POPUP_CONTAINER = 'contentPopupPortal';
// export const PortalPopupContainer = () => <div id={ID_POPUP_CONTAINER} />;
export const Trigger = ({ trigger, children, className, width, getTriggerRef }) => {
    const $trigger = React.useRef(null);
    React.useEffect(() => {
        if (getTriggerRef) {
            getTriggerRef($trigger.current);
        }
    }, []);
    return (React.createElement("div", { ...trigger, ref: $trigger, className: cn(className), role: "presentation", style: { width } }, children));
};
export const PopupContent = ({ popupContent, className, width, children, getPopupContentRef, }) => {
    const $popupContentRef = React.useRef(null);
    React.useEffect(() => {
        if (getPopupContentRef) {
            getPopupContentRef($popupContentRef.current);
        }
    }, []);
    return (React.createElement("div", { className: cn(className, popupContent && popupContent.className), ref: $popupContentRef, style: { width } }, children));
};
export const PortalPopupContent = ({ popupContent, className, width, children, triggerRef, portalContainerClass, portalRef = `#${ID_POPUP_CONTAINER}`, show, position, }) => {
    const node = document.querySelector(portalRef);
    const [container, setContainer] = React.useState(null);
    if (!node)
        return;
    let triggerPosition;
    if (triggerRef && container) {
        triggerPosition = {
            x: triggerRef.getBoundingClientRect().x,
            y: triggerRef.getBoundingClientRect().y,
        };
    }
    if (show) {
        let offsetLeft = 0;
        if (position === 'bottomLeft') {
            offsetLeft = node.clientWidth;
        }
        node.setAttribute('style', `
            left: ${triggerPosition ? `${triggerPosition.x - offsetLeft}px` : 0};
            top: ${triggerPosition ? `${triggerPosition.y}px` : 0};
            position: absolute;
            z-index: 1000;
        `);
    }
    return (show &&
        ReactDOM.createPortal(React.createElement(TransitionBLock, null,
            React.createElement("div", { className: `popupPortal ${portalContainerClass}` },
                React.createElement("div", { className: cn(className, popupContent && popupContent.className), style: { width }, ref: ($ref) => setContainer($ref) },
                    React.createElement("div", { className: "popup-contentWrapper" }, children)))), node));
};
export default class Popup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            trigger: false,
            isMount: false,
            position: {
                direction: POPUP_DIRECTION.BOTTOM,
                centered: false,
            },
            widthOfScreen: 0,
            heightOfScreen: 0,
            centerAlignment: 0,
        };
        this.eventHandler = {
            // TODO: any
            click: null,
            touchstart: null,
        };
        this.setWindowParams = () => {
            this.setState({
                widthOfScreen: window.innerWidth,
                heightOfScreen: window.innerHeight,
                centerAlignment: window.innerWidth * 0.15,
            }, this.setPosition);
        };
        this.setPosition = () => {
            const { left, top } = this.$trigger.getBoundingClientRect(), { widthOfScreen, heightOfScreen, centerAlignment } = this.state, halfWidthOfScreen = widthOfScreen / 2, halfHeightOfScreen = heightOfScreen / 2;
            let direction, centered = false;
            if (top <= halfHeightOfScreen) {
                direction = 'BOTTOM';
            }
            else {
                direction = 'TOP';
            }
            if (left <= halfWidthOfScreen - centerAlignment) {
                direction += '_RIGHT';
                centered = true;
            }
            else if (left >= halfWidthOfScreen + centerAlignment) {
                direction += '_LEFT';
                centered = true;
            }
            this.setState({
                position: {
                    direction: POPUP_DIRECTION[direction],
                    centered,
                },
            });
        };
        this.getTriggerRef = (ref) => {
            this.$trigger = ref;
        };
        this.getPopupContentRef = (ref) => {
            this.$popupContent = ref;
        };
        // Необходимо разобраться с типами SynthethicEvents & DomEvents, чтобы небыло конфликтов.
        // $FlowFixMe
        this.eventHandlerCreator = (eventName) => (e) => {
            const { state: { trigger }, props: { preventClicked }, } = this;
            if (!trigger) {
                document.addEventListener(eventName, this.eventHandler[eventName]);
                this.showPopup(true);
            }
            else {
                let hasToClosePopup = true;
                if (preventClicked) {
                    hasToClosePopup = !traceBubblingByClass(e, 'popup-content');
                }
                if (hasToClosePopup) {
                    document.removeEventListener(eventName, this.eventHandler[eventName]);
                    this.showPopup(false);
                }
            }
            e.stopPropagation();
        };
        this.addListenerToWindow = (init) => {
            // TODO: any
            if (init) {
                this.idOnResize = eventRegistrator.add('resize', this.setWindowParams);
                this.idOnScroll = eventRegistrator.add('scroll', this.setWindowParams);
            }
            else {
                eventRegistrator.remove('resize', this.idOnResize);
                eventRegistrator.remove('scroll', this.idOnScroll);
            }
        };
        this.showPopup = (value) => {
            const { disabled } = this.props;
            if (disabled)
                return;
            this.setState({
                trigger: value,
            }, () => {
                const { onChange } = this.props;
                if (onChange) {
                    onChange(this.state.trigger);
                }
            });
        };
        this.eventHandler.click = this.eventHandlerCreator('click');
        this.eventHandler.touchstart = this.eventHandlerCreator('touchstart');
    }
    componentDidMount() {
        this.setWindowParams();
        this.addListenerToWindow(true);
        this.setState({
            isMount: true,
        });
    }
    componentWillUnmount() {
        document.removeEventListener('click', this.eventHandler.click);
        document.removeEventListener('touchstart', this.eventHandler.touchstart);
        this.addListenerToWindow(false);
    }
    getPopupPosition() {
        const position = this.props.position && this.getPosition(this.props.position);
        const statePosition = this.state.position && this.getPosition(this.state.position);
        return position || statePosition;
    }
    getPosition(position) {
        return position.direction + (position.centered ? 'Centered' : '');
    }
    render() {
        const { props: { className, children, behavior }, state: { trigger, isMount }, getTriggerRef, getPopupContentRef, } = this;
        const position = this.getPopupPosition();
        const classList = cn('popup', 'popup--variables', className, {
            [`popup--${position}`]: true,
            'popup-isOpened': trigger,
        });
        const triggerReactions = {
            click: {
                onClick: this.eventHandler.click,
            },
            hover: {
                // onMouseEnter: () => this.showPopup(true),
                // onMouseLeave: () => this.showPopup(false),
                onTouchStart: this.eventHandler.touchstart,
            },
        };
        const popupContent = {
            className: cn('popup-content', { 'popup-content-isRegulating': !isMount }),
        };
        return (React.createElement("div", { className: classList }, React.Children.toArray(children).map((child) => {
            // TODO: any
            let element = null;
            if (child.type === Trigger) {
                element = React.cloneElement(child, {
                    trigger: triggerReactions[behavior],
                    getTriggerRef,
                });
            }
            if (child.type === PopupContent) {
                element = React.cloneElement(child, { popupContent, getPopupContentRef });
            }
            if (child.type === PortalPopupContent) {
                element = React.cloneElement(child, {
                    show: trigger,
                    triggerRef: this.$trigger,
                    getPopupContentRef,
                    portalContainerClass: classList,
                    popupContent,
                    position,
                });
            }
            return element;
        })));
    }
}
