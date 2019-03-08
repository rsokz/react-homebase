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
      // flexGrow: 1,
      // backgroundImage:
      //   "url('https://images.pexels.com/photos/34950/pexels-photo.jpg?cs=srgb&dl=abandoned-forest-hd-wallpaper-34950.jpg&fm=jpg')",
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0) 30%), url(${
        BackgroundImages[2]
      })`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      padding: theme.spacing.unit * 2,
      // overflow: 'auto',
      minHeight: '100vh'
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
    // <main className={classes.root}>
    <React.Fragment>
      <Grid className={classes.root} container direction="column" spacing={24}>
        <Grid item container direction="row" justify="space-between">
          <Grid item>
            {coords ? (
              <Query<Type.Weather.Data, Type.Weather.Variables>
                query={query.weather}
                variables={{ lat: coords.latitude, long: coords.longitude }}
              >
                {({ data: { weather }, loading }) => {
                  if (loading) return <div style={{ height: 139 }} />;
                  return <Weather weather={weather} />;
                }}
              </Query>
            ) : (
              <div style={{ height: 139 }} />
            )}
          </Grid>
          <Grid item>
            <Fab color="primary" aria-label="Settings" size="medium" onClick={handleModalControl}>
              <Settings />
            </Fab>
          </Grid>
        </Grid>
        <Grid className={classes.content} item xs={12} container justify="center" direction="row">
          <Grid item container justify="space-between" spacing={24}>
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
    </React.Fragment>
    // </main>
  );
});
