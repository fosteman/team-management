import React from 'react';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const NavBar = () => (
    <AppBar position="fixed">
        <Toolbar>
            <Typography variant="h1" noWrap>
                Team Management Portal
            </Typography>
        </Toolbar>
    </AppBar>
);

 /*   <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
            <div className="navbar-header">
                <a className="navbar-brand" href="/">Team Management Portal</a>
            </div>
        </div>
    </nav>
*/
export default NavBar
