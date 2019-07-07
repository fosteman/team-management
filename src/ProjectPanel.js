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
import moment from "moment";

const ProjectPanel =({title,projects}) => (

    <Card>
        <CardHeader title={title} titleTypographyProps={{'variant':'h3'}}/>
        <CardContent>
            <Table>
                <TableHead>
                    <TableRow>Project</TableRow>
                    <TableRow>Active</TableRow>
                </TableHead>
                <TableBody>
                    {projects.map((project, index)=>(
                        <TableRow>

                            <TableCell key={index}> {project.ProjectName} </TableCell>
                            <TableCell key={index}> Active {moment().diff([project.ProjectStartDate], 'days')} days</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </CardContent>
        <CardActions>
            <Button  href={"/project"}/>
        </CardActions>
    </Card>
);



export default ProjectPanel;
