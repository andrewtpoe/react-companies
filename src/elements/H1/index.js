import styled, { css } from 'styled-components';

import { buildStyledComponent } from 'utils';

const modifiers = {};

const styles = ({ theme }) => css`
  font-size: ${theme.dimensions.fontSizeLG};
  font-weight: 400;
  margin: 16px 0;

  @media all and (${theme.dimensions.screenSM}) {
    font-size: ${theme.dimensions.fontSizeXL};
  }

  @media all and (${theme.dimensions.screenMD}) {
    font-size: ${theme.dimensions.fontSizeXL};
  }

  @media all and (${theme.dimensions.screenLG}) {
    font-size: ${theme.dimensions.fontSizeXL};
  }

  @media all and (${theme.dimensions.screenXL}) {
    font-size: ${theme.dimensions.fontSizeXL};
  }
`;

export default buildStyledComponent('H1', styled.h1, styles, { modifiers });
