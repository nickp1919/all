import styled from 'styled-components';
import css from '@styled-system/css';

const allStyle = `
  width: 30px;
  height: 30px;
  margin: 10px 20px;
`;

export const NotificatorWrapperDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const ErrorIconDiv = styled.div`
  svg {
    ${allStyle}
    fill: #FF3B30;
  }
`;

export const InfoIconDiv = styled.div`
  svg {
    ${allStyle}
    fill: #0066FF;
  }
`;

export const SuccessIconDiv = styled.div`
  svg {
    ${allStyle}
    fill: #34C759;
  }
`;

export const NotificatorText = styled.div`
  ${css({ m: 0 })}
  color: #000000;
`;
