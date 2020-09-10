import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import SearchBar from './search-bar.component';
import Icons from './icons.component';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textAlign: "left",
    padding: '0 2vw',
  },
  items: {
    padding: '0 20vw',
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color='none'>
        <div className={classes.items}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Instagram
            </Typography>
            <SearchBar />
            <Icons />
          </Toolbar>
        </div>
      </AppBar>
    </div>
  );
}