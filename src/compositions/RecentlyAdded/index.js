import React from 'react';
import Loadable from 'react-loadable';

import { Grid, Loading } from 'blocks';

import { CompaniesContextConsumer } from 'compositions/CompaniesContext';

const CompanyCard = Loadable({
  loader: () => import('../../components/CompanyCard'),
  loading: () => <Loading modifiers={['card']} />,
});

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
