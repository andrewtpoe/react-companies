import React from 'react';
import Loadable from 'react-loadable';
import { Route, Switch } from 'react-router-dom';

import { Loading } from 'blocks';

import Layout from 'components/Layout';

import { getRootPath } from 'utils';

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
        <Route path={`${getRootPath()}/hiring`} component={Hiring} />
        <Route
          path={`${getRootPath()}/industries/:industry`}
          component={IndustryCompanies}
        />
        <Route path={`${getRootPath()}/industries`} component={Industries} />
        <Route exact path={`${getRootPath()}/`} component={Home} />
      </Switch>
    </Layout>
  );
}

export default Routes;
