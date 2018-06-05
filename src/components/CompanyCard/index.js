import { isEmpty } from 'lodash';
import React from 'react';

import { Card } from 'blocks';

import { A, H3, Icon, P, Span } from 'elements';

function CompanyCard({ company }) {
  const isHiring = !isEmpty(company.jobs);

  return (
    <Card>
      {isHiring && (
        <Card.Flag>
          <Span>Hiring</Span>
        </Card.Flag>
      )}
      <Card.Section modifiers={['tall']}>
        <H3>{company.companyName}</H3>
      </Card.Section>
      <Card.Divider />
      <Card.Section>
        <P modifiers={['short', 'textLight']}>
          <Icon className="fas fa-cogs" modifiers={['padRight']} />
          <Span modifiers={['fontSizeSM']}>{company.industry}</Span>
        </P>
        <P modifiers={['short', 'textLight']}>
          <Icon className="fas fa-map-marker-alt" modifiers={['padRight']} />
          <Span modifiers={['fontSizeSM']}>{company.location}</Span>
        </P>
        <P modifiers={['short', 'textLight']}>
          <Icon className="fas fa-globe" modifiers={['padRight']} />
          <A
            href={company.website}
            modifiers={['fontSizeSM']}
            rel="noopener"
            type="_blank"
          >
            {company.website}
          </A>
        </P>
        <P modifiers={['short', 'textLight']}>
          <Icon className="fab fa-github" modifiers={['padRight']} />
          <A
            href={company.github}
            modifiers={['fontSizeSM']}
            rel="noopener"
            type="_blank"
          >
            GitHub
          </A>
        </P>
        {isHiring &&
          (company.jobs || []).map(job => (
            <P key={job.title} modifiers={['short', 'textLight']}>
              <Icon className="fas fa-briefcase" modifiers={['padRight']} />
              <A
                href={job.url}
                modifiers={['fontSizeSM']}
                rel="noopener"
                type="_blank"
              >
                {job.title}
              </A>
            </P>
          ))}
      </Card.Section>
      <Card.Divider />
      <Card.Section modifiers={['flex_1', 'scrollY']}>
        <P modifiers={['fontSizeMD', 'textLight']}>{company.description}</P>
      </Card.Section>
    </Card>
  );
}

export default CompanyCard;
