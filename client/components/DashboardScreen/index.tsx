import * as React from 'react';
import { useState } from 'react';
import { Fab, Modal, WithStyles, withStyles, createStyles } from '@material-ui/core';
import { Settings } from '@material-ui/icons';
import SettingScreen from '../SettingScreen';
import { RouteProps } from 'react-router';

const styles = createStyles({
  root: {
    flexGrow: 1
  },
  paper: {
    backgroundColor: 'black',
    height: '100%'
  }
});

interface Props extends WithStyles<typeof styles>, RouteProps {}

export default withStyles(styles)(({ classes }: Props) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleSettingClick = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div className={classes.root}>
      <Fab color="primary" aria-label="Settings" onClick={handleSettingClick}>
        <Settings />
      </Fab>
      <Modal open={modalOpen}>
        <SettingScreen />
      </Modal>
    </div>
  );
});
