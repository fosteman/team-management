import React from 'react';
import MainContainer from './MainContainer';
import moment from 'moment';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';

const Projects = ({projects, title}) => (
    <MainContainer sidebar={title}>
        < Typography variant={'h2'}>{title}</Typography>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Start Date</TableCell>
                    <TableCell>End Date</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {projects.map((project, index) => (
                    <TableRow>
                        <TableCell key={index}> {project.ProjectName} </TableCell>
                        <TableCell key={index}>{project.ProjectDescription}</TableCell>
                        <TableCell key={index}>{moment(project.ProjectStartDate).format('LL')}</TableCell>
                        <TableCell key={index}>{(project.ProjectEndDate == null ? 'n/a' : moment(project.ProjectEndDate).format('LL'))}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </MainContainer>
);
export default Projects
