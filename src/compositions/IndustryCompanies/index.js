import gql from 'graphql-tag';
import { kebabCase } from 'lodash';
import React from 'react';
import { Query } from 'react-apollo';

import { Grid } from 'blocks';

import CompanyCard from 'components/CompanyCard';

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
 * A IndustryCompanies Component wrapped in a GraphQL Query
 *
 * @param {object} componentProps The props provided to the component
 * @returns A IndustryCompanies Component wrapped in a GraphQL Query
 */
function IndustryCompaniesWithQuery(componentProps) {
  return (
    <Query query={companiesQuery}>
      {queryProps => {
        const { data: { companies = [] } = {} } = queryProps;
        return <IndustryCompanies {...componentProps} companies={companies} />;
      }}
    </Query>
  );
}

export default IndustryCompaniesWithQuery;
