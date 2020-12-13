import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Portfolio from 'src/pages/Portfolio';
import Project from 'src/pages/Project';
import Homepage from '../pages/Homepage';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Homepage} />
    <Route path="/portfolio" exact component={Portfolio} />
    <Route path="/portfolio/:id" exact component={Project} />
  </Switch>
);

export default Routes;
