import styled, { css } from 'styled-components';

import { buildStyledComponent } from 'utils';

const styles = ({ theme }) => css`
  margin-top: ${theme.dimensions.topNavHeight};
`;

export default buildStyledComponent('Layout__Body', styled.section, styles);
