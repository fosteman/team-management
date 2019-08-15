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

const EmployeesPanel = ({style, title,employees}) => (
    <Card>
        <CardHeader title={title} titleTypographyProps={{'variant':'h3'}}/>
        <CardContent style={style}>
            <Table >
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Position</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {employees.map((employee, index) => (
                        <TableRow>
                            <TableCell key={index}>{employee.FirstName} {employee.LastName} </TableCell>
                            <TableCell key={index}>{employee.Position.PositionName}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </CardContent>
        <CardActions>
            <Button href={"/employees"}/>
        </CardActions>
    </Card>
);

export default EmployeesPanel
