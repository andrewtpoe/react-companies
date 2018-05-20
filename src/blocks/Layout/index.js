import styled, { css } from 'styled-components';

import { buildStyledComponent } from 'utils';

import Body from './Body';
import Footer from './Footer';
import Header from './Header';

const styles = () => css``;

const Layout = buildStyledComponent('Layout', styled.div, styles);

Layout.Body = Body;
Layout.Footer = Footer;
Layout.Header = Header;

export default Layout;
