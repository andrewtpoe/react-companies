import styled, { css } from 'styled-components';

import { buildStyledComponent } from 'utils';

const styles = ({ theme }) => css`
  margin-left: auto;
  margin-right: auto;
  min-height: ${theme.dimensions.minBodyHeight};
  padding: 16px 8px;
  width: 90%;
`;

export default buildStyledComponent('Article', styled.section, styles);
