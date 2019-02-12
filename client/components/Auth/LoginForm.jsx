import React from "react";
import styled from "styled-components";
import { TextField, Button } from "@material-ui/core";

class LoginForm extends React.PureComponent {
  state = {
    email: "",
    pass: ""
  };

  render() {
    const { email, pass } = this.state;
    return (
      <Form noValidate autoComplete="off" onSubmit={this.handleLogin}>
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
        <StyledButton type="submit" variant="contained" fullWidth>
          Login
        </StyledButton>
      </Form>
    );
  }

  handleEmailChange = e => {
    this.setState({ email: e.target.value });
  };

  handlePassChange = e => {
    this.setState({ pass: e.target.value });
  };

  handleLogin = e => {
    const { onLogin } = this.props;
    const { email, pass } = this.state;
    e.preventDefault();
    onLogin(email, pass);
  };
}

const Btn = styled(Button)`
  margintop: 50;
`;

const StyledButton = styled(Button)`
  && {
    background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
    border-radius: 3px;
    border: 0;
    color: white;
    height: 48px;
    padding: 0 30px;
    box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
    margin-top: 40px;
  }
`;

const Form = styled.form`
  display: "flex";
  flexwrap: "wrap";
  padding: 0px 50px;
  padding-top: 20px;
`;

const TxtField = styled(TextField)``;

export default LoginForm;
