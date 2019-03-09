import * as React from 'react';
import { useState } from 'react';
import {
  Paper,
  TextField,
  Theme,
  Typography,
  WithStyles,
  createStyles,
  withStyles,
  Divider,
  Grid
} from '@material-ui/core';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 3
    },
    title: {
      ...theme.mixins.gutters()
    },
    inputBox: {
      padding: '50px 100px'
    }
  });

interface Props extends WithStyles<typeof styles> {}

export default withStyles(styles)(({ classes }: Props) => {
  const [name, setName] = useState('');

  const maySaveAccountDetails = () => {
    // return !!(email && password && name);
  };

  const handleNameChange = e => {
    setName(e.target.value);
  };

  return (
    <Paper className={classes.root} square elevation={1}>
      <Typography className={classes.title} variant="h5" gutterBottom>
        Account Details
      </Typography>
      <Divider light />
      <div className={classes.inputBox}>
        <TextField
          id="standard-email-input"
          label="Email"
          type="email"
          placeholder="email@domain.com"
          autoComplete="email"
          margin="normal"
          fullWidth
          InputProps={{
            readOnly: true
          }}
          value={'email'}
          // onChange={handleEmailChange}
        />
        <TextField
          id="standard-name"
          label="Name"
          placeholder="Tim Apple"
          margin="normal"
          fullWidth
          value={name}
          onChange={handleNameChange}
          InputLabelProps={{
            shrink: true
          }}
        />
      </div>
    </Paper>
  );
});
