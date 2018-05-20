import styled, { css } from 'styled-components';

import { buildStyledComponent } from 'utils';

const styles = ({ theme }) => css`
  height: ${theme.dimensions.footerHeight};
`;

export default buildStyledComponent('Layout__Footer', styled.footer, styles);
