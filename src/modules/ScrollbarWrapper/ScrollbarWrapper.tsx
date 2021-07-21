import React, { CSSProperties } from 'react';
import { ScrollbarProps } from 'react-custom-scrollbars';
//import { isChrome } from 'react-device-detect';

import { ScrollbarWrap } from './styled';
import { ScrollbarWrapperProps } from './types';

export const ScrollbarWrapper = React.forwardRef(
  (
    {
      children,
      height = 'auto', // если мы передаем цифру, то для ios добавляем высоту скрола, иначе
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
      },
      horizontalStyle = {
        position: 'absolute',
        height: '6px',
        bottom: 0,
        left: 0,
        borderRadius: '3px',
        width: '100%',
      },
      verticalStyle = {
        position: 'absolute',
        width: '6px',
        top: 0,
        right: 0,
        borderRadius: '3px',
        height: '100%',
      },
      options = {},
      style = {},
      extendsViewStyle = {},
      extendsHorizontalStyle = {},
      extendsVerticalStyle = {},
    }: ScrollbarWrapperProps,
    ref
  ) => {
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

    return (
      <ScrollbarWrap
        ref={ref}
        {...optionsData}
        renderView={(Style: CSSProperties, ...props: ScrollbarProps[]) => (
          <div
            {...props}
            style={{ ...Style, ...viewStyle, ...extendsViewStyle }}
            className="view"
          />
        )}
        renderTrackHorizontal={(Style: CSSProperties, ...props: ScrollbarProps[]) => (
          <div
            {...props}
            style={{ ...Style, ...horizontalStyle, ...extendsHorizontalStyle }}
            className="track-horizontal"
          />
        )}
        renderTrackVertical={(Style: CSSProperties, ...props: ScrollbarProps[]) => (
          <div
            {...props}
            style={{ ...Style, ...verticalStyle, ...extendsVerticalStyle }}
            className="track-vertical"
          />
        )}
        className="assessment-scrollbar"
        style={{ ...style, height }}
      >
        {children}
      </ScrollbarWrap>
    );
  }
);
