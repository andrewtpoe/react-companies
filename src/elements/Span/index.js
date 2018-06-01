import styled, { css } from 'styled-components';

import { buildStyledComponent } from 'utils';

const modifiers = {
  bold: () => ({
    styles: css`
      font-weight: 400;
    `,
  }),
  fontSizeSM: ({ theme }) => ({
    styles: css`
      font-size: ${theme.dimensions.fontSizeXS};
      line-height: calc(${theme.dimensions.fontSizeXS} * 1.25);

      @media all and (${theme.dimensions.screenSM}) {
        font-size: ${theme.dimensions.fontSizeSM};
        line-height: calc(${theme.dimensions.fontSizeSM} * 1.25);
      }

      @media all and (${theme.dimensions.screenMD}) {
        font-size: ${theme.dimensions.fontSizeSM};
        line-height: calc(${theme.dimensions.fontSizeSM} * 1.25);
      }

      @media all and (${theme.dimensions.screenLG}) {
        font-size: ${theme.dimensions.fontSizeSM};
        line-height: calc(${theme.dimensions.fontSizeSM} * 1.25);
      }

      @media all and (${theme.dimensions.screenXL}) {
        font-size: ${theme.dimensions.fontSizeSM};
        line-height: calc(${theme.dimensions.fontSizeSM} * 1.25);
      }
    `,
  }),
  fontSizeMD: ({ theme }) => ({
    styles: css`
      font-size: ${theme.dimensions.fontSizeSM};
      line-height: calc(${theme.dimensions.fontSizeSM} * 1.25);

      @media all and (${theme.dimensions.screenSM}) {
        font-size: ${theme.dimensions.fontSize};
        line-height: calc(${theme.dimensions.fontSize} * 1.25);
      }

      @media all and (${theme.dimensions.screenMD}) {
        font-size: ${theme.dimensions.fontSize};
        line-height: calc(${theme.dimensions.fontSize} * 1.25);
      }

      @media all and (${theme.dimensions.screenLG}) {
        font-size: ${theme.dimensions.fontSize};
        line-height: calc(${theme.dimensions.fontSize} * 1.25);
      }

      @media all and (${theme.dimensions.screenXL}) {
        font-size: ${theme.dimensions.fontSize};
        line-height: calc(${theme.dimensions.fontSize} * 1.25);
      }
    `,
  }),
  fontSizeLG: ({ theme }) => ({
    styles: css`
      font-size: ${theme.dimensions.fontSize};
      line-height: calc(${theme.dimensions.fontSize} * 1.25);

      @media all and (${theme.dimensions.screenSM}) {
        font-size: ${theme.dimensions.fontSizeLG};
        line-height: calc(${theme.dimensions.fontSizeLG} * 1.25);
      }

      @media all and (${theme.dimensions.screenMD}) {
        font-size: ${theme.dimensions.fontSizeLG};
        line-height: calc(${theme.dimensions.fontSizeLG} * 1.25);
      }

      @media all and (${theme.dimensions.screenLG}) {
        font-size: ${theme.dimensions.fontSizeLG};
        line-height: calc(${theme.dimensions.fontSizeLG} * 1.25);
      }

      @media all and (${theme.dimensions.screenXL}) {
        font-size: ${theme.dimensions.fontSizeLG};
        line-height: calc(${theme.dimensions.fontSizeLG} * 1.25);
      }
    `,
  }),
  fontSizeXL: ({ theme }) => ({
    styles: css`
      font-size: ${theme.dimensions.fontSizeLG};
      line-height: calc(${theme.dimensions.fontSizeLG} * 1.25);

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
    `,
  }),
};

const styles = () => css`
  margin-left: 4px;
  margin-right: 4px;
`;

export default buildStyledComponent('Span', styled.span, styles, { modifiers });
