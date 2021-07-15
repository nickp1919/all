import React from 'react';
import { Text } from '@pulse/ui/components/Text';
import { FontType } from "../../constants";
export const TextBlock = React.forwardRef((props, ref) => {
    const { variant = FontType.default.variant, as = FontType.default.as, color = FontType.default.color, className, style, children, title, onClick, } = props;
    return (React.createElement(Text, { as: as, variant: variant, color: color, ref: ref, className: className, style: style, title: title, onClick: onClick }, children));
});
