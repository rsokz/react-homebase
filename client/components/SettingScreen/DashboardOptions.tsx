import * as React from 'react';
import { useState } from 'react';
import {
  Paper,
  Theme,
  Typography,
  WithStyles,
  createStyles,
  withStyles,
  Grid,
  GridList,
  GridListTile,
  Input,
  FormHelperText
} from '@material-ui/core';
import images from './images';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 3
    },
    gridList: {
      flexWrap: 'wrap',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)'
    },
    inputContainer: {
      display: 'flex',
      flexDirection: 'row',
      marginBottom: theme.spacing.unit
    },
    underline: {
      height: '1px',
      backgroundColor: 'rgb(232, 232, 232)',
      marginBottom: theme.spacing.unit * 4
    }
  });

interface Props extends WithStyles<typeof styles> {}

export default withStyles(styles)(({ classes }: Props) => {
  const [name, setName] = useState('');

  const maySave = () => {
    // return !!(email && password && name);
  };

  const handleNameChange = e => {
    setName(e.target.value);
  };

  return (
    <Paper className={classes.root} square elevation={1}>
      <Typography variant="h5" gutterBottom>
        Dashboard Options
      </Typography>
      <div className={classes.underline} />
      <Typography variant="button" gutterBottom>
        Background Image:
      </Typography>
      <GridList className={classes.gridList} cellHeight={120} cols={5}>
        {images.map(image => (
          <GridListTile>
            <img src={image} />
          </GridListTile>
        ))}
      </GridList>
      <Typography style={{ marginTop: 24 }} variant="button" gutterBottom>
        Top 5 Websites
      </Typography>
      <Grid container direction="row" spacing={32}>
        <Grid item xs={6}>
          <Input
            id="website-one"
            // value={this.state.name}
            // onChange={this.handleChange}
            fullWidth
          />
          <FormHelperText id="website-one-helper">Website #1</FormHelperText>
        </Grid>
        <Grid item xs={6}>
          <Input
            id="website-two"
            // value={this.state.name}
            // onChange={this.handleChange}
            fullWidth
          />
          <FormHelperText id="website-two-helper">Website #2</FormHelperText>
        </Grid>
      </Grid>
      <Grid container direction="row" spacing={32}>
        <Grid item xs={6}>
          <Input
            id="website-three"
            // value={this.state.name}
            // onChange={this.handleChange}
            fullWidth
          />
          <FormHelperText id="website-three-helper">Website #3</FormHelperText>
        </Grid>
        <Grid item xs={6}>
          <Input
            id="website-four"
            // value={this.state.name}
            // onChange={this.handleChange}
            fullWidth
          />
          <FormHelperText id="website-four-helper">Website #4</FormHelperText>
        </Grid>
      </Grid>
    </Paper>
  );
});
