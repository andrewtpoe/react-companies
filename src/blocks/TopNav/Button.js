import { css } from 'styled-components';

import { buildStyledComponent } from 'utils';

import Link from './Link';

const styles = ({ theme }) => css`
  background: transparent;
  border: 1px solid ${theme.colors.chrome000};
  border-radius: 4px;
  height: auto;
  padding: 8px;

  &:focus {
    outline: none;
  }
`;

export default buildStyledComponent(
  'TopNav__Button',
  Link.withComponent('button'),
  styles,
);
