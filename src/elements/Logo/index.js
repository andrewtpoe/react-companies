import styled, { css } from 'styled-components';

import { buildStyledComponent } from 'utils';

const modifiers = {
  padRight: () => ({
    styles: css`
      padding-right: 8px;
    `,
  }),
};

const styles = () => css``;

export default buildStyledComponent('Logo', styled.i, styles, {
  className: 'fab fa-2x fa-react',
  modifiers,
});
