import React from 'react';
import { FONT_VARIANTS } from "../../globalStyled";
const { body1Regular } = FONT_VARIANTS;
import { LinkWrapDiv } from './styled';
export const Link = ({ children, style, onClick }) => (React.createElement(LinkWrapDiv, { variant: body1Regular, style: style, onClick: onClick }, children));
