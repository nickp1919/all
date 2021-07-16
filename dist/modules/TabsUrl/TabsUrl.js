import React from 'react';
import { Navigator, isArrayCount, isSetField } from "../../utils";
import { TabWrapper } from "..";
import { TabsUrlTabsContainer } from './styled';
const transformToArray = (buttons) => {
    const buttonsA = [];
    if (isArrayCount(buttons)) {
        return buttons;
    }
    isSetField(buttons) &&
        Object.keys(buttons).forEach((btn) => {
            buttonsA.push(buttons[btn]);
        });
    return buttonsA;
};
export const TabsUrl = ({ disabled = false, location, buttons, start, newLocation, NAVIGATE, }) => {
    const path = !newLocation ? location.pathname.split('/') : newLocation === null || newLocation === void 0 ? void 0 : newLocation.split('/');
    const startIndex = path.indexOf(start) || 0;
    const testSection = path[startIndex] + '/' + path[startIndex + 1];
    const section = !path[3] ? undefined : path[startIndex === 2 ? startIndex + 1 : startIndex + 2];
    const mainUrl = NAVIGATE.mainUrl || '';
    // Если на вход подается объект, то трансформируем в массив
    const buttonsArr = transformToArray(buttons);
    return (React.createElement(TabsUrlTabsContainer, null, buttonsArr.map((btn, i) => {
        const { name, url, count, children } = btn;
        const isEqualsUrl = section === url;
        const isActive = children ? isEqualsUrl || children.includes(section || '') : isEqualsUrl;
        return (React.createElement(TabWrapper, { disabled: disabled, tabIndex: i, isActive: isActive, key: url ? url : i, count: count && count > 0 ? count : null, onClick: () => {
                if (testSection.split('/').indexOf(mainUrl) > -1) {
                    Navigator(NAVIGATE, !url ? '' : url);
                }
                else {
                    Navigator(NAVIGATE, !url ? testSection : testSection + '/' + url);
                }
            } }, name));
    })));
};
