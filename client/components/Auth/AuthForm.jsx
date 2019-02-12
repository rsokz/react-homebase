import React, { useState } from "React";
import styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";
import { Paper, Tabs, Tab } from "@material-ui/core";
import loginMutation from "../../mutations/Login";
import { graphql } from "react-apollo";

import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const styles = theme => ({
  indicator: {
    backgroundColor: "white"
  },
  label: {
    color: "white"
  }
});

class AuthForm extends React.Component {
  state = {
    tabIndex: 0
  };

  render() {
    const { tabIndex } = this.state;
    const { classes } = this.props;
    console.log(this.state);
    return (
      <StyledPaper square>
        <StyledTabs
          classes={{ indicator: classes.indicator }}
          value={tabIndex}
          onChange={this.handleTabChange}
          indicatorColor="primary"
          variant="fullWidth"
        >
          <Tab classes={{ label: classes.label }} label="Login" />
          <Tab classes={{ label: classes.label }} label="Sign Up" />
        </StyledTabs>
        {tabIndex === 0 && <LoginForm onLogin={this.handleLogin} />}
        {tabIndex === 1 && <SignupForm />}
      </StyledPaper>
    );
  }

  handleLogin = (email, password) => {
    const { mutate } = this.props;
    mutate({ variables: { email, password } });
  };

  handleTabChange = (event, tabIndex) => {
    this.setState({ tabIndex });
  };
}

const StyledTabs = styled(Tabs)`
  && {
    background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
    padding-top: 50px;
    background-color: white;
  }
`;

const StyledPaper = styled(Paper)`
  padding-bottom: 40px;
  width: 450;
`;
// const AuthForm = () => {
//   const [value, setValue] = useState(1);

//   return (
//     <Paper square>
//       <Tabs
//         value={value}
//         indicatorColor="primary"
//         textColor="primary"
//         onChange={() => setValue(value)}
//       >
//         <Tab label="Active" />
//         <Tab label="Active" />
//       </Tabs>
//     </Paper>
//   );
// };

export default graphql(loginMutation)(withStyles(styles)(AuthForm));
