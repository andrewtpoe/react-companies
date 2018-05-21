import styled, { css } from 'styled-components';

import { buildStyledComponent } from 'utils';

const modifiers = {
  fontSizeXL: ({ theme }) => ({
    styles: css`
      font-size: ${theme.dimensions.fontSizeXL};
    `,
  }),
  fontWeightLight: () => ({
    styles: css`
      font-weight: 100;
    `,
  }),
  textWhite: ({ theme }) => ({
    styles: css`
      color: ${theme.colors.base.textWhite};
    `,
  }),
};

const styles = () => css``;

export default buildStyledComponent('P', styled.p, styles, { modifiers });
