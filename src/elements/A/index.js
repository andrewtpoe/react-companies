import styled, { css } from 'styled-components';

import { buildStyledComponent } from 'utils';

const modifiers = {
  bold: () => ({
    styles: css`
      font-weight: 400;
    `,
  }),
  button: ({ theme }) => ({
    styles: css`
      background-color: ${theme.colors.brand.primary};
      border-bottom: none;
      cursor: pointer;
      font-size: ${theme.dimensions.fontSizeLG};
      font-weight: 400;
      padding: 16px 24px;

      &:hover {
        background-color: ${theme.colors.base.chrome000};
        border-bottom: none;
      }
    `,
  }),
  fontSizeSM: ({ theme }) => ({
    styles: css`
      font-size: ${theme.dimensions.fontSizeSM};
    `,
  }),
  textWhite: ({ theme }) => ({
    styles: css`
      background-color: transparent;
      color: ${theme.colors.base.textWhite};

      &:hover {
        background-color: transparent;
      }
    `,
  }),
};

const styles = ({ theme }) => css`
  background-color: ${theme.colors.brand.tertiary};
  border-bottom: 1px solid ${theme.colors.base.shadowLight};
  color: inherit;
  margin-left: 4px;
  margin-right: 4px;
  text-decoration: none;

  &:hover {
    background-color: ${theme.colors.brand.primary};
    border-bottom: 1px solid ${theme.colors.base.text};
  }

  &:visited {
    color: inherit;
  }
`;

export default buildStyledComponent('A', styled.a, styles, { modifiers });
