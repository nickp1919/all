import styled from 'styled-components';
import css from '@styled-system/css';
import { BoxBlock, TextBlock } from "../../modules";
import { AlignCenter, colors } from "../../globalStyled";
export const UserCardWrapDiv = styled(BoxBlock) `
  ${AlignCenter}
  position: relative;
`;
export const UserCardInfoDiv = styled(BoxBlock) `
  ${AlignCenter}

  ${css({ ml: 4 })}
`;
export const UserCardPositionText = styled(TextBlock) `
  ${css({ mt: '2px' })}
  color: ${colors.grays.text};
`;
export const UserCardAvatarWrapDiv = styled(BoxBlock) `
  flex: 0 0 40px;
`;
