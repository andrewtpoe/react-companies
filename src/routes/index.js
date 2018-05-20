import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from 'components/Layout';

import Home from 'pages/Home';

function Routes() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Layout>
  );
}

export default Routes;
