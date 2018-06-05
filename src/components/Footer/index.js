import React from 'react';

import { Footer as StyledFooter } from 'blocks';

import { A, P, Span } from 'elements';

function Footer() {
  return (
    <StyledFooter>
      <P modifiers={['fontSizeLG']}>
        <Span modifiers={['bold']}>React Companies</Span>
        is maintained by
        <A
          href="https://github.com/andrewtpoe"
          modifiers={['bold', 'textWhite']}
          rel="noopener"
          type="_blank"
        >
          @andrewtpoe
        </A>
      </P>
    </StyledFooter>
  );
}

export default Footer;
