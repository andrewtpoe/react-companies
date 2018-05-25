import styled, { css } from 'styled-components';

import { buildStyledComponent } from 'utils';

const modifiers = {};

const styles = ({ theme }) => css`
  font-size: ${theme.dimensions.fontSizeXXL};
  font-weight: 400;
  margin: 16px 0;
`;

export default buildStyledComponent('H1', styled.h1, styles, { modifiers });
