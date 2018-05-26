import React from 'react';

import { Article } from 'blocks';

import HiringCompanies from 'compositions/Hiring';

import { H2 } from 'elements';

function Hiring() {
  return (
    <Article>
      <H2 modifiers={['borderBottom']}>Hiring</H2>
      <HiringCompanies />
    </Article>
  );
}

export default Hiring;
