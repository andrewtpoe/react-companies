import styled, { css } from 'styled-components';

import logo from 'assets/react-companies-logo-transparent.svg';

import { buildStyledComponent } from 'utils';

const modifiers = {
  padRight: () => ({
    styles: css`
      margin-right: 8px;
    `,
  }),
};

const styles = () => css`
  height: 56px;
  width: 56px;
`;

export default buildStyledComponent(
  'Logo',
  styled.img.attrs({ alt: 'React Companies Logo', src: logo }),
  styles,
  {
    modifiers,
  },
);
