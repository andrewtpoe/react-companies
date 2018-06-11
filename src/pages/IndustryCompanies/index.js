import { capitalize, words } from 'lodash';
import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import { Article } from 'blocks';

import IndustryCompaniesDetails from 'compositions/IndustryCompanies';

import { H2 } from 'elements';

function Industries({ match }) {
  const title = words(match.params.industry)
    .map(word => capitalize(word))
    .join(' ');

  return (
    <Fragment>
      <Helmet>
        <title>{`React Companies | ${title} Industry`}</title>
        <meta
          name="description"
          content={`A list of companies in the ${title} industry that use React JS.`}
        />
      </Helmet>
      <Article>
        <H2 modifiers={['borderBottom']}>{title}</H2>
        <IndustryCompaniesDetails match={match} />
      </Article>
    </Fragment>
  );
}

export default Industries;
