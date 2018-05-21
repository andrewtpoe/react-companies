import styled, { css } from 'styled-components';

import { buildStyledComponent } from 'utils';

import Content from './Content';
import Image from './Image';

const styles = ({ theme }) => css`
  background-color: ${theme.colors.base.chrome300};
  padding: 80px 5%;
  position: relative;
  text-align: center;
`;

const Hero = buildStyledComponent('Hero', styled.section, styles);

Hero.Content = Content;
Hero.Image = Image;

export default Hero;
