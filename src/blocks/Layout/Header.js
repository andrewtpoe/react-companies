import styled, { css } from 'styled-components';

import { buildStyledComponent } from 'utils';

const styles = ({ theme }) => css`
  background-color: ${theme.colors.base.chrome400};
  color: ${theme.colors.base.textWhite};
  height: ${theme.dimensions.topNavHeight};
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
`;

export default buildStyledComponent('Layout__Header', styled.header, styles);
