import * as React from 'react';
import classNames from 'classnames';
import { Typography, Theme, withStyles, WithStyles, createStyles } from '@material-ui/core';
import { WeatherCurrently } from '../AuthScreen/utils/weather';

const styles = (theme: Theme) =>
  createStyles({
    icon: {
      marginRight: theme.spacing.unit * 1.5,
      color: 'white',
      fontSize: '35'
    },
    weather: {
      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
      margin: theme.spacing.unit * 2
    },
    weatherInfo: {
      display: 'flex',
      flexDirection: 'row'
    },
    weatherDegrees: {
      color: 'white',
      marginBottom: theme.spacing.unit * 1.5
    },
    weatherDescription: {
      color: 'white'
    }
  });

interface Props extends WithStyles<typeof styles> {
  weather: WeatherCurrently;
}

export default withStyles(styles)(({ classes }: Props) => (
  <div className={classes.weather}>
    <Typography className={classes.weatherDegrees} variant="h2">
      70 °F
    </Typography>
    <div className={classes.weatherInfo}>
      <i className={classNames(classes.icon, 'wi wi-day-sunny')} />
      <Typography className={classes.weatherDescription} variant="h5">
        Sunny
      </Typography>
    </div>
  </div>
));
