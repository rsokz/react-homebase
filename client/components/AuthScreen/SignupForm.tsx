import * as React from 'react';
import { useState } from 'react';
import { TextField, Typography, WithStyles, createStyles, withStyles } from '@material-ui/core';
import AuthenticateButton from './AuthenticateButton';

const styles = createStyles({
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '2% 50px 0px'
  },
  typography: {
    height: '10px',
    marginTop: '20px'
  }
});

interface Props extends WithStyles<typeof styles> {
  onSignUp: (email: string, password: string, name: string) => void;
  errors: string[];
}

export default withStyles(styles)(({ classes, errors, onSignUp }: Props) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const maySignUp = () => {
    return !!(email && password && name);
  };

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handlePassChange = e => {
    setPassword(e.target.value);
  };

  const handleSignup = e => {
    e.preventDefault();
    onSignUp(email, password, name);
  };

  return (
    <form className={classes.form} noValidate autoComplete="off" onSubmit={handleSignup}>
      <TextField
        id="standard-name"
        label="First Name"
        margin="normal"
        fullWidth
        value={name}
        onChange={handleNameChange}
      />
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
      <AuthenticateButton style={{ marginTop: 39 }} disabled={!maySignUp()}>
        Sign Up
      </AuthenticateButton>
      <Typography className={classes.typography} variant="button" gutterBottom color="error">
        {errors}
      </Typography>
    </form>
  );
});
