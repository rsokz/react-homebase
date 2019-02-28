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
  Grid
} from '@material-ui/core';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2
    },
    title: {
      marginBottom: theme.spacing.unit * 2
    },
    underline: {
      height: '1px',
      backgroundColor: 'rgb(232, 232, 232)',
      marginBottom: theme.spacing.unit * 2
    }
  });

interface Props extends WithStyles<typeof styles> {}

export default withStyles(styles)(({ classes }: Props) => {
  const [name, setName] = useState('');

  const maySaveSettings = () => {
    // return !!(email && password && name);
  };

  const handleNameChange = e => {
    setName(e.target.value);
  };

  return (
    <Paper className={classes.root} square elevation={1}>
      <Typography variant="title" gutterBottom>
        My Details
      </Typography>
      <div className={classes.underline} />
      <TextField
        className={classes.title}
        id="standard-name"
        label="Name"
        margin="normal"
        fullWidth
        value={name}
        onChange={handleNameChange}
        InputLabelProps={{
          shrink: true
        }}
      />
    </Paper>
  );
});
