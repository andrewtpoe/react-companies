import styled, { css } from 'styled-components';

import { buildStyledComponent } from 'utils';

const modifiers = {
  borderBottom: ({ theme }) => ({
    styles: css`
      border-bottom: 2px solid ${theme.colors.base.chrome200};
      padding: 24px 0;
    `,
  }),
};

const styles = ({ theme }) => css`
  font-size: ${theme.dimensions.fontSizeXL};
`;

export default buildStyledComponent('H2', styled.h2, styles, { modifiers });
