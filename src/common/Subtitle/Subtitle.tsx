import React from 'react';

import { TextBlock } from '@modules-lib';

import { isUndefined } from '@utils-lib';

import { IconsSizes } from '@globalStyled-lib';

import { SubtitleWrapDiv, SubtitleTextDiv, SubtitleCountDiv, PlusCircleIconSVG } from './styled';
import { TSubtitleProps } from './types';

const Subtitle: React.FC<TSubtitleProps> = ({
  children,
  itemsLength,
  withPlusButton,
  onPlusButtonClick,
  as = 'h2',
  variant = 'h2',
  iconSize = IconsSizes.medium,
}) => {
  return (
    <SubtitleWrapDiv>
      <SubtitleTextDiv>
        <TextBlock as={as} variant={variant}>
          {children}
        </TextBlock>

        {!isUndefined(itemsLength) && (
          <SubtitleCountDiv>
            <TextBlock as={as} variant={variant}>
              {itemsLength}
            </TextBlock>
          </SubtitleCountDiv>
        )}
      </SubtitleTextDiv>

      {withPlusButton && <PlusCircleIconSVG onClick={onPlusButtonClick} iconsize={iconSize} />}
    </SubtitleWrapDiv>
  );
};

export default Subtitle;
