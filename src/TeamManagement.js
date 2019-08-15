import React, {useState, useEffect } from 'react';
import Overview from './Overview';
import Projects from './components/Projects';
import Teams from './components/Teams';
import Employees from './components/Employees';
import NotFound from './components/NotFound';
import TeamInterface from './components/teams-interface/TeamInterface';

import {Switch, Route, Redirect} from 'react-router-dom';
import axios from "axios";

const url = "https://fosteman-mongo-backend.herokuapp.com/";

function TeamManagement() {
    const [employees, setEmployees] = useState([]);
    const [teams, setTeams] = useState([]);
    const [projects, setProjects] = useState([]);

    // props for routed component
    const TeamInterfaceBundle = {
        Teams: teams,
        Employees: employees,
        Projects: projects,
        title: 'Team Interface'
    };


    useEffect(() => {
        console.log('TeamInterface is mount! Fetching backendAPI!');
        axios.get(url + 'employees')
            .then(res => setEmployees(res.data))
            .catch(err => console.error('error fetching employees!', err));

        axios.get(url + 'projects')
            .then(res => setProjects(res.data))
            .catch(err => console.error('error fetching projects', err));

        axios.get(url + 'teams')
            .then(res => setTeams(res.data))
            .catch(err => console.error('error fetching teams', err));
    }, []);

    return (
        <Switch>
            <Route exact path='/' render={() => <Overview data={{projects, teams, employees}} title="Overview" />} />

            <Route exact path='/team-management' render={() => <Redirect to={'/'} />} />
            <Route exact path='/projects' render={() => <Projects projects={projects} title="Projects" />} />
            <Route exact path='/teams' render={() => <Teams teams={teams} title="Teams" />} />
            <Route exact path='/employees' render={() => <Employees employees={employees} title="Employees" />} />
            <Route exact path='/team-interface' render={() => <TeamInterface data={TeamInterfaceBundle} title="Team Interface" />} />

            <Route render={() => <NotFound title="Not Found" />} />
        </Switch>
    );
}

export default TeamManagement
