import React from 'react';
import { TextBlock } from "../../modules";
import { FONT_VARIANTS } from "../../globalStyled";
import { StubWrapDiv, StubContentDiv, StubTextBlock } from './styled';
const Stub = ({ title, description, icon, extraBodyRegular = false }) => {
    const descriptionFont = extraBodyRegular
        ? FONT_VARIANTS.extraBodyRegular
        : FONT_VARIANTS.body1Regular;
    return (React.createElement(StubWrapDiv, null,
        icon,
        React.createElement(StubContentDiv, null,
            title && React.createElement(TextBlock, { size: FONT_VARIANTS.h2Semibold }, title),
            React.createElement(StubTextBlock, { variant: descriptionFont }, description))));
};
export default Stub;
