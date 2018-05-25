import styled, { css } from 'styled-components';

import { buildStyledComponent } from 'utils';

import Divider from './Divider';
import Flag from './Flag';
import Section from './Section';

const styles = ({ theme }) => css`
  border-radius: 4px;
  border: 1px solid ${theme.colors.base.chrome100};
  box-shadow: 0 2px 4px ${theme.colors.base.shadow};
  display: flex;
  flex-direction: column;
  height: 420px;
  position: relative;
  width: 100%;
`;

const Card = buildStyledComponent('Card', styled.div, styles);

Card.Divider = Divider;
Card.Flag = Flag;
Card.Section = Section;

export default Card;
