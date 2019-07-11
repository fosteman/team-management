import React from 'react'
import MainContainer from './MainContainer'
import ProjectPanel from './ProjectPanel'
import TeamsPanel from './TeamsPanel'
import EmployeesPanel from './EmployeesPanel'
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid";

const tableStyle = {
    maxHeight: '480px',
    overflow: 'auto'
};

const Overview = ({data, title}) => (
    <MainContainer sidebar={title}>
        <Typography variant={'h2'}>{title}</Typography>
            <Grid container spacing={3} >
                <Grid item xs={4}>
                    <ProjectPanel style={tableStyle} projects={data.projects} title="Projects"/>
                </Grid>
                <Grid item xs={4} >
                    <TeamsPanel style={tableStyle} teams={data.teams} title="Teams"/>
                </Grid>
                <Grid item xs={4}>
                    <EmployeesPanel style={tableStyle} employees={data.employees} title="Employees"/>
                </Grid>
        </Grid>
    </MainContainer>
);
export default Overview
