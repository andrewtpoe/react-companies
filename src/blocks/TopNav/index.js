import styled, { css } from 'styled-components';

import { buildStyledComponent } from 'utils';

import A from './A';
import Button from './Button';
import Link from './Link';
import LinkList from './LinkList';
import LinkListItem from './LinkListItem';

const modifiers = {
  height100: () => ({
    styles: css`
      height: 100%;
    `,
  }),
};

const styles = ({ theme }) => css`
  background-color: inherit;
  display: flex;
  height: 64px;
  justify-content: space-between;
  margin: auto;
  width: 90%;
  overflow: hidden;
`;

const TopNav = buildStyledComponent('TopNav', styled.nav, styles, {
  modifiers,
});

TopNav.A = A;
TopNav.Button = Button;
TopNav.Link = Link;
TopNav.LinkList = LinkList;
TopNav.LinkListItem = LinkListItem;

export default TopNav;
