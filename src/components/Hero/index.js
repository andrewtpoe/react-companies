import PropTypes from 'prop-types';
import React from 'react';

import { Hero as StyledHero } from 'blocks';

function Hero({ children }) {
  return (
    <StyledHero>
      <StyledHero.Image />
      <StyledHero.Content>{children}</StyledHero.Content>
    </StyledHero>
  );
}

Hero.propTypes = {
  children: PropTypes.node,
};

Hero.defaultProps = {
  children: undefined,
};

export default Hero;
