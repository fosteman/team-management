import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideBar = (props) => (
    <List>
        <ListItem component={RouterLink} to="/" button>Overview</ListItem>
        <ListItem component={RouterLink} to="/projects" button>Projects</ListItem>
        <ListItem component={RouterLink} to="/teams" button>Teams</ListItem>
        <ListItem component={RouterLink} to="/employees" button>Employees</ListItem>
        <ListItem component={RouterLink} to="/team-interface" button>Team Interface</ListItem>
    </List>
);
export default SideBar
