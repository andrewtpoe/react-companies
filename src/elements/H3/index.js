import styled, { css } from 'styled-components';

import { buildStyledComponent } from 'utils';

const modifiers = {};

const styles = ({ theme }) => css`
  font-size: ${theme.dimensions.fontSizeLG};
  font-weight: 300;
  margin: 8px 0;
`;

export default buildStyledComponent('H3', styled.h3, styles, { modifiers });
