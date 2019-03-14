import * as React from 'react';
import _ from 'lodash';
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
import { CheckCircle } from '@material-ui/icons';
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
    checkMark: {
      color: 'white',
      position: 'absolute',
      left: '37%',
      top: '35%'
    },
    gridList: {
      // flexWrap: 'wrap',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      // transform: 'translateZ(0)'
      display: 'flex',
      flexDirection: 'row',
      textAlign: 'center'
    },
    inputBox: {
      padding: '20px 0',
      paddingLeft: '7%',
      paddingRight: '10%'
    },
    selected: {
      border: '8px solid white'
    },
    title: {
      ...theme.mixins.gutters()
    },
    websitesTxt: {
      marginTop: theme.spacing.unit * 3,
      marginBottom: theme.spacing.unit
    }
  });

interface Props extends WithStyles<typeof styles> {
  user?: Type.CurrentUser.Data['currentUser'];
  onSave: (settings: Type.CurrentUser.Data['currentUser']['settings']) => void;
}

export default withStyles(styles)(
  ({
    classes,
    user: {
      settings: { backgroundImage, websites }
    },
    onSave
  }: Props) => {
    const [backImage, setBackImage] = useState(backgroundImage);
    const [topWebs, setTopWebs] = useState(websites);

    const maySave = () => {
      return backImage !== backgroundImage || !_.isEqual(topWebs, websites);
    };

    const handleImagePress = (e: React.MouseEvent<HTMLElement>, index: number) => {
      setBackImage(index);
    };

    const handleWebsiteChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
      index: number
    ) => {
      setTopWebs(topWebs.map((web, i) => (i === index ? { ...web, url: e.target.value } : web)));
    };

    const handleSave = () => {
      onSave({ backgroundImage: backImage, websites: topWebs });
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
          <div className={classes.gridList}>
            {images.map((image, index) => (
              <div
                style={{ width: '25%', height: '11%' }}
                onClick={e => handleImagePress(e, index)}
              >
                <img
                  className={index === backImage && classes.selected}
                  src={image}
                  height="100%"
                  width="97%"
                />
                {index === backImage && (
                  <CheckCircle className={classes.checkMark} fontSize="large" />
                )}
              </div>
            ))}
          </div>
          <Typography className={classes.websitesTxt} variant="button" gutterBottom>
            Top 4 Websites:
          </Typography>
          <Grid container direction="row" spacing={32}>
            {Array.from({ length: 2 }, (_, k) => (
              <Grid item xs={6} key={k}>
                <Input
                  id={`website-${k + 1}`}
                  value={topWebs[k] && topWebs[k].url}
                  onChange={e => handleWebsiteChange(e, k)}
                  fullWidth
                />
                <FormHelperText id={`website-${k + 1}-helper`}>Website #{k + 1}</FormHelperText>
              </Grid>
            ))}
          </Grid>
          <Grid container direction="row" spacing={32}>
            {Array.from({ length: 2 }, (_, k) => (
              <Grid item xs={6} key={k + 2}>
                <Input
                  id={`website-${k + 3}`}
                  value={topWebs[k + 2] && topWebs[k + 2].url}
                  // onChange={this.handleChange}
                  fullWidth
                />
                <FormHelperText id={`website-${k + 3}-helper`}>Website #{k + 3}</FormHelperText>
              </Grid>
            ))}
          </Grid>
          <Button
            variant="contained"
            size="medium"
            color="primary"
            className={classes.btn}
            onClick={handleSave}
            disabled={!maySave()}
          >
            Save
          </Button>
        </div>
      </Paper>
    );
  }
);
