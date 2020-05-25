import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from '../containers/Landing.jsx';
import Login from '../containers/Login.jsx';
import Register from '../containers/Register.jsx';
import RegisterConfirm from '../containers/RegisterConfirm.jsx';
import Home from '../containers/Home.jsx'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Landing} />
      <Route exact path='/home' component={Home} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
      <Route exact path='/register-confirmation' component={RegisterConfirm} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
