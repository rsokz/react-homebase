import * as React from 'react';
import { useState } from 'react';
import { RouteComponentProps } from 'react-router';
import {
  Paper,
  Tabs,
  Tab,
  Grid,
  Typography,
  WithStyles,
  withStyles,
  createStyles
} from '@material-ui/core';
import { Mutation } from 'react-apollo';
import * as mutation from '../../graphql/mutations';
import * as query from '../../graphql/queries';
import SignInForm from './SignInForm';
import { SignUpForm } from './SignUpForm';
import BackgroundImages from '../SettingScreen/images';
import { generateGreeting } from '../DashboardScreen/utils/greeting';

const styles = createStyles({
  root: {
    display: 'block',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    minHeight: '100vh'
  },
  greetingTxt: {
    color: 'white',
    fontWeight: 400
  },
  actionTxt: {
    color: 'white',
    fontSize: '1.3em',
    marginTop: '80px'
  },
  indicator: {
    backgroundColor: 'white'
  },
  infoBox: {
    textAlign: 'center',
    height: '100%',
    width: '100%',
    paddingTop: '40%'
  },
  label: {
    color: 'white'
  },
  paper: {
    paddingBottom: '10px',
    height: '49%',
    width: '80%'
  },
  tabs: {
    paddingTop: '50px',
    backgroundColor: '#3BACA3'
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
    <main className={classes.root} style={{ backgroundImage: `url(${BackgroundImages[0]})` }}>
      <Grid container style={{ backgroundColor: 'rgba(1, 1, 1, 0.5)' }}>
        <Grid container item md={6} sm={12}>
          <div className={classes.infoBox}>
            <Typography
              className={classes.greetingTxt}
              variant="h2"
              gutterBottom
              style={{ color: 'white' }}
            >
              {generateGreeting()}, Friend!
            </Typography>
            <Typography className={classes.actionTxt} variant="h5">
              Sign in to enjoy your personal dashboard experience
            </Typography>
          </div>
        </Grid>
        <Grid container item md={6} sm={12} justify="center" alignItems="center">
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
    </main>
  );
});
