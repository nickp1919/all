import React from 'react';
import { isArrayCount } from "../../utils";
import { DefaultWrapperDiv, SpaceBetweenWrapperDiv } from './styled';
const VARIANTS = {
    default: DefaultWrapperDiv,
    spaceBetween: SpaceBetweenWrapperDiv,
};
export const UIAdaptive = React.forwardRef(({ children, options, breakpoints, type = 'default', indents = true }, ref) => {
    const { colInit, widthBlocks } = options;
    if (colInit !== isArrayCount(widthBlocks)) {
        console.error('incorrectly specified block width in UIAdaptive');
        return null;
    }
    const Wrapper = VARIANTS[type];
    return (React.createElement(Wrapper, { options: options, breakpoints: breakpoints, indents: indents, ref: ref, className: "assessment-adaptive-wrapper" }, children));
});
