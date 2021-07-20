import React, { useState } from 'react';

import { ReactComponent as OpenBigSvg } from '@assets/show-big-photo.svg';

import { isArrayCount } from '@utils';

import { ShowBigPhotoModal } from '@modals';

import {
  FilesPhotoDiv,
  FilesPhotoItemDiv,
  FilesPhotoItemBGDiv,
  CheckCircleWhiteSvg,
  OpenBigPhotoDiv,
} from './styled';
import { PhotoListRadioProps } from './types';
import { TFile } from '@types';

const PhotoListRadio: React.FC<PhotoListRadioProps> = ({ photos, checked, onClick }) => {
  if (!isArrayCount(photos)) {
    return null;
  }

  const [modalVisible, setModalVisible] = useState<boolean>(false);

  return (
    <FilesPhotoDiv>
      {photos.map((file: TFile) => {
        const { id, link } = file;

        return (
          <FilesPhotoItemDiv key={id}>
            <FilesPhotoItemBGDiv img={link} checked={checked} onClick={() => onClick()}>
              {checked && (
                <>
                  <div />

                  <CheckCircleWhiteSvg />
                </>
              )}
            </FilesPhotoItemBGDiv>

            <OpenBigPhotoDiv
              onClick={() => {
                setModalVisible(true);
              }}
            >
              <OpenBigSvg />
            </OpenBigPhotoDiv>

            {modalVisible && (
              <ShowBigPhotoModal
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                img={link}
              />
            )}
          </FilesPhotoItemDiv>
        );
      })}
    </FilesPhotoDiv>
  );
};

export default PhotoListRadio;
