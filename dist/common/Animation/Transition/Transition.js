import React from 'react';
import { Transition } from 'react-transition-group';
import { BoxBlock } from "../../../modules";
const duration = 300;
const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
};
const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
};
export const TransitionBLock = ({ children, reverse }) => {
    return (React.createElement(Transition, { timeout: duration }, (state) => (React.createElement(BoxBlock, { as: "div", style: {
            ...defaultStyle,
            ...transitionStyles[state],
        } }, reverse ? React.Children.toArray(children).reverse() : React.Children.toArray(children)))));
};
