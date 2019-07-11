import React from 'react';
import MainContainer from './MainContainer.js'
import Typography from "@material-ui/core/Typography";

const NotFound = ({title}) => (
    <MainContainer>
        <Typography variant={'h2'}>{title}</Typography>
        Page Not Found
    </ MainContainer>
);

export default NotFound;
