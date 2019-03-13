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
  Button
} from '@material-ui/core';
import * as Type from '../../graphql/types';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 3
      // width: '85%'
    },
    btn: {
      marginTop: theme.spacing.unit * 4,
      textTransform: 'none'
    },
    title: {
      ...theme.mixins.gutters()
    },

    inputBox: {
      padding: '25px 0',
      paddingLeft: '10%',
      paddingRight: '20%'
    }
  });

interface Props extends WithStyles<typeof styles> {
  user?: Type.CurrentUser.Data['currentUser'];
}

export default withStyles(styles)(({ classes, user }: Props) => {
  const [name, setName] = useState(user.name);

  const maySave = () => {
    return !!name && name !== user.name;
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
          value={user.email}
        />
        <TextField
          id="standard-name"
          label="Name"
          placeholder="Tim Apple"
          margin="normal"
          fullWidth
          onChange={handleNameChange}
          InputLabelProps={{
            shrink: true
          }}
          value={name}
        />
        <Button
          variant="contained"
          size="medium"
          color="primary"
          className={classes.btn}
          disabled={!maySave()}
        >
          Save
        </Button>
      </div>
    </Paper>
  );
});
