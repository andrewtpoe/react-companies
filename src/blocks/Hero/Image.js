import styled, { css } from 'styled-components';

import reactLogoGrey from 'assets/react-logo-grey.svg';

import { buildStyledComponent } from 'utils';

const styles = () => css`
  background-image: url(${reactLogoGrey});
  background-position: 200% 15%;
  background-repeat: no-repeat;
  background-size: 85% auto;
  bottom: 0;
  left: 0;
  opacity: 0.5;
  position: absolute;
  right: 0;
  top: 0;
`;

export default buildStyledComponent('Hero__Image', styled.div, styles);
