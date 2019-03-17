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
import { teamMap } from '../utils/nba';
import * as Type from '../../../graphql/types';

const styles = (theme: Theme) =>
  createStyles({
    avatar: {
      width: 15,
      height: 15,
      borderRadius: 0
    },
    content: {
      padding: '0 10px'
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
  game: Type.NBAGames.Game;
}

export default withStyles(styles)(({ classes, game }: Props) => {
  const teams = [game.vTeam, game.hTeam];
  return (
    <div>
      {Array.from({ length: 2 }, (_, k) => (
        <ListItem className={classes.listItem} key={teams[k].teamId}>
          <ListItemAvatar>
            <Avatar className={classes.avatar} src={teamMap[teams[k].triCode].icon} />
          </ListItemAvatar>
          <ListItemText
            className={classes.content}
            primary={
              <Typography className={classes.teamName} variant="h6" color="textPrimary">
                {teamMap[teams[k].triCode].name}
              </Typography>
            }
          />
          <ListItemSecondaryAction>
            <Typography className={classes.scoreTxt} variant="button">
              {teams[k].score}
            </Typography>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </div>
  );
});
