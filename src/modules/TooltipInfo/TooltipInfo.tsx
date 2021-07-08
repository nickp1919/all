import React from 'react';
import Tooltip from 'rc-tooltip';

import { ReactComponent as InfoIcon } from './icon/circle-info-outfilled.svg';

import { TooltipWrapperDiv, InfoIconDiv } from './styled';
import { TIconTooltipProps } from './types';

export const TooltipInfo: React.FC<TIconTooltipProps> = ({
  children,
  overlay,
  icon,
  placement,
  trigger,
  width = '320px',
}) => {
  const _overlay = <TooltipWrapperDiv width={width}>{overlay || ''}</TooltipWrapperDiv>;

  return (
    <Tooltip overlay={_overlay} placement={placement || 'top'} trigger={trigger || 'hover'}>
      {children ? (
        children
      ) : (
        <InfoIconDiv {...icon}>
          <InfoIcon />
        </InfoIconDiv>
      )}
    </Tooltip>
  );
};
