import styled from 'styled-components';
import Scrollbar from 'react-custom-scrollbars';

import { BoxBlock } from '@modules';

import { isNumber } from '@utils';

export const ScrollbarIosWrap = styled(BoxBlock)<{ height: string | number }>`
  height: ${({ height }) =>
    isNumber(height) ? `${+height + 15}px` : height}; // добавляем дополнительные отступ для скролла
  overflow: auto;
  -webkit-overflow-scrolling: touch;
`;

export const ScrollbarWrap = styled(Scrollbar)`
  &&.assessment-scrollbar > div::-webkit-scrollbar-track {
    display: none !important;
  }

  &&.assessment-scrollbar > div::-webkit-scrollbar {
    display: none !important;
  }
`;
