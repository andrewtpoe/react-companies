import styled, { css } from 'styled-components';

import { buildStyledComponent } from 'utils';

const styles = ({ theme }) => css`
  padding: 8px;
  width: 100%;

  @media all and (${theme.dimensions.screenSM}) {
    width: calc(100% / 2);
  }

  @media all and (${theme.dimensions.screenMD}) {
    width: calc(100% / 3);
  }

  @media all and (${theme.dimensions.screenLG}) {
    width: calc(100% / 4);
  }

  @media all and (${theme.dimensions.screenXL}) {
    width: calc(100% / 5);
  }
`;

export default buildStyledComponent('Grid__Cell', styled.div, styles);
