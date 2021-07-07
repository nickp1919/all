import React from 'react';

import { Text } from '@pulse/ui/components/Text';

import { FontType } from '@constants';

import { IBoxProps } from '@types';

export const TextBlock: React.FC<IBoxProps> = React.forwardRef((props, ref) => {
  const {
    variant = FontType.default.variant,
    as = FontType.default.as,
    color = FontType.default.color,
    className,
    style,
    children,
    title,
  } = props;

  return (
    <Text
      as={as}
      variant={variant}
      color={color}
      ref={ref}
      className={className}
      style={style}
      title={title}
    >
      {children}
    </Text>
  );
});
