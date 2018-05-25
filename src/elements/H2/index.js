import styled, { css } from 'styled-components';

import { buildStyledComponent } from 'utils';

const modifiers = {
  borderBottom: ({ theme }) => ({
    styles: css`
      border-bottom: 4px solid ${theme.colors.base.chrome200};
      padding: 24px 0;
    `,
  }),
};

const styles = ({ theme }) => css`
  font-size: ${theme.dimensions.fontSizeXL};
  font-weight: 400;
  margin: 12px 0;
`;

export default buildStyledComponent('H2', styled.h2, styles, { modifiers });
