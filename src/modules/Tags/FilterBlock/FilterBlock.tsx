import React from 'react';

import { getBgColorTag } from '@utils-lib';

import { ColorType, State } from './types';
import { FilterStyled } from './styled';


const FilterBlock = React.forwardRef<
  HTMLAnchorElement,
  {
    state?: State;
    bgColor?: string;
    onClick?: any;
    counter: number;
    children: React.ReactNode;
  }
>((props, ref) => {
  const { bgColor, state = 'active', children, counter, onClick } = props;

  const color = getBgColorTag(bgColor || '') as ColorType;

  return (
    <FilterStyled $state={state} $color={color} ref={ref} $counter={counter} onClick={onClick}>
      {children}
    </FilterStyled>
  );
});

export default FilterBlock;
