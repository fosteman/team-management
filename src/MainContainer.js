import React from 'react';
import NavBar from './NavBar';
import SideBar from './SideBar';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const MainContainer = ({sidebar, children}) => (
    <Paper>
        <NavBar/>
        <SideBar highlight={sidebar} />
        <Grid container spacing={3}>
            <Grid className="main" xs={6}>{children}</Grid>
        </Grid>
    </Paper>
);
export default MainContainer
