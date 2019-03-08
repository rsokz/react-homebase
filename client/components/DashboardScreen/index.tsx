import * as React from 'react';
import { useState } from 'react';
import { RouteProps } from 'react-router';
import {
  Fab,
  Modal,
  Grid,
  Typography,
  Theme,
  WithStyles,
  withStyles,
  createStyles
} from '@material-ui/core';
import { Settings } from '@material-ui/icons';
// graphql
import * as query from '../../graphql/queries';
import { CurrentUser } from '../../graphql/types';
import { Query } from 'react-apollo';
// components
import SettingScreen from '../SettingScreen';
import Weather from './Weather';
import ProductHunt from './ProductHunt';

import BackgroundImages from '../SettingScreen/images';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: 'block',
      // backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0) 30%), url(${
      //   BackgroundImages[2]
      // })`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      minHeight: '100vh',
      padding: theme.spacing.unit * 2
    },
    content: {
      padding: '0 40px',
      paddingTop: theme.spacing.unit * 5
    },
    greeting: {
      color: 'white',
      fontWeight: 300,
      fontSize: '2.3rem',
      textAlign: 'center'
    },
    modal: {
      overflow: 'scroll'
    }
  });

interface Props extends WithStyles<typeof styles>, RouteProps {}

export default withStyles(styles)(({ classes }: Props) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalControl = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <Query<CurrentUser.Data> query={query.currentUser}>
      {({ data: { currentUser } }) => {
        return (
          <main
            className={classes.root}
            style={
              currentUser && {
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0) 25%), url(${
                  BackgroundImages[currentUser.settings.backgroundImage]
                })`
              }
            }
          >
            <Grid container direction="column" spacing={24}>
              <Grid item container direction="row" justify="space-between">
                <Grid item xs={4}>
                  <Weather />
                </Grid>
                <Grid item xs={4}>
                  {currentUser && (
                    <Typography className={classes.greeting} variant="h4" gutterBottom>
                      Good Morning, {currentUser.name}.
                    </Typography>
                  )}
                </Grid>
                <Grid item xs={4} style={{ textAlign: 'right' }}>
                  <Fab
                    color="primary"
                    aria-label="Settings"
                    size="medium"
                    onClick={handleModalControl}
                  >
                    <Settings />
                  </Fab>
                </Grid>
              </Grid>
              <Grid item container justify="center" direction="row">
                <Grid
                  className={classes.content}
                  item
                  container
                  justify="center"
                  alignItems="center"
                  spacing={24}
                >
                  <Grid item>
                    <ProductHunt />
                  </Grid>
                  <Grid item />
                </Grid>
              </Grid>
            </Grid>
            <Modal className={classes.modal} open={modalOpen}>
              <SettingScreen onClose={handleModalControl} />
            </Modal>
          </main>
        );
      }}
    </Query>
  );
});
