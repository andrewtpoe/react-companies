import React from 'react';

import { Footer as StyledFooter } from 'blocks';

import { A, P, Span } from 'elements';

function Footer() {
  return (
    <StyledFooter>
      <P>
        <Span modifiers={['bold']}>React Companies</Span>
        is maintained by
        <A
          href="https://github.com/andrewtpoe"
          modifiers={['bold', 'textWhite']}
          type="new"
        >
          @andrewtpoe
        </A>
      </P>
    </StyledFooter>
  );
}

export default Footer;
