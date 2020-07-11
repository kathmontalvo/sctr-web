import React from 'react';
import { BrowserRouter, Switch, Route, HashRouter } from 'react-router-dom';
import Landing from '../containers/Landing.jsx';
import Login from '../containers/Login.jsx';
import Register from '../containers/Register.jsx';
import RegisterConfirm from '../containers/RegisterConfirm.jsx';
import HomeUser from '../containers/Home/HomeUser.jsx'
import HomePlant from '../containers/Home/HomePlant.jsx'
import HomeCompany from '../containers/Home/HomeCompany.jsx'
import DashboardUser from '../containers/Dashboard/DashboardUser.jsx'
import DashboardPlant from '../containers/Dashboard/DashboardPlant.jsx'
import DashboardCompany from '../containers/Dashboard/DashboardCompany.jsx'

const Routes = () => (
  <HashRouter>
    <Route exact path='/' component={Landing} />
    <Route exact path='/home-user' component={HomeUser} />
    <Route exact path='/home-plant' component={HomePlant} />
    <Route exact path='/home-company' component={HomeCompany} />
    <Route exact path='/login' component={Login} />
    <Route exact path='/register' component={Register} />
    <Route exact path='/register-confirmation' component={RegisterConfirm} />
    <Route exact path='/dashboard-user' component={DashboardUser} />
    <Route exact path='/dashboard-plant' component={DashboardPlant} />
    <Route exact path='/dashboard-company' component={DashboardCompany} />
  </HashRouter>
);

export default Routes;
