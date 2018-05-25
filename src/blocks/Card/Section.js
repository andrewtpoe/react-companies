import styled, { css } from 'styled-components';

import { buildStyledComponent } from 'utils';

const modifiers = {
  flex_1: () => ({
    styles: css`
      flex: 1;
    `,
  }),
  scrollY: () => ({
    styles: css`
      overflow-y: auto;
    `,
  }),
  tall: () => ({
    styles: css`
      padding-bottom: 16px;
      padding-top: 16px;
    `,
  }),
};

const styles = ({ theme }) => css`
  padding: 8px 16px;
`;

const CardSection = buildStyledComponent('Card__Section', styled.div, styles, {
  modifiers,
});
