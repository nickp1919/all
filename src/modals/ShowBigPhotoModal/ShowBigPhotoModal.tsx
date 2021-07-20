import React from 'react';

import { ModalWrapper } from '@modules';

import { PhotoDiv } from './styled';
import { ShowBigPhotoProps } from './types';

export const ShowBigPhotoModal: React.FC<ShowBigPhotoProps> = ({ onClose, img, visible }) => {
  return (
    <ModalWrapper onClose={onClose} visible={visible} isCloseIcon={true}>
      <PhotoDiv img={img} />
    </ModalWrapper>
  );
};
