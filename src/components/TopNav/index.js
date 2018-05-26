import React from 'react';

import { TopNav as StyledTopNav } from 'blocks';

import { Icon, Logo } from 'elements';

function TopNav() {
  return (
    <StyledTopNav>
      <StyledTopNav.LinkList>
        <StyledTopNav.LinkListItem>
          <StyledTopNav.Link to="/" modifiers={['bold', 'fontSizeXL']}>
            <Logo modifiers={['padRight']} />
            React Companies
          </StyledTopNav.Link>
        </StyledTopNav.LinkListItem>
        <StyledTopNav.LinkListItem>
          <StyledTopNav.Link to="/hiring" modifiers={['textWhite']}>
            Hiring
          </StyledTopNav.Link>
        </StyledTopNav.LinkListItem>
      </StyledTopNav.LinkList>
      <StyledTopNav.LinkList>
        <StyledTopNav.LinkListItem>
          <StyledTopNav.A
            href="https://github.com/andrewtpoe/react-companies"
            modifiers={['textWhite']}
          >
            <Icon className="fab fa-lg fa-github" />
          </StyledTopNav.A>
        </StyledTopNav.LinkListItem>
      </StyledTopNav.LinkList>
    </StyledTopNav>
  );
}

export default TopNav;
