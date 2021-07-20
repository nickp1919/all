import styled from 'styled-components';

import { getImageUrl } from '@utils';

import { BoxBlock } from '@modules';

import { BorderRadius } from '@globalStyled';

export const PhotoDiv = styled(BoxBlock)<{ img: string }>`
  width: 65vw;
  height: 80vh;
  ${(props) => `background: url(${getImageUrl(props.img)}) no-repeat center / contain;`}
  ${BorderRadius.default};
`;
