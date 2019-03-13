import * as React from 'react';
import { useState } from 'react';
import { Close } from '@material-ui/icons';
import {
  Fab,
  Grid,
  TextField,
  Theme,
  Typography,
  createStyles,
  withStyles,
  WithStyles
} from '@material-ui/core';
// graphql
import * as query from '../../graphql/queries';
import { CurrentUser } from '../../graphql/types';
import { Query } from 'react-apollo';
import { Mutation } from 'react-apollo';
import * as mutation from '../../graphql/mutations';
// components
import DashboardOptions from './DashboardOptions';
import UserDetails from './UserDetails';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      // flexGrow: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      padding: theme.spacing.unit * 2,
      minHeight: '100vh'
    },
    title: {}
  });

interface Props extends WithStyles<typeof styles> {
  onClose: () => void;
}

export default withStyles(styles)(({ classes, onClose }: Props) => {
  const [name, setName] = useState('');
  const [updateComplete, setUpdateComplete] = useState(false);

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleSettingsClose = () => {
    onClose();
  };

  const handleSetUpdateComplete = () => {
    setUpdateComplete(true);
  };

  const handleNameUpdate = () => {};

  return (
    <Query<CurrentUser.Data> query={query.currentUser}>
      {({ data: { currentUser } }) => {
        return (
          <div className={classes.root}>
            <Grid container direction="column" spacing={40}>
              <Grid item container direction="row" justify="flex-end">
                <Fab
                  color="primary"
                  aria-label="Settings"
                  size="medium"
                  onClick={handleSettingsClose}
                >
                  <Close />
                </Fab>
              </Grid>
              <Grid item xs={12} container justify="center">
                <Grid item md={8} sm={10} xs={12} container direction="column" spacing={32}>
                  <Grid item>
                    <Mutation mutation={mutation.updateName} onCompleted={handleSetUpdateComplete}>
                      {updateName => (
                        <UserDetails
                          user={currentUser}
                          onSave={name => {
                            updateName({
                              variables: { name },
                              refetchQueries: [{ query: query.currentUser }],
                              awaitRefetchQueries: true
                            });
                          }}
                          completed={updateComplete}
                        />
                      )}
                    </Mutation>
                  </Grid>
                  <Grid item>
                    <DashboardOptions user={currentUser} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
        );
      }}
    </Query>
  );
});
