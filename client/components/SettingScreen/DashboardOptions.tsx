import * as React from 'react';

import { useState } from 'react';
import {
  Paper,
  TextField,
  Theme,
  Typography,
  WithStyles,
  createStyles,
  withStyles,
  GridList,
  GridListTile
} from '@material-ui/core';
import images from './images';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2
    },
    gridList: {
      // flexWrap: 'nowrap',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)'
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
  const [name, setName] = useState('');

  const maySignUp = () => {
    // return !!(email && password && name);
  };

  const handleNameChange = e => {
    setName(e.target.value);
  };

  return (
    <Paper className={classes.root} square elevation={1}>
      <Typography variant="title" gutterBottom>
        Dashboard Options
      </Typography>
      <div className={classes.underline} />
      <GridList className={classes.gridList} cellHeight={120} cols={5}>
        {images.map(image => (
          <GridListTile>
            <img src={image} />
          </GridListTile>
        ))}
      </GridList>
      <TextField
        id="standard-textarea"
        label="Custom Background Image URL"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true
        }}
      />
    </Paper>
  );
});
