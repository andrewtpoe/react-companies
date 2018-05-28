import gql from 'graphql-tag';
import React from 'react';
import { Query } from 'react-apollo';

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

const companiesQuery = gql`
  query companies {
    companies @rest(type: "Company", path: "companies.json") {
      companyName
    }
  }
`;

/**
 * A CompanyCount Component wrapped in a GraphQL Query
 *
 * @param {object} componentProps The props provided to the component
 * @returns A CompanyCount Component wrapped in a GraphQL Query
 */
function CompanyCountWithQuery(componentProps) {
  return (
    <Query query={companiesQuery}>
      {queryProps => {
        const { data: { companies = [] } = {} } = queryProps;
        return <CompanyCount {...componentProps} companies={companies} />;
      }}
    </Query>
  );
}

export default CompanyCountWithQuery;
