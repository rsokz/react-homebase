import * as React from 'react';
import { useState } from 'react';
import { Fab, Modal, Grid, Theme, WithStyles, withStyles, createStyles } from '@material-ui/core';
import { Settings } from '@material-ui/icons';
import SettingScreen from '../SettingScreen';
import { RouteProps } from 'react-router';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundImage:
        "url('https://images.pexels.com/photos/34950/pexels-photo.jpg?cs=srgb&dl=abandoned-forest-hd-wallpaper-34950.jpg&fm=jpg')",
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      padding: theme.spacing.unit * 1.5
    }
  });

interface Props extends WithStyles<typeof styles>, RouteProps {}

export default withStyles(styles)(({ classes }: Props) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalControl = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div className={classes.root}>
      <Grid container direction="column" spacing={24}>
        <Grid item container direction="row" justify="flex-end">
          <Fab color="primary" aria-label="Settings" size="medium" onClick={handleModalControl}>
            <Settings />
          </Fab>
        </Grid>
        <Grid item xs={12} />
      </Grid>
      <Modal open={modalOpen}>
        <SettingScreen onClose={handleModalControl} />
      </Modal>
    </div>
  );
});
