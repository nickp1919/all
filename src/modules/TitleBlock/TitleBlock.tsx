import React from 'react';

import { Title } from '@pulse/ui/components/Title';
import { Size } from '@pulse/ui/components/Title/types';

import ActionBlock from './ActionBlock/ActionBlock';

import { IconsSizes, TITLE_SIZE } from '@globalStyled';

import { PlusCircleIconSVG } from './styled';

export const TitleBlock = React.forwardRef<
  HTMLDivElement,
  {
    onClick?: () => void;
    size?: Size;
    isActive?: boolean;
    isTab?: boolean;
    children: React.ReactNode;
    withPlusButton?: boolean;
    onPlusButtonClick?: () => void;
    iconSize?: { width: number; height: number };
  }
>((props, ref) => {
  const {
    size = TITLE_SIZE.H1,
    isActive = false,
    isTab = false,
    withPlusButton,
    iconSize = IconsSizes.medium,
    onPlusButtonClick,
    children,
  } = props;

  return (
    <Title $size={size} $isTab={isTab} $isActive={isActive} ref={ref} {...props}>
      {children}

      {withPlusButton && (
        <ActionBlock size={size} onClick={onPlusButtonClick}>
          <PlusCircleIconSVG iconsize={iconSize} />
        </ActionBlock>
      )}
    </Title>
  );
});
