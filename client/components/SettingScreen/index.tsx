import * as React from 'react';
import { useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { Paper, Grid, Modal, WithStyles, withStyles, createStyles } from '@material-ui/core';
import { Mutation } from 'react-apollo';

const styles = createStyles({
  root: {
    flexGrow: 1
  },
  paper: {
    backgroundColor: 'black',
    height: '100%'
  }
});

interface Props extends WithStyles<typeof styles> {}

export default withStyles(styles)(({ classes }: Props) => {
  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
      </Grid>
    </div>
  );
});
