import styled, { css } from 'styled-components';

import { buildStyledComponent } from 'utils';

const modifiers = {
  middle: () => ({
    styles: css`
      align-items: center;
      display: flex;
    `,
  }),
  screenSMUp: ({ theme }) => ({
    styles: css`
      display: none;

      @media all and (${theme.dimensions.screenSM}) {
        display: inherit;
      }

      @media all and (${theme.dimensions.screenMD}) {
        display: inherit;
      }

      @media all and (${theme.dimensions.screenLG}) {
        display: inherit;
      }

      @media all and (${theme.dimensions.screenXL}) {
        display: inherit;
      }
    `,
  }),
  screenXSOnly: ({ theme }) => ({
    styles: css`
      @media all and (${theme.dimensions.screenSM}) {
        display: none;
      }

      @media all and (${theme.dimensions.screenMD}) {
        display: none;
      }

      @media all and (${theme.dimensions.screenLG}) {
        display: none;
      }

      @media all and (${theme.dimensions.screenXL}) {
        display: none;
      }
    `,
  }),
};

const styles = ({ theme }) => css`
  color: ${theme.colors.brand.primary};
  height: 64px;
  margin: 0;
  padding: 0;

  @media all and (${theme.dimensions.screenSM}) {
    display: inline-block;
  }

  @media all and (${theme.dimensions.screenMD}) {
    display: inline-block;
  }

  @media all and (${theme.dimensions.screenLG}) {
    display: inline-block;
  }

  @media all and (${theme.dimensions.screenXL}) {
    display: inline-block;
  }
`;

export default buildStyledComponent('TopNav__LinkListItem', styled.li, styles, {
  modifiers,
});
