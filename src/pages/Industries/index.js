import React from 'react';

import { Article } from 'blocks';

import IndustriesList from 'compositions/Industries';

import { H2 } from 'elements';

function Industries() {
  return (
    <Article>
      <H2 modifiers={['borderBottom']}>Industries</H2>
      <IndustriesList />
    </Article>
  );
}

export default Industries;
