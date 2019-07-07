import React from 'react';
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import {TableCell } from "@material-ui/core";
import TableBody from "@material-ui/core/TableBody";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Card from "@material-ui/core/Card";

const TeamsPanel = ({title, teams}) => (

    <Card>
        <CardHeader title={title} titleTypographyProps={{'variant': 'h3'}}/>
        <CardContent>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Employees</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {teams.map((team, index) => (
                        <TableRow>
                            <TableCell key={index}>{team.TeamName}</TableCell>
                            <TableCell key={index}>{team.Employees.lenght} Employees</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </CardContent>
        <CardActions>
            <Button href={"/teams"}/>
        </CardActions>
    </Card>
);
export default TeamsPanel
