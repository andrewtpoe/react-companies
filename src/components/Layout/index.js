import PropTypes from 'prop-types';
import React from 'react';

import { Layout as StyledLayout } from 'blocks';

import TopNav from 'components/TopNav';
import Footer from 'components/Footer';

export function Layout({ children }) {
  return (
    <StyledLayout>
      <StyledLayout.Header>
        <TopNav />
      </StyledLayout.Header>
      <StyledLayout.Body>{children}</StyledLayout.Body>
      <StyledLayout.Footer>
        <Footer />
      </StyledLayout.Footer>
    </StyledLayout>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
