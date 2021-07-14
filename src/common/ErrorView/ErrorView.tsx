import React, { FC } from 'react';

import { WrapperDiv } from './styles';
import { IErrorViewProps } from './types';

export const ErrorView: FC<IErrorViewProps> = ({ error }) => {
  return <WrapperDiv>Произошла ошибка: {error?.message} </WrapperDiv>;
};
