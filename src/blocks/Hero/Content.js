import styled, { css } from 'styled-components';

import { buildStyledComponent } from 'utils';

const styles = () => css`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export default buildStyledComponent('Hero__Content', styled.div, styles);
