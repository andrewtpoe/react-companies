import styled, { css } from 'styled-components';

import { buildStyledComponent } from 'utils';

const styles = ({ theme }) => css`
  border-bottom: 2px solid ${theme.colors.base.chrome100};
  margin: 0 16px;
`;

export default buildStyledComponent('Card__Divider', styled.div, styles);
