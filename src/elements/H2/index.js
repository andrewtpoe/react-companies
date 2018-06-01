import styled, { css } from 'styled-components';

import { buildStyledComponent } from 'utils';

const modifiers = {
  borderBottom: ({ theme }) => ({
    styles: css`
      border-bottom: 4px solid ${theme.colors.base.chrome200};
      padding: 12px 0;

      @media all and (${theme.dimensions.screenSM}) {
        padding: 18px 0;
      }

      @media all and (${theme.dimensions.screenMD}) {
        padding: 24px 0;
      }

      @media all and (${theme.dimensions.screenLG}) {
        padding: 24px 0;
      }

      @media all and (${theme.dimensions.screenXL}) {
        padding: 24px 0;
      }
    `,
  }),
};

const styles = ({ theme }) => css`
  font-size: ${theme.dimensions.fontSizeLG};
  font-weight: 400;
  line-height: calc(${theme.dimensions.fontSizeLG} * 1.25);
  margin: 12px 0;

  @media all and (${theme.dimensions.screenSM}) {
    font-size: ${theme.dimensions.fontSizeXL};
    line-height: calc(${theme.dimensions.fontSizeXL} * 1.25);
  }

  @media all and (${theme.dimensions.screenMD}) {
    font-size: ${theme.dimensions.fontSizeXL};
    line-height: calc(${theme.dimensions.fontSizeXL} * 1.25);
  }

  @media all and (${theme.dimensions.screenLG}) {
    font-size: ${theme.dimensions.fontSizeXL};
    line-height: calc(${theme.dimensions.fontSizeXL} * 1.25);
  }

  @media all and (${theme.dimensions.screenXL}) {
    font-size: ${theme.dimensions.fontSizeXL};
    line-height: calc(${theme.dimensions.fontSizeXL} * 1.25);
  }
`;

export default buildStyledComponent('H2', styled.h2, styles, { modifiers });
