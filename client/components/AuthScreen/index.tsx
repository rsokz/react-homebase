import * as React from 'react';
import { useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { Paper, Tabs, Tab, Grid, WithStyles, withStyles, createStyles } from '@material-ui/core';
import { Mutation } from 'react-apollo';
import * as mutation from '../../graphql/mutations';
import * as query from '../../graphql/queries';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

const styles = createStyles({
  root: {
    flexGrow: 1
  },
  grid: {
    minHeight: '100vh'
  },
  indicator: {
    backgroundColor: 'white'
  },
  label: {
    color: 'white'
  },
  paper: {
    paddingBottom: '10px',
    height: '49%'
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
    setErrors([]);
    setTabIndex(tabIndex);
  };

  return (
    <div className={classes.root}>
      <Grid
        className={classes.grid}
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={40}
      >
        <Grid item xs={6}>
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
                mutation={mutation.logIn}
                onCompleted={() => history.push('/')}
                onError={handleMutationError}
              >
                {login => (
                  <SignInForm
                    onSignIn={(email, password) => {
                      setErrors([]);
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
                mutation={mutation.signUp}
                onCompleted={() => history.push('/')}
                onError={handleMutationError}
              >
                {signup => (
                  <SignUpForm
                    onSignUp={(email, password, name) => {
                      setErrors([]);
                      signup({
                        variables: { email, password, name },
                        refetchQueries: [{ query: query.currentUser }],
                        awaitRefetchQueries: true
                      });
                    }}
                    errors={errors}
                  />
                )}
              </Mutation>
            )}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
});
