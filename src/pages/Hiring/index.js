import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import { Article } from 'blocks';

import HiringCompanies from 'compositions/Hiring';

import { H2 } from 'elements';

function Hiring() {
  return (
    <Fragment>
      <Helmet>
        <title>React Companies | Hiring</title>
        <meta
          name="description"
          content={`A list of companies that use React JS and are hiring.`}
        />
      </Helmet>
      <Article>
        <H2 modifiers={['borderBottom']}>Hiring</H2>
        <HiringCompanies />
      </Article>
    </Fragment>
  );
}

export default Hiring;
