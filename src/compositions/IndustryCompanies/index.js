import kebabCase from 'lodash.kebabcase';
import React from 'react';

import { Grid } from 'blocks';

import CompanyCard from 'components/CompanyCard';

import { CompaniesContextConsumer } from 'compositions/CompaniesContext';

function getIndustryCompanies(industry, companies) {
  return companies.reduce((acc, company) => {
    if (industry === kebabCase(company.industry)) {
      return acc.concat(company);
    }
    return acc;
  }, []);
}

function IndustryCompanies({
  companies,
  match: {
    params: { industry },
  },
}) {
  return (
    <Grid>
      {getIndustryCompanies(industry, companies).map(company => (
        <Grid.Cell key={company.companyName}>
          <CompanyCard company={company} />
        </Grid.Cell>
      ))}
    </Grid>
  );
}

function IndustryCompaniesWithData(componentProps) {
  return (
    <CompaniesContextConsumer>
      {({ companies }) => (
        <IndustryCompanies {...componentProps} companies={companies} />
      )}
    </CompaniesContextConsumer>
  );
}

export default IndustryCompaniesWithData;
