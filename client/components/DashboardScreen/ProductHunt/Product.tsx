import * as React from 'react';
import classNames from 'classnames';
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
import { getIcon } from '../utils/weather';

const styles = (theme: Theme) =>
  createStyles({
    avatar: {
      width: 60,
      height: 60,
      borderRadius: 0
    },
    content: {
      marginRight: theme.spacing.unit * 2
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
      padding: '8px 12px 12px 12px'
    },
    upvoteText: {
      lineHeight: 1
    }
  });

interface Props extends WithStyles<typeof styles> {
  product?: Type.ProductHunt.Data['product'];
}

export default withStyles(styles)(({ classes, product }: Props) => {
  // const temperature = `${weather.temperature.toFixed(0)}°F`;
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar
          className={classes.avatar}
          src="https://images.pexels.com/photos/1051075/pexels-photo-1051075.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        />
      </ListItemAvatar>
      <ListItemText
        className={classes.content}
        primary={
          <Typography className={classes.title} variant="h6" color="textPrimary">
            Aiko Meet
          </Typography>
        }
        secondary={
          <React.Fragment>
            <Typography variant="caption" color="textSecondary">
              🤖 Video Chat in browser with AI Subtitles + Transcript 🤖
            </Typography>

            <Typography className={classes.topic} variant="overline" color="secondary">
              Productivity
            </Typography>
          </React.Fragment>
        }
      />
      <ListItemSecondaryAction>
        <div className={classes.upvoteContainer}>
          <ArrowDropUpIcon />
          <Typography className={classes.upvoteText} variant="button">
            280
          </Typography>
        </div>
      </ListItemSecondaryAction>
    </ListItem>
  );
});
