import styled, { css } from 'styled-components';

import { buildStyledComponent } from 'utils';

const styles = ({ theme }) => css`
  height: 100%;
  list-style-type: none;
  margin: 0;
  padding: 0;

  @media all and (${theme.dimensions.screenSM}) {
    display: flex;
  }

  @media all and (${theme.dimensions.screenMD}) {
    display: flex;
  }

  @media all and (${theme.dimensions.screenLG}) {
    display: flex;
  }

  @media all and (${theme.dimensions.screenXL}) {
    display: flex;
  }
`;

export default buildStyledComponent('TopNav__LinkList', styled.ul, styles);
