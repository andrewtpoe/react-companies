import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import { Article } from 'blocks';

import IndustriesList from 'compositions/Industries';

import { H2 } from 'elements';

function Industries() {
  return (
    <Fragment>
      <Helmet>
        <title>React Companies | Industries</title>
        <meta
          name="description"
          content="Companies in these industries use React JS."
        />
      </Helmet>
      <Article>
        <H2 modifiers={['borderBottom']}>Industries</H2>
        <IndustriesList />
      </Article>
    </Fragment>
  );
}

export default Industries;
