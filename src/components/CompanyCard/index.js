import React from 'react';

import { Card } from 'blocks';

import { A, H3, Icon, P, Span } from 'elements';

function CompanyCard() {
  return (
    <Card>
      <Card.Flag>
        <Span>Hiring</Span>
      </Card.Flag>
      <Card.Section modifiers={['tall']}>
        <H3>Company Name</H3>
      </Card.Section>
      <Card.Divider />
      <Card.Section>
        <P modifiers={['short', 'textLight']}>
          <Icon className="fas fa-cogs" modifiers={['padRight']} />
          <Span modifiers={['fontSizeSM']}>Industry</Span>
        </P>
        <P modifiers={['short', 'textLight']}>
          <Icon className="fas fa-map-marker-alt" modifiers={['padRight']} />
          <Span modifiers={['fontSizeSM']}>Some City, SC, USA</Span>
        </P>
        <P modifiers={['short', 'textLight']}>
          <Icon className="fas fa-globe" modifiers={['padRight']} />
          <A href="/" modifiers={['fontSizeSM']}>
            company-website.com
          </A>
        </P>
        <P modifiers={['short', 'textLight']}>
          <Icon className="fab fa-github" modifiers={['padRight']} />
          <A href="/" modifiers={['fontSizeSM']}>
            GitHub
          </A>
        </P>
        <P modifiers={['short', 'textLight']}>
          <Icon className="fas fa-briefcase" modifiers={['padRight']} />
          <A href="/" modifiers={['fontSizeSM']}>
            Job at Company
          </A>
        </P>
      </Card.Section>
      <Card.Divider />
      <Card.Section modifiers={['flex_1', 'scrollY']}>
        <P modifiers={['fontSizeSM', 'textLight']}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </P>
      </Card.Section>
    </Card>
  );
}

export default CompanyCard;
