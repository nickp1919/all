import React from 'react';

import { Navigator, isArrayCount, isSetField } from '@utils';

import { TabWrapper } from '@modules';

import { TabsUrlTabsContainer } from './styled';
import { TabsUrlPropsType } from './types';

export type TBtn = {
  name: string;
  url: string;
  count?: number;
  children: any;
};

const transformToArray = (buttons: TBtn[]) => {
  const buttonsA: TBtn[] = [];

  if (isArrayCount(buttons)) {
    return buttons;
  }

  isSetField(buttons) &&
    Object.keys(buttons).forEach((btn: any) => {
      buttonsA.push(buttons[btn]);
    });

  return buttonsA;
};

export const TabsUrl: React.FC<TabsUrlPropsType> = ({
  disabled = false,
  location,
  buttons,
  start,
  newLocation,
  NAVIGATE,
}) => {
  const path = !newLocation ? location.pathname.split('/') : newLocation?.split('/');
  const startIndex = path.indexOf(start) || 0;
  const testSection = path[startIndex] + '/' + path[startIndex + 1];
  const section = !path[3] ? undefined : path[startIndex === 2 ? startIndex + 1 : startIndex + 2];
  const mainUrl = NAVIGATE.mainUrl || '';

  // Если на вход подается объект, то трансформируем в массив
  const buttonsArr = transformToArray(buttons);

  return (
    <TabsUrlTabsContainer>
      {buttonsArr.map((btn: TBtn, i: number) => {
        const { name, url, count, children } = btn;
        const isEqualsUrl = section === url;
        const isActive = children ? isEqualsUrl || children.includes(section || '') : isEqualsUrl;

        return (
          <TabWrapper
            disabled={disabled}
            tabIndex={i}
            isActive={isActive}
            key={url ? url : i}
            count={count && count > 0 ? count : null}
            onClick={() => {
              if (testSection.split('/').indexOf(mainUrl) > -1) {
                Navigator(NAVIGATE, !url ? '' : url);
              } else {
                Navigator(NAVIGATE, !url ? testSection : testSection + '/' + url);
              }
            }}
          >
            {name}
          </TabWrapper>
        );
      })}
    </TabsUrlTabsContainer>
  );
};
