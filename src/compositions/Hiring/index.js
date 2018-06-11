import isEmpty from 'lodash.isempty';
import React from 'react';

import { Grid } from 'blocks';

import CompanyCard from 'components/CompanyCard';

import { CompaniesContextConsumer } from 'compositions/CompaniesContext';

function getHiringCompanies(companies) {
  return companies.reduce((acc, company) => {
    if (isEmpty(company.jobs)) {
      return acc;
    }
    return acc.concat(company);
  }, []);
}

function Hiring({ companies }) {
  return (
    <Grid>
      {getHiringCompanies(companies).map(company => (
        <Grid.Cell key={company.companyName}>
          <CompanyCard company={company} />
        </Grid.Cell>
      ))}
    </Grid>
  );
}

function HiringWithData(componentProps) {
  return (
    <CompaniesContextConsumer>
      {({ companies }) => <Hiring {...componentProps} companies={companies} />}
    </CompaniesContextConsumer>
  );
}

export default HiringWithData;
