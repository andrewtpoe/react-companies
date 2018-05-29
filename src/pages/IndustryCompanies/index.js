import { capitalize, words } from 'lodash';
import React from 'react';

import { Article } from 'blocks';

import IndustryCompaniesDetails from 'compositions/IndustryCompanies';

import { H2 } from 'elements';

function Industries({ match }) {
  const title = words(match.params.industry)
    .map(word => capitalize(word))
    .join(' ');

  return (
    <Article>
      <H2 modifiers={['borderBottom']}>{title}</H2>
      <IndustryCompaniesDetails match={match} />
    </Article>
  );
}

export default Industries;
