import styled, { css } from 'styled-components';

import { buildStyledComponent } from 'utils';

const styles = ({ theme }) => css`
  margin-left: auto;
  margin-right: auto;
  margin-top: ${theme.dimensions.topNavHeight};
  min-height: ${theme.dimensions.minBodyHeight};
  padding: 16px 8px;
  width: 90%;
`;

export default buildStyledComponent('Layout__Body', styled.section, styles);
