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

import BackgroundImages from '../SettingScreen/images';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      // backgroundImage:
      //   "url('https://images.pexels.com/photos/34950/pexels-photo.jpg?cs=srgb&dl=abandoned-forest-hd-wallpaper-34950.jpg&fm=jpg')",
      backgroundImage: `url(${BackgroundImages[2]})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      padding: theme.spacing.unit * 1.5
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
    <div className={classes.root}>
      <Grid container direction="column" spacing={24}>
        <Grid item container direction="row" justify="space-between">
          <Grid item>
            {coords ? (
              <Query<Type.Weather.Data, Type.Weather.Variables>
                query={query.weather}
                variables={{ lat: coords.latitude, long: coords.longitude }}
              >
                {({ data: { weather }, loading }) => {
                  if (loading) return null;
                  return <Weather weather={weather} />;
                }}
              </Query>
            ) : (
              <></>
            )}
          </Grid>
          <Grid item>
            <Fab color="primary" aria-label="Settings" size="medium" onClick={handleModalControl}>
              <Settings />
            </Fab>
          </Grid>
        </Grid>
        <Grid item xs={12} />
      </Grid>
      <Modal open={modalOpen}>
        <SettingScreen onClose={handleModalControl} />
      </Modal>
    </div>
  );
});
