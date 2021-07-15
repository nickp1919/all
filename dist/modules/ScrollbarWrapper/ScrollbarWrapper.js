import React from 'react';
//import { isChrome } from 'react-device-detect';
import { ScrollbarWrap } from './styled';
export const ScrollbarWrapper = React.forwardRef(({ children, height = 'auto', // если мы передаем цифру, то для ios добавляем высоту скролла, иначе
// выводим строку
viewStyle = {
    position: 'absolute',
    //right: isChrome ? '-16px' : '-17px',
    right: 0,
    top: 0,
    left: 0,
    bottom: 0,
    //marginRight: '-25px',
    marginBottom: '-17px',
    overflow: 'scroll',
}, horizontalStyle = {
    position: 'absolute',
    height: '6px',
    bottom: 0,
    left: 0,
    borderRadius: '3px',
    width: '100%',
}, verticalStyle = {
    position: 'absolute',
    width: '6px',
    top: 0,
    right: 0,
    borderRadius: '3px',
    height: '100%',
}, options = {}, style = {}, }, ref) => {
    const optionsData = {
        ...options,
        hideTracksWhenNotNeeded: true,
    };
    // if (isMacOs) {
    //   return (
    //     <ScrollbarIosWrap ref={ref} height={height} style={style}>
    //       {children}
    //     </ScrollbarIosWrap>
    //   );
    // }
    return (React.createElement(ScrollbarWrap, { ref: ref, ...optionsData, renderView: (Style, ...props) => (React.createElement("div", { ...props, style: { ...Style, ...viewStyle }, className: "view" })), renderTrackHorizontal: (Style, ...props) => (React.createElement("div", { ...props, style: { ...Style, ...horizontalStyle }, className: "track-horizontal" })), renderTrackVertical: (Style, ...props) => (React.createElement("div", { ...props, style: { ...Style, ...verticalStyle }, className: "track-vertical" })), className: "assessment-scrollbar", style: { ...style, height } }, children));
});
