import styled, { css } from 'styled-components';

import { buildStyledComponent } from 'utils';

const modifiers = {
  light: ({ theme }) => ({
    styles: css`
      color: ${theme.colors.base.textLight};
      font-weight: 200;
    `,
  }),
  pad: () => ({
    styles: css`
      padding-left: 4px;
      padding-right: 4px;
    `,
  }),
};

const styles = ({ theme }) => css`
  font-size: ${theme.dimensions.fontSizeLG};
  font-weight: 300;
  margin: 8px 0;
`;

export default buildStyledComponent('H3', styled.h3, styles, { modifiers });
