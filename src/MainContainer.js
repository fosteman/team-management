import React from 'react';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import CssBaseline from '@material-ui/core/CssBaseline';
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(),
    },
}));

const MainContainer = ({children}) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline />
            <NavBar/>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{paper: classes.drawerPaper}}
                anchor="left"
            >
                <div className={classes.toolbar} />
                <Divider />
                <SideBar />
                <Divider />
            </Drawer>
            <main className={classes.content}>
                {children}
            </main>
        </div>
    );
};
export default MainContainer
