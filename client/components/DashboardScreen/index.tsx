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
import withWidth, { WithWidth, isWidthDown } from '@material-ui/core/withWidth';
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
      paddingTop: theme.spacing.unit * 6
    },
    greeting: {
      color: 'white',
      fontWeight: 300,
      fontSize: '2.3rem',
      textAlign: 'center',
      [theme.breakpoints.down('md')]: {
        marginTop: 25
      }
    },
    modal: {
      overflow: 'scroll'
    }
  });

interface Props extends WithStyles<typeof styles>, WithWidth, RouteProps {}

export default withWidth()(
  withStyles(styles)(({ classes, width }: Props) => {
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
                  <Grid item sm={3} xs={6}>
                    <Weather />
                  </Grid>
                  {isWidthDown('xs', width) ? (
                    <Grid container item sm={3} xs={6} justify="flex-end">
                      <Fab
                        color="primary"
                        aria-label="Settings"
                        size="medium"
                        onClick={handleModalControl}
                      >
                        <Settings />
                      </Fab>
                    </Grid>
                  ) : (
                    <Grid item sm={6} xs={12}>
                      {currentUser && (
                        <Typography className={classes.greeting} variant="h4" gutterBottom>
                          Good Morning, {currentUser.name}.
                        </Typography>
                      )}
                    </Grid>
                  )}
                  {isWidthDown('xs', width) ? (
                    <Grid item sm={6} xs={12}>
                      {currentUser && (
                        <Typography className={classes.greeting} variant="h4" gutterBottom>
                          Good Morning, {currentUser.name}.
                        </Typography>
                      )}
                    </Grid>
                  ) : (
                    <Grid container item sm={3} xs={12} justify="flex-end">
                      <Fab
                        color="primary"
                        aria-label="Settings"
                        size="medium"
                        onClick={handleModalControl}
                      >
                        <Settings />
                      </Fab>
                    </Grid>
                  )}
                </Grid>
                <Grid item container justify="center" direction="row">
                  <Grid
                    className={classes.content}
                    item
                    xs={12}
                    container
                    justify="space-between"
                    alignItems="center"
                    spacing={isWidthDown('sm', width) && 40}
                  >
                    <Grid container item md={6} sm={12} justify="center">
                      <ProductHunt />
                    </Grid>
                    <Grid container item md={6} sm={12} justify="center">
                      <ProductHunt />
                    </Grid>
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
  })
);
