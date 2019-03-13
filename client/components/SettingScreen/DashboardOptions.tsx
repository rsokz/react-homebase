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
  Divider,
  Button
} from '@material-ui/core';
import * as Type from '../../graphql/types';
import images from './images';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 3
    },
    btn: {
      marginTop: theme.spacing.unit * 4,
      textTransform: 'none'
    },
    gridList: {
      flexWrap: 'wrap',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)'
    },
    inputBox: {
      padding: '25px 0',
      paddingLeft: '7%',
      paddingRight: '10%'
    },
    title: {
      ...theme.mixins.gutters()
    }
  });

interface Props extends WithStyles<typeof styles> {
  user?: Type.CurrentUser.Data['currentUser'];
}

export default withStyles(styles)(
  ({
    classes,
    user: {
      settings: { backgroundImage, websites }
    }
  }: Props) => {
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
          <GridList className={classes.gridList} cellHeight={100} cols={5}>
            {images.map(image => (
              <GridListTile>
                <img src={image} />
              </GridListTile>
            ))}
          </GridList>
          <Typography style={{ marginTop: 24 }} variant="button" gutterBottom>
            Top 4 Websites
          </Typography>
          <Grid container direction="row" spacing={32}>
            <Grid item xs={6}>
              <Input
                id="website-one"
                value={websites[0] && websites[0].url}
                // onChange={this.handleChange}
                fullWidth
              />
              <FormHelperText id="website-one-helper">Website #1</FormHelperText>
            </Grid>
            <Grid item xs={6}>
              <Input
                id="website-two"
                value={websites[1] && websites[1].url}
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
                value={websites[2] && websites[2].url}
                // onChange={this.handleChange}
                fullWidth
              />
              <FormHelperText id="website-three-helper">Website #3</FormHelperText>
            </Grid>
            <Grid item xs={6}>
              <Input
                id="website-four"
                value={websites[3] && websites[3].url}
                // onChange={this.handleChange}
                fullWidth
              />
              <FormHelperText id="website-four-helper">Website #4</FormHelperText>
            </Grid>
          </Grid>
          <Button
            variant="contained"
            size="medium"
            color="primary"
            className={classes.btn}
            // disabled={!maySave()}
          >
            Save
          </Button>
        </div>
      </Paper>
    );
  }
);
