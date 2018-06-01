import React from 'react';

import { CompaniesContextConsumer } from 'compositions/CompaniesContext';

import { P, Span } from 'elements';

function CompanyCount({ companies }) {
  return (
    <P
      modifiers={['fontSizeLG', 'fontWeightLight', 'tall', 'textWhite']}
      style={{ letterSpacing: '1px' }}
    >
      With
      <Span modifiers={['bold']}>{companies.length}</Span>
      and counting...
    </P>
  );
}

function CompanyCountWithData(componentProps) {
  return (
    <CompaniesContextConsumer>
      {({ companies }) => (
        <CompanyCount {...componentProps} companies={companies} />
      )}
    </CompaniesContextConsumer>
  );
}

export default CompanyCountWithData;
