
import React, { Component } from 'react';
import Overview from './Overview';
import Projects from './Projects';
import Teams from './Teams';
import Employees from './Employees';
import NotFound from './NotFound';
import {Switch, Route} from 'react-router-dom'; 

class TeamManagement extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' render={() => (
          <Overview title="Overview" />
        )} />
        <Route exact path='/projects' render={() => (
          <Projects title="Projects" />
        )} />
        <Route exact path='/teams' render={() => (
          <Teams title="Teams" />
        )} />
        <Route exact path='/employees' render={() => (
          <Employees title="Employees" />
        )} />
        <Route render={() => (
          <NotFound title="Not Found" />
        )} />
      </Switch>
    );
  }
}

export default TeamManagement;
