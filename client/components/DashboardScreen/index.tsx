import * as React from 'react';
import { useState } from 'react';
import { RouteProps } from 'react-router';
import { Query } from 'react-apollo';
import { Fab, Modal, Grid, Theme, WithStyles, withStyles, createStyles } from '@material-ui/core';
import { Settings } from '@material-ui/icons';
// graphql
import * as Type from '../../graphql/types';
import * as query from '../../graphql/queries';
// hooks
import useLocation from './hooks/useLocation';
// components
import SettingScreen from '../SettingScreen';
import Weather from './Weather';
import ProductHunt from './ProductHunt';

import BackgroundImages from '../SettingScreen/images';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: 'block',
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0) 30%), url(${
        BackgroundImages[2]
      })`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      minHeight: '100vh',
      padding: theme.spacing.unit * 2
    },
    content: {
      padding: '16px 20px'
    }
  });

interface Props extends WithStyles<typeof styles>, RouteProps {}

export default withStyles(styles)(({ classes }: Props) => {
  const [coords, errMessage] = useLocation();
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalControl = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <main className={classes.root}>
      <Grid container direction="column" spacing={24}>
        <Grid item container direction="row" justify="space-between">
          <Grid item>
            <Weather />
          </Grid>
          <Grid item>
            <Fab color="primary" aria-label="Settings" size="medium" onClick={handleModalControl}>
              <Settings />
            </Fab>
          </Grid>
        </Grid>
        <Grid className={classes.content} item container justify="center" direction="row">
          <Grid item container justify="space-between" alignItems="center" spacing={24}>
            <Grid item>
              <ProductHunt />
            </Grid>
            <Grid item />
          </Grid>
        </Grid>
      </Grid>
      <Modal open={modalOpen}>
        <SettingScreen onClose={handleModalControl} />
      </Modal>
    </main>
  );
});
