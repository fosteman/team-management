import React, { Component, useState, useEffect } from 'react';
import Overview from './Overview';
import Projects from './Projects';
import Teams from './Teams';
import Employees from './Employees';
import NotFound from './NotFound';
import {Switch, Route} from 'react-router-dom';
const url = "https://fosteman-mongo-backend.herokuapp.com/"; //TODO make use of state manager: Context API / Redux / Relay / Apollo Client

class TeamManagement extends Component {
    //state management
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
