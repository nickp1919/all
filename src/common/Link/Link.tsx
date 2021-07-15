import React from 'react';

import { FONT_VARIANTS } from '@globalStyled';
const { body1Regular } = FONT_VARIANTS;

import { LinkWrapDiv } from './styled';
import { TLinkProps } from './types';

export const Link: React.FC<TLinkProps> = ({ children, style, onClick }) => (
  <LinkWrapDiv variant={body1Regular} style={style} onClick={onClick}>
    {children}
  </LinkWrapDiv>
);
