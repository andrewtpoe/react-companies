import styled, { css } from 'styled-components';

import loadingSVG from 'assets/loading.svg';

import { buildStyledComponent } from 'utils';

const modifiers = {
  card: ({ theme }) => ({
    styles: css`
      border-radius: 4px;
      border: 1px solid ${theme.colors.base.chrome100};
      box-shadow: 0 2px 4px ${theme.colors.base.shadow};
      display: flex;
      flex-direction: column;
      height: 420px;
      position: relative;
      width: 100 %;
    `,
  }),
};

const styles = ({ theme }) => css`
  padding: 100px;
  height: 500px;
  width: 100%;
`;

const Loading = buildStyledComponent(
  'Loading',
  styled.img.attrs({
    alt: 'Loading...',
    src: loadingSVG,
  }),
  styles,
  { modifiers },
);

export default Loading;
