import * as React from 'react';
import styled from 'styled-components';
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
    marginTop: '40px'
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '0px 50px',
    paddingTop: '20px'
  }
});

interface Props extends WithStyles<typeof styles> {
  onLogin: (email: string, pass: string) => void;
  errors: string[];
}

export interface State {
  email: string;
  pass: string;
}

class LoginForm extends React.PureComponent<Props, State> {
  public readonly state: State = {
    email: '',
    pass: ''
  };

  public render() {
    const { email, pass } = this.state;
    const { errors, classes } = this.props;
    return (
      <form className={classes.form} noValidate autoComplete="off" onSubmit={this.handleLogin}>
        <TextField
          id="standard-email-input"
          label="Email"
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          fullWidth
          value={email}
          onChange={this.handleEmailChange}
        />
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          margin="normal"
          fullWidth
          value={pass}
          onChange={this.handlePassChange}
        />
        <Button className={classes.button} type="submit" variant="contained" fullWidth>
          Login
        </Button>
        <Typography
          variant="button"
          gutterBottom
          color="error"
          style={{ height: 10, marginTop: 20 }}
        >
          {errors}
        </Typography>
      </form>
    );
  }

  private handleEmailChange = ({ target }) => {
    this.setState({ email: target.value });
  };

  private handlePassChange = e => {
    this.setState({ pass: e.target.value });
  };

  private handleLogin = e => {
    const { onLogin } = this.props;
    const { email, pass } = this.state;
    e.preventDefault();
    onLogin(email, pass);
  };
}

export default withStyles(styles)(LoginForm);
