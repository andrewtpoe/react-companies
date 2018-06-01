import styled, { css } from 'styled-components';

import { buildStyledComponent } from 'utils';

import Cell from './Cell';

const styles = css`
  display: flex;
  flex-wrap: wrap;
  margin: -8px;
`;

const Grid = buildStyledComponent('Grid', styled.div, styles);

Grid.Cell = Cell;

export default Grid;
