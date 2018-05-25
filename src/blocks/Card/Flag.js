import styled, { css } from 'styled-components';

import { buildStyledComponent } from 'utils';

const styles = ({ theme }) => css`
  background-color: ${theme.colors.brand.secondary};
  padding: 2px 8px;
  position: absolute;
  right: 0;
  top: 4px;
`;

export default buildStyledComponent('Card__Flag', styled.div, styles);
