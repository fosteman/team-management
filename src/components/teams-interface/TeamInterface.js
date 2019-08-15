import React from 'react'

import Interface from './Interface'

import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import { createMuiTheme } from '@material-ui/core/styles';

import MainContainer from "../../MainContainer";
import Typography from "@material-ui/core/Typography";

// upstream
const url = "https://fosteman-mongo-backend.herokuapp.com/";

function TeamInterface(props) {
  const {Teams, Employees, Projects, title} = props.data;

  return (
      <MainContainer sidebar={title}>
        <Typography variant='h2'>{title}</Typography>
        <Container>
            <Box display="flex"
                 alignContent="flex-start"
                 flexDirection="row"
                 flexWrap="wrap"
            >

            {Teams ? Teams.map(team =>
                      <Interface
                          key={team._id}
                          Team={team}
                          Employees={Employees}
                          Projects={Projects}
                          Url={url}
                      />
                  ) : <p>Loading</p>
            }
              </Box>
        </Container>
      </MainContainer>
    );
}
export default TeamInterface
