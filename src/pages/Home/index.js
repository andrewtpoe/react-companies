import React, { Fragment } from 'react';

import { Article } from 'blocks';

import Hero from 'components/Hero';

import { A, H2, Icon, P, Span } from 'elements';

function Home() {
  return (
    <Fragment>
      <Hero>
        <P modifiers={['fontSizeXL', 'fontWeightLight', 'textWhite']}>
          A curated list of companies using React in production, organized by
          industries.
        </P>
        {false && (
          <P style={{ padding: '32px 0' }}>
            <A
              href="https://github.com/andrewtpoe/react-companies/blob/master/README.md#adding-your-company"
              modifiers={['button']}
            >
              <Span>
                <Icon className="fab fa-lg fa-github" />
              </Span>
              <Span>Add Your Company</Span>
            </A>
          </P>
        )}
      </Hero>
      <Article>
        <H2 modifiers={['borderBottom']}>Coming Soon...</H2>
        <P>React Companies is currently a work in progress. Check back soon.</P>
      </Article>
    </Fragment>
  );
}

export default Home;
