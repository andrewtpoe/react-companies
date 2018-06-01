import React from 'react';

import { Grid } from 'blocks';

import CompanyCard from 'components/CompanyCard';

import { CompaniesContextConsumer } from 'compositions/CompaniesContext';

function getRecentlyAddedCompanies(companies) {
  return companies.slice(-8).reverse();
}

function RecentlyAdded({ companies }) {
  return (
    <Grid>
      {getRecentlyAddedCompanies(companies).map(company => (
        <Grid.Cell key={company.companyName}>
          <CompanyCard company={company} />
        </Grid.Cell>
      ))}
    </Grid>
  );
}

function RecentlyAddedWithData(componentProps) {
  return (
    <CompaniesContextConsumer>
      {({ companies }) => (
        <RecentlyAdded {...componentProps} companies={companies} />
      )}
    </CompaniesContextConsumer>
  );
}

export default RecentlyAddedWithData;
