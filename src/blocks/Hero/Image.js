import styled, { css } from 'styled-components';

import reactLogoGrey from 'assets/react-logo-grey.svg';

import { buildStyledComponent } from 'utils';

const styles = ({ theme }) => css`
  background-image: url(${reactLogoGrey});
  background-position: 20% 18%;
  background-repeat: no-repeat;
  background-size: 200% auto;
  bottom: 0;
  left: 0;
  opacity: 0.5;
  position: absolute;
  right: 0;
  top: 0;

  @media all and (${theme.dimensions.screenSM}) {
    background-position: 20% 9%;
    background-size: 160% auto;
  }

  @media all and (${theme.dimensions.screenMD}) {
    background-position: 0% 18%;
    background-size: 135% auto;
  }

  @media all and (${theme.dimensions.screenLG}) {
    background-position: -50% 18%;
    background-size: 120% auto;
  }

  @media all and (${theme.dimensions.screenXL}) {
    background-position: 150% 18%;
    background-size: 85% auto;
  }
`;

export default buildStyledComponent('Hero__Image', styled.div, styles);
