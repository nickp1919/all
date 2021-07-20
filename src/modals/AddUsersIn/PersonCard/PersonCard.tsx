import React, { forwardRef } from 'react';

import { CheckBox } from '@common';
import { AvatarBlock, BoxBlock } from '@modules';

import { FONT_VARIANTS } from '@globalStyled';

import {
  CheckedMarkSVG,
  PersonCardCheckBoxDiv,
  StyledContentContainerDiv,
  StyledFullNameText,
  StyledPersonCardLabel,
  PositionTextBlock,
} from './styled';
import { IPersonCardProps } from './types';

export const PersonCard = forwardRef<HTMLDivElement, IPersonCardProps>(function PersonCard(
  {
    userId,
    firstName = 'Имя',
    lastName = 'Фамилия',
    isAnonymous,
    position,
    rightSlot,
    avatarIcon,
    photoUrl,
    fullNamePrefix,
    fullNamePostfix,
    avatarSize,
    onClick,
    removeChoose,
    title,
    addChoosePerson,
    removeChoosePerson,
    isFixed = false,
    ...props
  },
  ref
) {
  const { body1Semibold, captionRegular } = FONT_VARIANTS;

  return (
    <StyledPersonCardLabel ref={ref} {...props} title={title} isFixed={isFixed}>
      <PersonCardCheckBoxDiv>
        {isFixed ? (
          <CheckedMarkSVG isfixed={isFixed?.toString()} />
        ) : (
          <CheckBox
            onChange={(val: boolean) => {
              if (val) {
                addChoosePerson();
              } else {
                removeChoosePerson();
              }
            }}
            name={userId}
          />
        )}
      </PersonCardCheckBoxDiv>

      <BoxBlock>
        <AvatarBlock user={{ photo: photoUrl, firstName, lastName }} />
      </BoxBlock>

      <StyledContentContainerDiv>
        <StyledFullNameText variant={body1Semibold}>
          {fullNamePrefix} {firstName} {lastName} {fullNamePostfix}
        </StyledFullNameText>

        <PositionTextBlock variant={captionRegular}>{position}</PositionTextBlock>
      </StyledContentContainerDiv>
    </StyledPersonCardLabel>
  );
});
