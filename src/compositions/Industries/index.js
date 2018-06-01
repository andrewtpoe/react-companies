import gql from 'graphql-tag';
import { kebabCase, toLower, toUpper } from 'lodash';
import React from 'react';
import { Query } from 'react-apollo';

import { H3, Li, Link, Ul } from 'elements';

function groupIndustries(companies) {
  return companies.reduce((acc, company) => {
    const firstLetter = toLower(company.industry[0]);
    if (acc[firstLetter]) {
      acc[firstLetter].concat(company.industry);
      return acc;
    }
    acc[firstLetter] = [company.industry];
    return acc;
  }, {});
}

function sortIndustries(industries) {
  return Object.keys(industries)
    .sort()
    .reduce(
      (acc, industryKey) =>
        acc.concat({
          label: toUpper(industryKey),
          industries: industries[industryKey].sort(),
        }),
      [],
    );
}

function Industries({ companies }) {
  const sortedIndustryGroups = sortIndustries(groupIndustries(companies));
  return (
    <Ul>
      {sortedIndustryGroups.map(({ label, industries }) => (
        <Li key={label}>
          <H3 modifiers={['light', 'pad']}>{label}</H3>
          <Ul>
            {industries.map(industry => (
              <Li key={industry}>
                <Link to={`/industries/${kebabCase(industry)}`}>
                  {industry}
                </Link>
              </Li>
            ))}
          </Ul>
        </Li>
      ))}
    </Ul>
  );
}

const companiesQuery = gql`
  query companies {
    companies @rest(type: "Company", path: "companies.json") {
      industry
    }
  }
`;

/**
 * A Industries Component wrapped in a GraphQL Query
 *
 * @param {object} componentProps The props provided to the component
 * @returns A Industries Component wrapped in a GraphQL Query
 */
function HiringWithQuery(componentProps) {
  return (
    <Query query={companiesQuery}>
      {queryProps => {
        const { data: { companies = [] } = {} } = queryProps;
        return <Industries {...componentProps} companies={companies} />;
      }}
    </Query>
  );
}

export default HiringWithQuery;
