import styled from 'styled-components';
import css from '@styled-system/css';

import { ReactComponent as CheckCircleWhite } from '@assets/check-circle-white.svg';

import { BoxBlock } from '@modules';
import { getImageUrl } from '@utils';

import { Flex, BorderRadius, colors } from '@globalStyled';

export const FilesPhotoDiv = styled(BoxBlock)`
  ${css({ mt: '15px' })}
  ${Flex}
  flex-wrap: wrap;
`;

export const FilesPhotoItemDiv = styled(BoxBlock)`
  ${css({ mt: 0, mr: '15px', mb: '15px', ml: 0 })}
  width: 328px;
  height: 184px;
  position: relative;

  &:nth-child(3n + 3) {
    ${css({ mr: 0 })}
  }
`;

export const FilesPhotoItemBGDiv = styled(BoxBlock)<{ img: string; checked: boolean }>`
  width: 100%;
  height: 100%;
  ${(props) => `background: url(${getImageUrl(props.img)}) no-repeat center / contain;`}
  position: absolute;
  ${BorderRadius.medium}
  border: 1px solid ${colors.cardStroke};
  z-index: 5;
  overflow: hidden;

  ${(props) =>
    props.checked
      ? `div {
        width: 100%;
        height: 100%;
        background: ${colors.iconsDisabled};
        opacity: 0.4;
        position: absolute;
        top: 0;
        right: 0;
        z-index: 10;
      }`
      : ''}
`;

export const OpenBigPhotoDiv = styled(BoxBlock)`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
  z-index: 15;
`;

export const CheckCircleWhiteSvg = styled(CheckCircleWhite)`
  position: absolute;
  top: 50%;
  left: 50%;
  ${css({ mt: '-20px', ml: '-19px' })}
  z-index: 15;
`;
