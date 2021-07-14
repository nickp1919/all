import React from 'react';

import { getBgColorTag } from '@utils';

import { TagStyled } from './styled';
import { Size } from './types';

const TagBlock = React.forwardRef<
  HTMLAnchorElement,
  {
    onClick?: () => void;
    size?: Size;
    isActive?: boolean;
    bgColor?: string;
    children: React.ReactNode;
    style?: any;
    as?: React.ElementType;
  }
>((props, ref) => {
  const { bgColor, size = 'm', children, style, as = 'div' } = props;

  // Для iOS бэк шлет текст, например - "tag01", а модуль Tag с платформы принимает толькло цифры
  // типа string "01"
  const color = getBgColorTag(bgColor || '');

  return (
    <TagStyled $size={size} $color={color} ref={ref} style={style} as={as}>
      {children}
    </TagStyled>
  );
});

export default TagBlock;
