import * as React from 'react';
import Lottie from 'react-lottie';
import { Typography, Theme, withStyles, WithStyles, createStyles } from '@material-ui/core';
import * as Type from '../../../graphql/types';
import { getIcon } from '../utils/weather';

const styles = (theme: Theme) =>
  createStyles({
    icon: {
      marginRight: theme.spacing.unit * 1.5,
      color: 'white',
      fontSize: '35'
    },
    weather: {
      margin: theme.spacing.unit * 2
    },
    weatherInfo: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row'
    },
    weatherDegrees: {
      color: 'white',
      marginBottom: theme.spacing.unit
    },
    weatherDescription: {
      color: 'white',
      lineHeight: 1
    }
  });

interface Props extends WithStyles<typeof styles> {
  weather: Type.Weather.Data['weather'];
}

export default withStyles(styles)(({ classes, weather }: Props) => {
  const temperature = `${weather.temperature.toFixed(0)}°F`;
  return (
    <div className={classes.weather}>
      <Typography className={classes.weatherDegrees} variant="h2">
        {temperature}
      </Typography>
      <div className={classes.weatherInfo}>
        <div className={classes.icon}>
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: getIcon(weather),
              rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
              }
            }}
            height={35}
            width={35}
          />
        </div>
        <Typography className={classes.weatherDescription} variant="h5">
          {weather.summary}
        </Typography>
      </div>
    </div>
  );
});
