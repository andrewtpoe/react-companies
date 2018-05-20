import styled, { css } from 'styled-components';

import { buildStyledComponent } from 'utils';

import A from './A';
import Link from './Link';
import LinkList from './LinkList';
import LinkListItem from './LinkListItem';

const styles = ({ theme }) => css`
  display: flex;
  height: 100%;
  justify-content: space-between;
  margin: auto;
  width: 90%;
`;

const TopNav = buildStyledComponent('TopNav', styled.nav, styles);

TopNav.A = A;
TopNav.Link = Link;
TopNav.LinkList = LinkList;
TopNav.LinkListItem = LinkListItem;

export default TopNav;
