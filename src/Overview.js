import React, { Component } from 'react';
import MainContainer from './MainContainer';
import ProjectPanel from './ProjectPanel';
import TeamsPanel from './TeamsPanel';
import EmployeesPanel from './EmployeesPanel';

function Overview(props) {
    return (
      <MainContainer sidebar={props.title}>
        <h1 className="page-header">{props.title}</h1>
        <div className="row">
          <div className="col-md-4">
            <ProjectPanel title="Projects"/>
          </div>
          <div className="col-md-4">
            <TeamsPanel title="Teams"/>
          </div>
          <div className="col-md-4">
            <EmployeesPanel title="Employees"/>
          </div>
        </div>
      </MainContainer>
    );
}

export default Overview;
