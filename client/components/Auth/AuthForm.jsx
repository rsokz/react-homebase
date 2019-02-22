import React, { useState } from 'react';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Tabs, Tab, Grid } from '@material-ui/core';
import loginMutation from '../../mutations/Login';
import signupMutation from '../../mutations/Signup';
import currentUserQuery from '../../queries/CurrentUser';
import { graphql, compose } from 'react-apollo';
import { Redirect } from 'react-router-dom';

import LoginForm from './LoginForm';
// import LoginFormTS from "./LoginFormTS";
import SignupForm from './SignupForm';

const styles = theme => ({
  indicator: {
    backgroundColor: 'white'
  },
  label: {
    color: 'white'
  }
});

class AuthForm extends React.Component {
  state = {
    errors: [],
    tabIndex: 0
  };

  // componentDidMount() {
  //   const { loading, user, history } = this.props.data;
  //   if (!loading && user) {
  //     <Redirect to={‌{ pathname: '/' }}
  //   }
  // }

  render() {
    const { errors, tabIndex } = this.state;
    const { classes } = this.props;
    return (
      <Grid
        style={{ minHeight: '100vh' }}
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
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
          {tabIndex === 0 && (
            <LoginForm onLogin={this.handleLogin} errors={errors} />
            // <LoginFormTS />
          )}
          {tabIndex === 1 && <SignupForm onSignup={this.handleSignup} errors={errors} />}
        </StyledPaper>
      </Grid>
    );
  }

  handleLogin = (email, password) => {
    const { loginMutation } = this.props;
    this.setState({ errors: [] });
    loginMutation({
      variables: { email, password },
      refetchQueries: [{ query: currentUserQuery }],
      awaitRefetchQueries: true,
      onCompleted: () => this.props.history.push('/')
    })
      // .then(() => this.props.history.push("/"))
      .catch(res => {
        const errors = res.graphQLErrors.map(err => {
          return err.message;
        });
        this.setState({ errors });
      });
  };

  handleSignup = (email, password, name) => {
    const { signupMutation } = this.props;
    this.setState({ errors: [] });
    signupMutation({
      variables: { email, password, name },
      refetchQueries: [{ query: currentUserQuery }],
      awaitRefetchQueries: true
    })
      .then(() => this.props.history.push('/dashboard'))
      .catch(res => {
        const errors = res.graphQLErrors.map(err => {
          return err.message;
        });
        this.setState({ errors });
      });
  };

  handleTabChange = (_, tabIndex) => {
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
  padding-bottom: 10px;
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

export default compose(
  graphql(loginMutation, { name: 'loginMutation' }),
  graphql(signupMutation, { name: 'signupMutation' }),
  graphql(currentUserQuery)
)(withStyles(styles)(AuthForm));
