import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import CommentIcon from '@material-ui/icons/Comment';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Telegram';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
  container: {
      margin: '5vh 2vw',
  }
});

export default function Post() {
  const classes = useStyles();
  return (
    <Paper className={classes.container}>
    <Card className={classes.root}>
        <CardHeader avatar={ <Avatar aria-label="recipe" className={classes.avatar}>R</Avatar>}
        action={
            <IconButton aria-label="settings">
            <MoreVertIcon />
            </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 9, 2020"
        />
        <CardMedia
        className={classes.media}
        image="https://images.unsplash.com/photo-1599477167833-c0215a3df921?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        title="Paella dish"
        />
        <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
                This impressive paella is a perfect party dish and a fun meal to cook together with your
                guests. Add 1 cup of frozen peas along with the mussels, if you like.
            </Typography>
        </CardContent>

        <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
            <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
            <ShareIcon />
        </IconButton>
        <IconButton aria-label="comment">
            <CommentIcon />
        </IconButton>
        </CardActions>
    </Card>
    </Paper>
  );
}
