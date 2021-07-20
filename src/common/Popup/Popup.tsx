import React, { ReactElement, ReactNode, RefObject } from 'react';
import cn from 'classnames';

import { POPUP_DIRECTION } from '@constants';

import { EventRegistration } from '@utils';

const traceBubblingByClass = (event: any, classNames: string | string[]) => {
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
        hasInclude = classNames.reduce(
          (acc, className) => acc || path[i].classList.contains(className),
          false
        );
      } else {
        hasInclude = path[i].classList.contains(classNames);
      }

      if (hasInclude) {
        return hasInclude;
      }
    } else break;
  }

  return false;
};

type TriggerProps = {
  className?: string;
  children?: ReactNode;
  trigger?: Record<string, any>; // TODO: any
  width?: string;
  getTriggerRef?: Function;
};

const eventRegistrator = new EventRegistration(50);

export const Trigger = ({ trigger, children, className, width, getTriggerRef }: TriggerProps) => {
  const $trigger: RefObject<HTMLDivElement> = React.useRef(null);

  React.useEffect(() => {
    if (getTriggerRef) {
      getTriggerRef($trigger.current);
    }
  }, []);

  return (
    <div
      {...trigger}
      ref={$trigger}
      className={cn(className)}
      role="presentation"
      style={{ width }}
    >
      {children}
    </div>
  );
};

type PopupContentProps = {
  className?: string;
  children?: ReactNode;
  width?: string;
  popupContent?: {
    className: string;
  };
  getPopupContentRef?: Function;
};

export const PopupContent = ({
  popupContent,
  className,
  width,
  children,
  getPopupContentRef,
}: PopupContentProps) => {
  const $popupContentRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (getPopupContentRef) {
      getPopupContentRef($popupContentRef.current);
    }
  }, []);

  return (
    <div
      className={cn(className, popupContent && popupContent.className)}
      ref={$popupContentRef}
      style={{ width }}
    >
      {children}
    </div>
  );
};

type PopupProps = {
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

type PopupState = {
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

export class Popup extends React.Component<PopupProps, PopupState> {
  state: PopupState = {
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

  $trigger: any; // TODO: any
  $popupContent: any; // TODO: any
  idOnResize: any; // TODO: any
  idOnScroll: any; // TODO: any
  eventHandler: any = {
    // TODO: any
    click: null,
    touchstart: null,
  };

  constructor(props: PopupProps) {
    super(props);

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

  setWindowParams = () => {
    this.setState(
      {
        widthOfScreen: window.innerWidth,
        heightOfScreen: window.innerHeight,
        centerAlignment: window.innerWidth * 0.15,
      },
      this.setPosition
    );
  };

  setPosition = () => {
    const { left, top } = this.$trigger.getBoundingClientRect(),
      { widthOfScreen, heightOfScreen, centerAlignment } = this.state,
      halfWidthOfScreen = widthOfScreen / 2,
      halfHeightOfScreen = heightOfScreen / 2;

    let direction,
      centered = false;

    if (top <= halfHeightOfScreen) {
      direction = 'BOTTOM';
    } else {
      direction = 'TOP';
    }

    if (left <= halfWidthOfScreen - centerAlignment) {
      direction += '_RIGHT';
      centered = true;
    } else if (left >= halfWidthOfScreen + centerAlignment) {
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

  getTriggerRef = (ref: HTMLDivElement) => {
    this.$trigger = ref;
  };

  getPopupContentRef = (ref: HTMLDivElement) => {
    this.$popupContent = ref;
  };

  getPopupPosition() {
    const position = this.props.position && this.getPosition(this.props.position);
    const statePosition = this.state.position && this.getPosition(this.state.position);

    return position || statePosition;
  }

  getPosition(position: { direction: string; centered: boolean }) {
    return position.direction + (position.centered ? 'Centered' : '');
  }

  // Необходимо разобраться с типами SynthethicEvents & DomEvents, чтобы небыло конфликтов.
  // $FlowFixMe

  eventHandlerCreator = (eventName: string) => (e: Event) => {
    const {
      state: { trigger },
      props: { preventClicked },
    } = this;

    if (!trigger) {
      document.addEventListener(eventName, this.eventHandler[eventName]);
      this.showPopup(true);
    } else {
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

  addListenerToWindow = (init: boolean) => {
    // TODO: any
    if (init) {
      this.idOnResize = eventRegistrator.add('resize', this.setWindowParams);
      this.idOnScroll = eventRegistrator.add('scroll', this.setWindowParams);
    } else {
      eventRegistrator.remove('resize', this.idOnResize);
      eventRegistrator.remove('scroll', this.idOnScroll);
    }
  };

  showPopup = (value: boolean) => {
    const { disabled } = this.props;

    if (disabled) return;

    this.setState(
      {
        trigger: value,
      },
      () => {
        const { onChange } = this.props;

        if (onChange) {
          onChange(this.state.trigger);
        }
      }
    );
  };

  render() {
    const {
      props: { className, children, behavior },
      state: { trigger, isMount },
      getTriggerRef,
      getPopupContentRef,
    } = this;

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

    return (
      <div className={classList}>
        {React.Children.toArray(children).map((child: any) => {
          let element: ReactElement | null = null;

          if (child.type === Trigger) {
            element = React.cloneElement(child, {
              trigger: triggerReactions[behavior],
              getTriggerRef,
            });
          }

          if (child.type === PopupContent) {
            element = React.cloneElement(child, { popupContent, getPopupContentRef });
          }

          return element;
        })}
      </div>
    );
  }
}
