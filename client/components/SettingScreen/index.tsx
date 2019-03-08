import * as React from 'react';
import { useState } from 'react';
import { Close } from '@material-ui/icons';
import {
  Fab,
  Grid,
  TextField,
  Theme,
  Typography,
  createStyles,
  withStyles,
  WithStyles
} from '@material-ui/core';
import { Mutation } from 'react-apollo';
// components
import DashboardOptions from './DashboardOptions';
import UserDetails from './UserDetails';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      // flexGrow: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      padding: theme.spacing.unit * 2,
      minHeight: '100vh'
    },
    title: {}
  });

interface Props extends WithStyles<typeof styles> {
  onClose: () => void;
}

export default withStyles(styles)(({ classes, onClose }: Props) => {
  const [name, setName] = useState('');

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleSettingsClose = () => {
    onClose();
  };

  return (
    <div className={classes.root}>
      <Grid container direction="column" spacing={40}>
        <Grid item container direction="row" justify="flex-end">
          <Fab color="primary" aria-label="Settings" size="medium" onClick={handleSettingsClose}>
            <Close />
          </Fab>
        </Grid>
        <Grid item xs={12} container justify="center">
          <Grid item xs={8} container direction="column" spacing={32}>
            <Grid item>
              <UserDetails />
            </Grid>
            <Grid item>
              <DashboardOptions />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
});
