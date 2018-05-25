import styled, { css } from 'styled-components';

import { buildStyledComponent } from 'utils';

const modifiers = {
  fontSizeSM: ({ theme }) => ({
    styles: css`
      font-size: ${theme.dimensions.fontSizeSM};
    `,
  }),
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
  short: () => ({
    styles: css`
      margin: 0;
    `,
  }),
  textLight: ({ theme }) => ({
    styles: css`
      color: ${theme.colors.base.textLight};
    `,
  }),
  textWhite: ({ theme }) => ({
    styles: css`
      color: ${theme.colors.base.textWhite};
    `,
  }),
};

const styles = () => css`
  margin: 8px 0;
`;

export default buildStyledComponent('P', styled.p, styles, { modifiers });
