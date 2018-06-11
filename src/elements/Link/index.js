import omit from 'lodash.omit';
import React from 'react';
import { Link as BaseLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { buildStyledComponent } from 'utils';

function UnstyledLink(props) {
  const linkProps = omit(props, ['modifiers', 'theme']);
  return <BaseLink {...linkProps} />;
}

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

export default buildStyledComponent('Link', styled(UnstyledLink), styles, {
  modifiers,
});
