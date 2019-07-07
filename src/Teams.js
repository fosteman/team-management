import React from 'react';
import MainContainer from './MainContainer';

const Teams = ({teams, title}) => (
    <MainContainer sidebar={title}>
        <h1 className={"page-header"}>{title}</h1>
        <table className={"table table-striped table-bordered"}>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Projects</th>
                    <th>Employees</th>
                    <th>Team Lead</th>
                </tr>
                {teams.map((team, index) => (
                        <tr>
                            <td key={index}>{team.TeamName}</td>
                            <td key={index}>{team.Projects.map((project, index) => <li key={index}>{project.ProjectName}</li>)}</td>
                            <td key={index}>{team.Employees.lenght} Employees</td>
                            <td key={index}>{team.TeamLead.FirstName} {team.TeamLead.LastName}</td>
                        </tr>
                    ))}
            </tbody>
        </table>
    </MainContainer>
);

export default Teams
