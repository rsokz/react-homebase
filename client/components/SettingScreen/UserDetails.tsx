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
import { ApolloError } from 'apollo-boost';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 3
      // width: '85%'
    },
    btn: {
      marginRight: theme.spacing.unit * 2,
      textTransform: 'none'
    },
    btnBox: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row',
      marginTop: theme.spacing.unit * 4
    },
    inputBox: {
      padding: '20px 0',
      paddingLeft: '7%',
      paddingRight: '20%'
    },
    successText: {
      color: 'green'
    },
    title: {
      ...theme.mixins.gutters()
    }
  });

interface Props extends WithStyles<typeof styles> {
  user?: Type.CurrentUser.Data['currentUser'];
  completed: boolean;
  onSave: (name: string) => void;
}

export default withStyles(styles)(({ classes, user, completed, onSave }: Props) => {
  const [name, setName] = useState(user.name);

  const maySave = () => {
    return !!name && name !== user.name;
  };

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleSave = () => {
    onSave(name);
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
        <div className={classes.btnBox}>
          <Button
            variant="contained"
            size="medium"
            color="primary"
            className={classes.btn}
            onClick={handleSave}
            disabled={!maySave()}
          >
            Save
          </Button>
          {completed && (
            <Typography className={classes.successText} variant="h6">
              Saved!
            </Typography>
          )}
        </div>
      </div>
    </Paper>
  );
});
