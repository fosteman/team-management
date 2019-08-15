import React from 'react';
import MainContainer from '../MainContainer';
import moment from 'moment';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';

const Employees = ({employees, title}) => (
    <MainContainer sidebar={title}>
        <Typography variant='h2'>{title}</Typography>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name & Position</TableCell>
                    <TableCell>Address</TableCell>
                    <TableCell>Phone #</TableCell>
                    <TableCell>Hire Date</TableCell>
                    <TableCell>Salary Bonus</TableCell>
                </TableRow>
            </TableHead>

            <TableBody>
                {employees.map((employee, index) => (
                    <TableRow>
                        <TableCell key={index}>{employee.FirstName} {employee.LastName}-{employee.Position.PositionName}</TableCell>
                        <TableCell key={index}>{employee.AddressStreet}, {employee.AddressCity}, {employee.AddressState}, {employee.AddressZip}</TableCell>
                        <TableCell key={index}>{employee.PhoneNum} ext {employee.Extension}</TableCell>
                        <TableCell key={index}>{moment(employee.HireDate).format('LL')}</TableCell>
                        <TableCell key={index}>${employee.SalaryBonus}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </MainContainer>
);

export default Employees
