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
  FormHelperText,
  Divider
} from '@material-ui/core';
import * as Type from '../../graphql/types';
import images from './images';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 3
    },
    gridList: {
      flexWrap: 'wrap',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)'
    },
    inputBox: {
      padding: '25px 90px'
    },
    title: {
      ...theme.mixins.gutters()
    }
  });

interface Props extends WithStyles<typeof styles> {
  user?: Type.CurrentUser.Data['currentUser'];
}

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
      <Typography className={classes.title} variant="h5" gutterBottom>
        Dashboard Options
      </Typography>
      <Divider light />
      <div className={classes.inputBox}>
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
      </div>
    </Paper>
  );
});
