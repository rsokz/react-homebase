/* eslint-disable react/sort-comp */
import React, { useState } from 'react';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Tabs, Tab, Grid } from '@material-ui/core';
import { graphql, compose } from 'react-apollo';
import * as mutation from '../../graphql/mutations';
import * as query from '../../graphql/queries';

import LoginForm from './LoginForm';
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
            // <LoginForm onLogin={this.handleLogin} errors={errors} />
            <LoginForm onLogin={this.handleLogin} errors={errors} />
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
      // refetchQueries: [{ query: query.currentUser }],
      // awaitRefetchQueries: true,
      onCompleted: () => this.props.history.push('/')
      // onError: res => {
      //   const errors = res.graphQLErrors.map(err => {
      //     return err.message;
      //   });
      //   this.setState({ errors });
      // }
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
      refetchQueries: [{ query: query.currentUser }],
      awaitRefetchQueries: true
    })
      .then(() => this.props.history.push('/'))
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

export default compose(
  graphql(mutation.login, { name: 'loginMutation' }),
  graphql(mutation.signup, { name: 'signupMutation' }),
  graphql(query.currentUser)
)(withStyles(styles)(AuthForm));
