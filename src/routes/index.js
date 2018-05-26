import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from 'components/Layout';

import Hiring from 'pages/Hiring';
import Home from 'pages/Home';

function Routes() {
  return (
    <Layout>
      <Switch>
        <Route path="/hiring" component={Hiring} />
        <Route path="/" component={Home} />
      </Switch>
    </Layout>
  );
}

export default Routes;
