import gql from 'graphql-tag';
import { isEmpty } from 'lodash';
import React from 'react';
import { Query } from 'react-apollo';

import { Grid } from 'blocks';

import CompanyCard from 'components/CompanyCard';

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

const companiesQuery = gql`
  query companies {
    companies @rest(type: "Company", path: "companies.json") {
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
 * A Hiring Component wrapped in a GraphQL Query
 *
 * @param {object} componentProps The props provided to the component
 * @returns A Hiring Component wrapped in a GraphQL Query
 */
function HiringWithQuery(componentProps) {
  return (
    <Query query={companiesQuery}>
      {queryProps => {
        const { data: { companies = [] } = {} } = queryProps;
        return <Hiring {...componentProps} companies={companies} />;
      }}
    </Query>
  );
}

export default HiringWithQuery;
