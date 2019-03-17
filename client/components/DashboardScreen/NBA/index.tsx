import * as React from 'react';
import Lottie from 'react-lottie';
import { Query } from 'react-apollo';
import {
  Divider,
  List,
  Paper,
  Theme,
  WithStyles,
  createStyles,
  withStyles
} from '@material-ui/core';
import * as Type from '../../../graphql/types';
import * as query from '../../../graphql/queries';
import images from './images';
// components
import Game from './Game';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: '85%',
      height: '72%',
      overflow: 'auto',
      backgroundColor: 'rgba(255, 255, 255, 0.95);'
    },
    divider: {
      margin: theme.spacing.unit
    },
    gameBox: {
      width: '50%',
      float: 'left',
      display: 'inline'
    },
    header: {
      padding: '7px 17px',
      position: 'absolute'
    },
    list: {
      ...theme.mixins.gutters(),
      height: '90%',
      marginTop: '13%',
      overflow: 'auto'
    },
    loader: {
      display: 'flex',
      height: '85%',
      alignItems: 'center'
    }
  });

interface Props extends WithStyles<typeof styles> {}

export default withStyles(styles)(({ classes }: Props) => {
  return (
    <Paper className={classes.root} elevation={1}>
      <a className={classes.header} href="https://www.producthunt.com/" target="_blank">
        <img src={images.nbaLogo} width="81" height="55" />
      </a>
      <List className={classes.list}>
        <Query<Type.NBAGames.Data> query={query.nbaGames}>
          {({ data: { nba }, loading }) => {
            if (loading)
              return (
                <div className={classes.loader}>
                  <Lottie
                    options={{
                      loop: true,
                      autoplay: true,
                      animationData: require('./nba-loader.json'),
                      rendererSettings: {
                        preserveAspectRatio: 'xMidYMid slice'
                      }
                    }}
                    isClickToPauseDisabled={true}
                    height={200}
                    width={200}
                    isStopped={!loading}
                  />
                </div>
              );
            return nba.games.map(game => {
              return (
                <div className={classes.gameBox}>
                  <Game game={game} />
                  <Divider className={classes.divider} light />
                </div>
              );
            });
          }}
        </Query>
      </List>
    </Paper>
  );
});
