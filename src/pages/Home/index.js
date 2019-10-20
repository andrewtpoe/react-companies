import React, { Fragment } from 'react';

import { Article } from 'blocks';

import Hero from 'components/Hero';

import CompanyCount from 'compositions/CompanyCount';
import RecentlyAdded from 'compositions/RecentlyAdded';

import { A, H2, Icon, P, Span } from 'elements';

function Home() {
  return (
    <Fragment>
      <Hero>
        <P
          modifiers={['fontSizeXL', 'fontWeightLight', 'tall', 'textWhite']}
          style={{ letterSpacing: '1px' }}
        >
          A curated list of companies using React JS in production, organized by
          industry.
        </P>
        <CompanyCount />
        <P modifiers={['tall']}>
          <A
            href="https://andrewtpoe.github.io/react-companies/blob/master/README.md#adding-your-company"
            modifiers={['button', 'fontSizeLG']}
            rel="noopener"
            style={{ display: 'inline-block' }}
            type="_blank"
          >
            <Span>
              <Icon className="fab fa-lg fa-github" />
            </Span>
            <Span>Add Your Company</Span>
          </A>
        </P>
      </Hero>
      <Article>
        <H2 modifiers={['borderBottom']}>Recent Additions</H2>
        <RecentlyAdded />
      </Article>
    </Fragment>
  );
}

export default Home;
