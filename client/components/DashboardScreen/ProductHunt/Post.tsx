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
      width: 60,
      height: 60,
      borderRadius: 0
    },
    content: {
      marginRight: '50px'
    },
    title: {
      lineHeight: 1.2
    },
    topic: {
      border: '1px solid #f50057',
      borderRadius: '3px',
      lineHeight: 1,
      padding: '3px 5px',
      marginTop: '5px',
      fontSize: '0.6rem',
      display: 'inline-block'
    },
    upvoteContainer: {
      border: '1px solid #e8e8e8',
      borderRadius: '3px',
      padding: '8px 12px 12px 12px',
      alignItems: 'center'
    },
    upvoteText: {
      lineHeight: 1,
      textAlign: 'center'
    }
  });

interface Props extends WithStyles<typeof styles> {
  post: Type.ProductHunt.Post;
}

export default withStyles(styles)(({ classes, post }: Props) => {
  return (
    <ListItem
      button
      alignItems="flex-start"
      key={post.id}
      onClick={() => window.open(post.discussion_url, '_blank')}
    >
      <ListItemAvatar>
        <Avatar className={classes.avatar} src={post.thumbnail.image_url} />
      </ListItemAvatar>
      <ListItemText
        className={classes.content}
        primary={
          <Typography className={classes.title} variant="h6" color="textPrimary">
            {post.name}
          </Typography>
        }
        secondary={
          <React.Fragment>
            <Typography variant="caption" color="textSecondary">
              {post.tagline}
            </Typography>
            <Typography className={classes.topic} variant="overline" color="secondary">
              {post.topics[0].name}
            </Typography>
          </React.Fragment>
        }
      />
      <ListItemSecondaryAction>
        <div className={classes.upvoteContainer}>
          <ArrowDropUpIcon />
          <Typography className={classes.upvoteText} variant="button">
            {post.votes_count}
          </Typography>
        </div>
      </ListItemSecondaryAction>
    </ListItem>
  );
});
