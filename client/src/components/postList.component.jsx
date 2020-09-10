import React from 'react';
import Post from './post.component'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    padding: '0 25vw',
    margin: '2vh 1vw'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function PostList() {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <Post />
            <Post />
        </div>
    );
}