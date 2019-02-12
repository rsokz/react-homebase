import React from "react";
import styled from "styled-components";
import { TextField, Button } from "@material-ui/core";

const SignupForm = props => {
  return (
    <Form noValidate autoComplete="off">
      <TextField
        id="standard-name"
        label="First Name"
        // value={this.state.name}
        // onChange={this.handleChange('name')}
        margin="normal"
        fullWidth
      />
      <TextField
        id="standard-email-input"
        label="Email"
        type="email"
        name="email"
        autoComplete="email"
        margin="normal"
        fullWidth
      />
      <TextField
        id="standard-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        margin="normal"
        fullWidth
      />
      <StyledButton variant="contained" fullWidth>
        Sign Up
      </StyledButton>
    </Form>
  );
};

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

const TxtField = styled(TextField)``;

export default SignupForm;
