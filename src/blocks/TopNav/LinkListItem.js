import styled, { css } from 'styled-components';

import { buildStyledComponent } from 'utils';

const styles = ({ theme }) => css`
  color: ${theme.colors.brand.primary};
  display: inline-block;
  height: 100%;
  margin: 0;
  padding: 0;
`;

export default buildStyledComponent('TopNav__LinkListItem', styled.li, styles);
