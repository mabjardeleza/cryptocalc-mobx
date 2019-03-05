import React from 'react';
import { Route, Router, Switch, withRouter } from 'react-router-dom';
import history from './history';

import CryptoPageContainer from './containers/CryptoPageContainer';

export default () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={withRouter(CryptoPageContainer)} />
    </Switch>
  </Router>
);
