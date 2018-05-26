import gql from 'graphql-tag';
import { curry } from 'lodash';
import React from 'react';
import { Query } from 'react-apollo';

import { Grid } from 'blocks';

import CompanyCard from 'components/CompanyCard';

function RecentlyAdded({ companies }) {
  const lastCompanies = companies.slice(-8).reverse();
  return (
    <Grid>
      {lastCompanies.map(company => (
        <Grid.Cell key={company.companyName}>
          <CompanyCard company={company} />
        </Grid.Cell>
      ))}
    </Grid>
  );
}

const companiesQuery = gql`
  query companies {
    companies @rest(type: "Company", path: "companies.json") {
      companyName
      industry
      website
      location
      description
    }
  }
`;

/**
 * A curried function that maps query values to the RecentlyAdded Component.
 *
 * @param {object} componentProps The props passed through to the component
 * @param {object} queryProps Values from the Query component
 * @property {object} queryProps.data the data returned from the query
 * @returns RecentlyAdded Component
 */
export const buildQueryChild = curry((componentProps, queryProps = {}) => {
  const { data: { companies = [] } = {} } = queryProps;
  return <RecentlyAdded {...componentProps} companies={companies} />;
});

/**
 * A RecentlyAdded Component wrapped in a GraphQL Query
 *
 * @param {object} componentProps The props provided to the component
 * @returns A RecentlyAdded Component wrapped in a GraphQL Query
 */
function RecentlyAddedWithQuery(componentProps) {
  const queryChild = buildQueryChild(componentProps);
  return <Query query={companiesQuery}>{queryChild}</Query>;
}

export default RecentlyAddedWithQuery;
