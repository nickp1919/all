import React, { useCallback } from 'react';

import { getShortName } from '@utils-lib';

import { AvatarBlock, TextBlock } from '@modules-lib';

import { FONT_VARIANTS } from '@globalStyled-lib';

import {
  UserCardWrapDiv,
  UserCardInfoDiv,
  UserCardPositionText,
  UserCardAvatarWrapDiv,
} from './styled';
import { TUserCardProps } from './types';

const UserCard: React.FC<TUserCardProps> = ({ onClick, person, short }) => {
  const { personId, firstName, lastName, positionFullName } = person;
  const { captionRegular, body2Regular } = FONT_VARIANTS;

  const handledClick = useCallback(() => {
    if (onClick) {
      onClick(person);
    }
  }, [personId, onClick]);

  return (
    <UserCardWrapDiv onClick={onClick ? handledClick : undefined}>
      <UserCardAvatarWrapDiv>
        <AvatarBlock user={person} />
      </UserCardAvatarWrapDiv>

      <UserCardInfoDiv>
        <div>
          <TextBlock variant={body2Regular}>
            {firstName} {lastName}
          </TextBlock>

          <UserCardPositionText variant={captionRegular}>
            {short ? getShortName(positionFullName, 25) : positionFullName}
          </UserCardPositionText>
        </div>
      </UserCardInfoDiv>
    </UserCardWrapDiv>
  );
};

export default UserCard;
