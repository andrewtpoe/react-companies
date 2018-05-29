import styled, { css } from 'styled-components';

import { buildStyledComponent } from 'utils';

const modifiers = {};

const styles = () => css`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export default buildStyledComponent('Ul', styled.ul, styles, { modifiers });
