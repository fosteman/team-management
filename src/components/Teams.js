import React from 'react';
import MainContainer from '../MainContainer';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Typography} from "@material-ui/core";

const Teams = ({teams, title}) => (
    <MainContainer sidebar={title}>
        < Typography variant={'h1'}>{title}</Typography>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Projects</TableCell>
                    <TableCell>Employees</TableCell>
                    <TableCell>Team Lead</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {teams.map((team, index) => (
                        <TableRow>
                            <TableCell key={index}>{team.TeamName}</TableCell>
                            <TableCell key={index}>{team.Projects.map((project, index) => <li key={index}>{project.ProjectName}</li>)}</TableCell>
                            <TableCell key={index}>{team.Employees.lenght} Employees</TableCell>
                            <TableCell key={index}>{team.TeamLead.FirstName} {team.TeamLead.LastName}</TableCell>
                        </TableRow>
                    ))}
            </TableBody>
        </Table>
    </MainContainer>
);

export default Teams
