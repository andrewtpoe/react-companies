import compact from 'lodash.compact';
import throttle from 'lodash.throttle';
import React, { Component } from 'react';

import { TopNav as StyledTopNav } from 'blocks';

import { H1, Icon, Logo } from 'elements';

const DEBOUNCE_TIME_MS = 250;

class TopNav extends Component {
  state = { showLinks: false };

  componentWillMount() {
    this.resizeEventListener = throttle(
      this.resizeEventHandler,
      DEBOUNCE_TIME_MS,
    );
  }

  componentDidMount() {
    window.addEventListener('resize', this.resizeEventListener);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeEventListener);
  }

  resizeEventHandler = () => {
    if (this.state.showLinks && window.innerWidth >= 768) {
      this.setState({ showLinks: false });
    }
  };

  toggleShowLinks = () => {
    this.setState({ showLinks: !this.state.showLinks });
  };

  render() {
    const showLinks = this.state.showLinks;

    return (
      <StyledTopNav modifiers={compact([showLinks && 'height100'])}>
        <StyledTopNav.LinkList>
          <StyledTopNav.LinkListItem>
            <StyledTopNav.Link
              to="/"
              modifiers={['bold', 'fontSizeXL']}
              onClick={() => this.setState({ showLinks: false })}
            >
              <Logo modifiers={['padRight']} />
              <H1>React Companies</H1>
            </StyledTopNav.Link>
          </StyledTopNav.LinkListItem>
          <StyledTopNav.LinkListItem>
            <StyledTopNav.Link
              to="/industries"
              modifiers={['textWhite']}
              onClick={() => this.setState({ showLinks: false })}
            >
              Industries
            </StyledTopNav.Link>
          </StyledTopNav.LinkListItem>
          <StyledTopNav.LinkListItem>
            <StyledTopNav.Link
              to="/hiring"
              modifiers={['textWhite']}
              onClick={() => this.setState({ showLinks: false })}
            >
              Hiring
            </StyledTopNav.Link>
          </StyledTopNav.LinkListItem>
          <StyledTopNav.LinkListItem modifiers={['screenXSOnly']}>
            <StyledTopNav.A
              alt="GitHub for React Companies"
              href="https://github.com/andrewtpoe/react-companies"
              modifiers={['textWhite']}
              onClick={() => this.setState({ showLinks: false })}
              rel="noopener"
              type="_blank"
            >
              GitHub
            </StyledTopNav.A>
          </StyledTopNav.LinkListItem>
        </StyledTopNav.LinkList>
        <StyledTopNav.LinkList>
          <StyledTopNav.LinkListItem modifiers={['screenSMUp']}>
            <StyledTopNav.A
              alt="GitHub for React Companies"
              href="https://github.com/andrewtpoe/react-companies"
              modifiers={['textWhite']}
              rel="noopener"
              type="_blank"
            >
              <Icon className="fab fa-lg fa-github" />
            </StyledTopNav.A>
          </StyledTopNav.LinkListItem>
          <StyledTopNav.LinkListItem modifiers={['middle', 'screenXSOnly']}>
            <StyledTopNav.Button
              aria-label="Toggle Menu"
              modifiers={['textWhite']}
              onClick={this.toggleShowLinks}
            >
              <Icon className="fas fa-bars" />
            </StyledTopNav.Button>
          </StyledTopNav.LinkListItem>
        </StyledTopNav.LinkList>
      </StyledTopNav>
    );
  }
}

export default TopNav;
