import React from 'react';
import styled from 'styled-components';
import css from '@styled-system/css';

import { ReactComponent as XIcon } from '@assets/x.svg';

import { BIG_MODAL } from '@constants';

import { BoxBlock, Button, TextBlock } from '@modules';

import { AlignCenter, AJCenter, colors, BorderBox, FontType, Flex, Wrap } from '@globalStyled';

import Form from '@common/Form/Form';
import Input from '@common/Form/Input';

import PersonCard from './PersonCard';

import { IBoxProps } from '@types';

export const AddUsersInDiv = styled(BoxBlock)`
  position: relative;
  width: 100%;
`;

export const AddUsersInInnerDiv = styled(BoxBlock)`
  ${css({ px: '65px' })}
`;

export const AddUsersInPanelDiv = styled(BoxBlock)``;

export const SelectedPersonButton = styled(Button)`
  ${css({ ml: 2 })}
`;

export const AddUsersInRightDiv = styled(BoxBlock)`
  ${AlignCenter}
`;

export const XIconSvg = styled(XIcon)`
  width: 10px;
  height: 10px;
`;

export const AddUsersInPanelInnerDiv = styled(BoxBlock)`
  ${AlignCenter}
  justify-content: space-between;
`;

// SelectedPersonsStyled

export const SelectedPersonLi = styled(BoxBlock)<IBoxProps>`
  ${css({ mb: 3, px: 2 })}
  ${AlignCenter}
  position: relative;
  background: ${colors.grays.bgTertiary};
  border-radius: 4px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: ${colors.black};
  min-height: 27.61px;
`;

export const AddUsersInTitleText = styled(TextBlock)<IBoxProps>`
  margin-top: 0;
`;

export const SpinnerDiv = styled(BoxBlock)`
  position: absolute;
  top: 50%;
  left: 47%;
  z-index: 100;
`;

export const GlobalSearchDiv = styled(BoxBlock)`
  ${css({ py: '25px', px: 0 })}
  border-bottom: 1px solid  ${colors.grays.border};
`;

export const GlobalContentDiv = styled(BoxBlock)`
  ${AlignCenter}

  svg {
    height: 14px;
  }
`;

export const InputBlock = styled(Input)`
  input {
    ${css({ pl: 4 })}
    color: ${colors.black};
    height: 22px;
    border: none;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.38px;
    width: 100%;

    &:placeholder {
      color: ${colors.grays.disable};
    }

    &:focus {
      outline: none;
    }
  }
`;

export const UserListEmptyDiv = styled(BoxBlock)`
  ${css({ pb: '100px' })}
  ${AJCenter}
  ${BorderBox}
  height: calc(${BIG_MODAL.height} - 285px);
`;

export const UserListEmptyInnerDiv = styled(BoxBlock)`
  text-align: center;
  width: 51%;
`;
export const UserListEmptyText = styled(TextBlock)<IBoxProps>`
  ${css({ mt: 4 })}
`;

export const FormBlock = styled(Form)`
  height: 100%;
`;

export const DropContentDiv = styled(BoxBlock)`
  ${css({ pt: 4 })}
  width: 100%;
  height: 100%;
`;

export const StyledPersonCard = styled(PersonCard)`
  ${css({ mt: 6 })}

  &:first-child {
    ${css({ mt: 5 })}
  }

  &:hover {
    background: none;
  }
`;

export const AddUsersInSubmitButton = styled(Button)<{ disabled: boolean }>`
  && {
    ${FontType.bold.fontWeight}
  }
`;

export const AddUsersInCancelButton = styled(Button)`
  ${css({ ml: 5 })}
  && {
    ${FontType.default.fontWeight}
  }
`;

export const ChosenPersonsUl = styled(BoxBlock)<IBoxProps>`
  list-style: none;
  ${Flex}
  ${Wrap}

  ${css({ mb: 0, mt: 0, mr: 0, ml: 0, p: 0 })}

  & > * {
    ${css({
      mr: 4,
    })}
  }

  & > :first-child {
    ${css({ ml: 0 })}
  }
`;

export const AddUsersInPanelText = styled(TextBlock)<IBoxProps>`
  ${css({ mt: 4 })}
`;

export const DropContentCheckBoxDiv = styled(BoxBlock)<IBoxProps>`
  ${css({ my: 6 })}
`;

export const SearchWrapperDiv = styled(BoxBlock)`
  ${css({ mt: 4 })}
`;

export const DropContentCardsDiv = styled(BoxBlock)<{ height?: number }>`
  min-height: 500px;
  //height: calc(${BIG_MODAL.height} - ${({ height }) => height}px);
`;

export const ScrollbarHorizontalStyles = {
  display: 'none',
} as React.CSSProperties;
