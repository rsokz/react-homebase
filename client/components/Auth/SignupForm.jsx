import React from "react";
import styled from "styled-components";
import { TextField, Button, Typography } from "@material-ui/core";

class SignupForm extends React.PureComponent {
  state = {
    email: "",
    name: "",
    pass: ""
  };

  render() {
    const { email, name, pass } = this.state;
    const { errors } = this.props;
    return (
      <Form noValidate autoComplete="off" onSubmit={this.handleSignup}>
        <TextField
          id="standard-name"
          label="First Name"
          margin="normal"
          fullWidth
          value={name}
          onChange={this.handleNameChange}
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
          Sign Up
        </StyledButton>
        <Typography
          variant="button"
          gutterBottom
          color="error"
          style={{ height: 10, marginTop: 20 }}
        >
          {errors}
        </Typography>
      </Form>
    );
  }

  handleEmailChange = e => {
    this.setState({ email: e.target.value });
  };

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };

  handlePassChange = e => {
    this.setState({ pass: e.target.value });
  };

  handleSignup = e => {
    const { onSignup } = this.props;
    const { email, pass, name } = this.state;
    e.preventDefault();
    onSignup(email, pass, name);
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
  padding-top: 10px;
`;

export default SignupForm;
