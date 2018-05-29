import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from 'components/Layout';

import Hiring from 'pages/Hiring';
import Industries from 'pages/Industries';
import IndustryCompanies from 'pages/IndustryCompanies';
import Home from 'pages/Home';

function Routes() {
  return (
    <Layout>
      <Switch>
        <Route path="/hiring" component={Hiring} />
        <Route path="/industries/:industry" component={IndustryCompanies} />
        <Route path="/industries" component={Industries} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Layout>
  );
}

export default Routes;
