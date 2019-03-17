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
import { extractGameInfo, extractGameScore, teamMap } from '../utils/nba';
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
    gameBox: {
      borderRight: '1px solid rgba(0, 0, 0, 0.08)',
      paddingLeft: '0.7em',
      paddingRight: '0.7em'
    },
    gameInfoTxt: {
      fontSize: '0.7rem',
      fontWeight: 600,
      lineHeight: 1,
      marginTop: theme.spacing.unit,
      textAlign: 'center'
    },
    listItem: {
      paddingBottom: 0,
      paddingLeft: 0,
      paddingtop: 4
    },
    teamInfoTxt: {
      top: '60%'
    },
    teamNameTxt: {
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
  const winner = teams[0].score > teams[1].score ? 0 : 1;
  const gameDone = game.statusNum === 3;

  return (
    <div className={classes.gameBox}>
      {Array.from({ length: 2 }, (_, k) => (
        <ListItem className={classes.listItem} key={teams[k].teamId}>
          <ListItemAvatar>
            <Avatar className={classes.avatar} src={teamMap[teams[k].triCode].icon} />
          </ListItemAvatar>
          <ListItemText
            className={classes.content}
            primary={
              <Typography className={classes.teamNameTxt} variant="h6" color="textPrimary">
                {teamMap[teams[k].triCode].name}
              </Typography>
            }
          />
          <ListItemSecondaryAction className={classes.teamInfoTxt}>
            <Typography
              className={classes.scoreTxt}
              variant="button"
              style={
                game.statusNum === 2 || (gameDone && winner === k) ? { fontWeight: 800 } : undefined
              }
            >
              {extractGameScore(game, teams[k])}
            </Typography>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
      <Typography
        className={classes.gameInfoTxt}
        variant="h6"
        color="textPrimary"
        style={game.statusNum === 2 ? { color: '#DD0000' } : undefined}
      >
        {extractGameInfo(game)}
      </Typography>
    </div>
  );
});
