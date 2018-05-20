import React from 'react';

import { Footer as StyledFooter } from 'blocks';

import { A, Span } from 'elements';

function Footer() {
  return (
    <StyledFooter>
      <Span modifiers={['bold']}>React Companies</Span>
      is maintained by
      <A href="https://github.com/andrewtpoe" modifiers={['bold', 'textWhite']}>
        @andrewtpoe
      </A>
    </StyledFooter>
  );
}

export default Footer;
