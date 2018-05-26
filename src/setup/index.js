import PropTypes from 'prop-types';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter } from 'react-router-dom';

import AppThemeProvider from './AppThemeProvider';
import registerServiceWorker from './serviceWorker';

import Routes from 'routes';

import apolloClient from './apolloClient';

/**
 * SetupComponent is exported for use in testing. This component
 * includes all the setup required to enable mounting with Enzyme.
 * @param {object} props
 */
function SetupComponent({ children }) {
  return (
    <ApolloProvider client={apolloClient}>
      <AppThemeProvider>
        <BrowserRouter>{children}</BrowserRouter>
      </AppThemeProvider>
    </ApolloProvider>
  );
}

SetupComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

/**
 * App is the component actually rendered to display the complete and functional application.
 * It is the SetupComponent, plus not-test-env friendly provider components, plus the router.
 * @param {object} props
 */
function App() {
  return (
    <SetupComponent>
      <Routes />
    </SetupComponent>
  );
}

export { registerServiceWorker };

export default App;
