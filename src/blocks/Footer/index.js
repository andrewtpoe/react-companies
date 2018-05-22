import styled, { css } from 'styled-components';

import { buildStyledComponent } from 'utils';

const styles = ({ theme }) => css`
  align-items: center;
  background-color: ${theme.colors.base.chrome400};
  color: ${theme.colors.base.textWhite};
  display: flex;
  font-size: ${theme.dimensions.fontSizeLG};
  height: 100%;
  justify-content: center;
  padding: 0 5%;
  text-align: center;
  width: 100%;
`;

export default buildStyledComponent('Footer', styled.footer, styles);
