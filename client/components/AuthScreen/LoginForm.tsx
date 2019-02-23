import * as React from 'react';
import { useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  WithStyles,
  createStyles,
  withStyles
} from '@material-ui/core';

const styles = createStyles({
  button: {
    background: 'linear-gradient(45deg, #fe6b8b 3%, #ff8e53 90%)',
    borderRadius: '3px',
    border: 0,
    color: 'white',
    height: '48px',
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, 0.3)',
    marginTop: '50px'
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '0px 50px',
    paddingTop: '5%'
  },
  typography: {
    height: '10',
    marginTop: '20'
  }
});

interface Props extends WithStyles<typeof styles> {
  onLogin: (email: string, pass: string) => void;
  errors: string[];
}

export default withStyles(styles)(({ classes, errors, onLogin }: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const maySignIn = () => {
    return !!(email && password);
  };

  const handleEmailChange = ({ target }) => {
    setEmail(target.value);
  };

  const handlePassChange = e => {
    setPassword(e.target.value);
  };

  const handleLogin = e => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <form className={classes.form} noValidate autoComplete="off" onSubmit={handleLogin}>
      <TextField
        id="standard-email-input"
        label="Email"
        type="email"
        name="email"
        autoComplete="email"
        margin="normal"
        fullWidth
        value={email}
        onChange={handleEmailChange}
      />
      <TextField
        id="standard-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        margin="normal"
        fullWidth
        value={password}
        onChange={handlePassChange}
      />
      <Button
        className={classes.button}
        type="submit"
        disabled={!maySignIn()}
        variant="contained"
        fullWidth
      >
        Login
      </Button>
      <Typography className={classes.typography} variant="button" gutterBottom color="error">
        {errors}
      </Typography>
    </form>
  );
});
