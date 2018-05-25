import styled, { css } from 'styled-components';

import { buildStyledComponent } from 'utils';

const styles = css`
  padding: 8px;
  width: calc(100% / 4);
`;

export default buildStyledComponent('Grid__Cell', styled.div, styles);
