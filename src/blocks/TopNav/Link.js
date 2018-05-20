import { omit } from 'lodash';
import React from 'react';
import { Link as BaseLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { buildStyledComponent } from 'utils';

function UnstyledLink(props) {
  const linkProps = omit(props, ['modifiers', 'theme']);
  return <BaseLink {...linkProps} />;
}

const modifiers = {
  bold: () => ({
    styles: css`
      font-weight: 400;
    `,
  }),
  fontSizeXL: ({ theme }) => ({
    styles: css`
      font-size: ${theme.dimensions.fontSizeXL};
    `,
  }),
  textWhite: ({ theme }) => ({
    styles: css`
      color: ${theme.colors.base.textWhite};
    `,
  }),
};

const styles = ({ theme }) => css`
  align-items: center;
  color: inherit;
  display: flex;
  font-size: ${theme.dimensions.fontSizeLG};
  height: 100%;
  padding-left: 16px;
  padding-right: 16px;
  text-decoration: none;

  &:hover {
    background-color: ${theme.colors.base.chrome200};
  }
`;

export default buildStyledComponent(
  'TopNav__Link',
  styled(UnstyledLink),
  styles,
  {
    modifiers,
  },
);
