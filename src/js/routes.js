import React, { Component, Fragment } from 'react';

import { Switch, Route, DefaultRoute, withRouter } from 'react-router-dom';

import Home from './containers/Home';
import NotFound from './containers/NotFound';

const routes = (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/home" component={Home} />
    <Route path="*" component={NotFound} />
  </Switch>
)

export default routes;
