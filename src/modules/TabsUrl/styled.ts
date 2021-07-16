import styled from 'styled-components';
import css from '@styled-system/css';

import { TabsContainer } from '@modules/Tabs';

export const TabsUrlTabsContainer = styled(TabsContainer)`
  ${css({ mt: 10 })}
  font-size: 16px;

  & > div {
    height: 36px;
  }
`;
