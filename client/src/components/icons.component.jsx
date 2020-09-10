import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import ChatIcon from '@material-ui/icons/Chat';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

export default function Icons() {
    const classes = useStyles();
    return (
        <Grid className={classes.root}> 
          <HomeIcon fontSize="large" color='secondary'/>
          <ChatIcon fontSize="large"/>
          <AccountCircleIcon fontSize="large"/>
        </Grid> 
    );
};
    