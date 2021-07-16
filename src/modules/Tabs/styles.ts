import styled from 'styled-components';

import { Tab } from '@pulse/ui/components/Tabs';

import { colors } from '@globalStyled';

export const StyledTab = styled(Tab)<{ disabled?: boolean }>`
  ${({ disabled }) =>
    disabled &&
    `
    background: ${colors.grays.fieldDisable};
    `}
`;
