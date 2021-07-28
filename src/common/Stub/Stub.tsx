import React, { ReactNode } from 'react';

import { ReactComponent as GlassesIcon } from '@assets/glasses.svg';
import { ReactComponent as MagicIcon } from '@assets/magic.svg';

type TIcons = {
  [key: string]: ReactNode;
};

const ICONS: TIcons = {
  glasses: <GlassesIcon />,
  magic: <MagicIcon />,
};

import { TitleBlock } from '@modules';

import { isString } from '@utils';

import { FONT_VARIANTS, TITLE_SIZE } from '@globalStyled';

import { StubWrapDiv, StubContentDiv, StubTextBlock } from './styled';
import { TStubProps } from './types';

const Stub: React.FC<TStubProps> = ({
  title = 'раздел-невидимка',
  description = 'пока что вам недоступен просмотр данного раздела платформы',
  icon,
  extraBodyRegular = false,
}) => {
  const descriptionFont = extraBodyRegular
    ? FONT_VARIANTS.extraBodyRegular
    : FONT_VARIANTS.body1Regular;

  const Icon = icon ? (isString(icon) ? ICONS[icon] : icon) : null;

  return (
    <StubWrapDiv>
      {Icon}

      <StubContentDiv>
        <TitleBlock size={TITLE_SIZE.h3}>{title}</TitleBlock>

        <StubTextBlock variant={descriptionFont}>{description}</StubTextBlock>
      </StubContentDiv>
    </StubWrapDiv>
  );
};

export default Stub;
