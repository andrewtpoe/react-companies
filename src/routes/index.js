import React from 'react';
import Loadable from 'react-loadable';
import { Route, Switch } from 'react-router-dom';

import { Loading } from 'blocks';

import Layout from 'components/Layout';

const Hiring = Loadable({
  loader: () => import('../pages/Hiring'),
  loading: Loading,
});
const Home = Loadable({
  loader: () => import('../pages/Home'),
  loading: Loading,
});
const Industries = Loadable({
  loader: () => import('../pages/Industries'),
  loading: Loading,
});
const IndustryCompanies = Loadable({
  loader: () => import('../pages/IndustryCompanies'),
  loading: Loading,
});

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
