import styled from 'styled-components';

import { Tab } from '@pulse/ui/components/Tabs';

import { colors } from '@globalStyled-lib';

export const StyledTab = styled(Tab)<{ disabled?: boolean }>`
  ${({ disabled }) =>
    disabled &&
    `
    background: ${colors.grays.fieldDisable};
    `}
`;
