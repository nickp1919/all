import React from 'react';

import { Avatar } from '@pulse/ui/components/Avatar';

import { getInitialsUser, getImageUrl } from '@utils';

import { AvatarProps } from './types';

const AvatarBlock = React.forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
  const {
    size = 'm',
    noCandidate,
    candidateGrade,
    status,
    label,
    hasBadge,
    verificationStatus,
    children,
    user,
  } = props;

  const { photo, firstName, lastName } = user;

  const urlPhoto = photo && getImageUrl(photo);

  const initialsLabel = firstName && lastName ? getInitialsUser(firstName, lastName) : undefined;

  return (
    <Avatar
      $size={size}
      $src={urlPhoto}
      $initials={initialsLabel}
      $noCandidate={noCandidate}
      $candidateGrade={candidateGrade}
      $status={status}
      $label={label}
      $hasBadge={hasBadge}
      $verificationStatus={verificationStatus}
      ref={ref}
      children={children}
    />
  );
});

export default AvatarBlock;
