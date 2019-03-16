import * as React from 'react';
import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  Typography,
  Theme,
  withStyles,
  WithStyles,
  createStyles,
  Avatar
} from '@material-ui/core';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import * as Type from '../../../graphql/types';

const styles = (theme: Theme) =>
  createStyles({
    avatar: {
      width: 15,
      height: 15,
      borderRadius: 0
    },
    content: {
      marginRight: '50px'
    },
    listItem: {
      paddingBottom: 0
    },
    teamName: {
      fontSize: '0.9rem',
      lineHeight: 1.2
    },
    scoreTxt: {
      lineHeight: 1,
      marginTop: 3
    }
  });

interface Props extends WithStyles<typeof styles> {
  post: Type.ProductHunt.Post;
}

export default withStyles(styles)(({ classes, post }: Props) => {
  return (
    <div>
      <ListItem className={classes.listItem} key={post.id}>
        <ListItemAvatar>
          <Avatar className={classes.avatar} src={post.thumbnail.image_url} />
        </ListItemAvatar>
        <ListItemText
          className={classes.content}
          primary={
            <Typography className={classes.teamName} variant="h6" color="textPrimary">
              Knicks
            </Typography>
          }
        />
        <ListItemSecondaryAction>
          <Typography className={classes.scoreTxt} variant="button">
            91
          </Typography>
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem className={classes.listItem} key={post.id}>
        <ListItemAvatar>
          <Avatar className={classes.avatar} src={post.thumbnail.image_url} />
        </ListItemAvatar>
        <ListItemText
          className={classes.content}
          primary={
            <Typography className={classes.teamName} variant="h6" color="textPrimary">
              Suns
            </Typography>
          }
        />
        <ListItemSecondaryAction>
          <Typography className={classes.scoreTxt} variant="button">
            84
          </Typography>
        </ListItemSecondaryAction>
      </ListItem>
    </div>
  );
});
