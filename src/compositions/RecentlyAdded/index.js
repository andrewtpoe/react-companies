import gql from 'graphql-tag';
import React from 'react';
import { Query } from 'react-apollo';

import { Grid } from 'blocks';

import CompanyCard from 'components/CompanyCard';

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

const companiesQuery = gql`
  query companies {
    companies @rest(type: "[Company]", path: "companies.json") {
      companyName
      industry
      website
      github
      location
      description
      jobs {
        title
        url
      }
    }
  }
`;

/**
 * A RecentlyAdded Component wrapped in a GraphQL Query
 *
 * @param {object} componentProps The props provided to the component
 * @returns A RecentlyAdded Component wrapped in a GraphQL Query
 */
function RecentlyAddedWithQuery(componentProps) {
  return (
    <Query query={companiesQuery}>
      {queryProps => {
        const { data: { companies = [] } = {} } = queryProps;
        return <RecentlyAdded {...componentProps} companies={companies} />;
      }}
    </Query>
  );
}

export default RecentlyAddedWithQuery;
