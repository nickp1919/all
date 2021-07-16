import React from 'react';
import { ReactComponent as GlassesSvg } from "../../assets/glasses.svg";
import { FONT_VARIANTS } from "../../globalStyled";
import { HiddenViewResultDiv, HiddenViewResultInnerDiv, HiddenViewResultTitle, HiddenViewResultText, } from './styles';
export const HiddenView = ({ head, text }) => {
    const { h3Semibold, body1Regular } = FONT_VARIANTS;
    return (React.createElement(HiddenViewResultDiv, null,
        React.createElement(HiddenViewResultInnerDiv, null,
            React.createElement(GlassesSvg, null),
            React.createElement(HiddenViewResultTitle, { forwardedAs: "h2", variant: h3Semibold }, head),
            React.createElement(HiddenViewResultText, { forwardedAs: "p", variant: body1Regular }, text))));
};
