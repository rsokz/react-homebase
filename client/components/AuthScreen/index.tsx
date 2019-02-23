import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { Paper, Tabs, Tab, Grid, WithStyles, withStyles, createStyles } from '@material-ui/core';
import { Mutation } from 'react-apollo';
import * as mutation from '../../graphql/mutations';
import * as query from '../../graphql/queries';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const styles = createStyles({
  indicator: {
    backgroundColor: 'white'
  },
  label: {
    color: 'white'
  },
  paper: {
    paddingBottom: '10px',
    width: '450px'
  },
  tabs: {
    background: 'linear-gradient(45deg, #fe6b8b 3%, #ff8e53 90%)',
    paddingTop: '50px',
    backgroundColor: 'white'
  }
});

interface Props extends WithStyles<typeof styles>, RouteComponentProps {}

export default withStyles(styles)(({ classes, history }: Props) => {
  const [errors, setErrors] = useState([]);
  const [tabIndex, setTabIndex] = useState(0);

  const handleMutationError = res => {
    const errors = res.graphQLErrors.map(err => {
      return err.message;
    });
    setErrors(errors);
  };

  const handleTabChange = (_, tabIndex) => {
    setTabIndex(tabIndex);
  };

  return (
    <Grid
      style={{ minHeight: '100vh' }}
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Paper className={classes.paper} square>
        <Tabs
          className={classes.tabs}
          classes={{ indicator: classes.indicator }}
          value={tabIndex}
          onChange={handleTabChange}
          indicatorColor="primary"
          variant="fullWidth"
        >
          <Tab classes={{ label: classes.label }} label="Login" />
          <Tab classes={{ label: classes.label }} label="Sign Up" />
        </Tabs>
        {tabIndex === 0 && (
          <Mutation
            mutation={mutation.login}
            onCompleted={() => history.push('/')}
            onError={handleMutationError}
          >
            {login => (
              <LoginForm
                onLogin={(email, password) => {
                  login({
                    variables: { email, password },
                    refetchQueries: [{ query: query.currentUser }],
                    awaitRefetchQueries: true
                  });
                }}
                errors={errors}
              />
            )}
          </Mutation>
        )}
        {tabIndex === 1 && (
          <Mutation
            mutation={mutation.signup}
            onCompleted={() => history.push('/')}
            onError={this.handleMutationError}
          >
            {signup => (
              <SignupForm
                onSignup={(email, password, name) =>
                  signup({
                    variables: { email, password, name },
                    refetchQueries: [{ query: query.currentUser }],
                    awaitRefetchQueries: true
                  })
                }
                errors={errors}
              />
            )}
          </Mutation>
        )}
      </Paper>
    </Grid>
  );
});
