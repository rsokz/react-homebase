import * as React from 'react';
import { useState } from 'react';
import { List, Paper, Theme, WithStyles, createStyles, withStyles } from '@material-ui/core';

import Product from './Product';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      // width: '100%',
      // maxWidth: 360,
      ...theme.mixins.gutters(),
      backgroundColor: theme.palette.background.paper
    },
    title: {
      marginBottom: theme.spacing.unit * 2
    },
    underline: {
      height: '1px',
      backgroundColor: 'rgb(232, 232, 232)',
      marginBottom: theme.spacing.unit * 2
    }
  });

interface Props extends WithStyles<typeof styles> {}

export default withStyles(styles)(({ classes }: Props) => {
  return (
    <Paper className={classes.root} elevation={1}>
      <List>
        <Product />
      </List>
    </Paper>
  );
});
