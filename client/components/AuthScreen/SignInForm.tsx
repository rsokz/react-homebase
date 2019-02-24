import * as React from 'react';
import { useState } from 'react';
import { TextField, Typography, WithStyles, createStyles, withStyles } from '@material-ui/core';
import AuthenticateButton from './AuthenticateButton';

const styles = createStyles({
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '3% 50px 0px'
  },
  typography: {
    height: '10px',
    marginTop: '20px'
  }
});

interface Props extends WithStyles<typeof styles> {
  onSignIn: (email: string, pass: string) => void;
  errors: string[];
}

export default withStyles(styles)(({ classes, errors, onSignIn }: Props) => {
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
    onSignIn(email, password);
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
      <AuthenticateButton style={{ marginTop: 55 }} disabled={!maySignIn()}>
        Login
      </AuthenticateButton>
      <Typography className={classes.typography} variant="button" gutterBottom color="error">
        {errors}
      </Typography>
    </form>
  );
});
