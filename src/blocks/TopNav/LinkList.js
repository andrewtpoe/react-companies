import styled, { css } from 'styled-components';

import { buildStyledComponent } from 'utils';

const styles = ({ theme }) => css`
  display: flex;
  height: 100%;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export default buildStyledComponent('TopNav__LinkList', styled.ul, styles);
