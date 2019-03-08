/**
 * @file weather utils
 * @link https://darksky.net/dev/docs
 * @link https://lottiefiles.com/user/26177
 */
import * as Type from '../../../../graphql/types';

export enum IconType {
  CLEAR_DAY = 'clear-day',
  CLEAR_NIGHT = 'clear-night',
  CLOUDY = 'cloudy',
  FOG = 'fog',
  PARTLY_CLOUDY_DAY = 'partly-cloudy-day',
  PARTLY_CLOUDY_NIGHT = 'partly-cloudy-night',
  RAIN = 'rain',
  SLEET = 'sleet',
  SNOW = 'snow',
  WIND = 'wind'
}

const iconMap: { [key in IconType]: string } = {
  'clear-day': require('./weather-sunny.json'),
  'clear-night': require('./weather-night.json'),
  cloudy: require('./weather-cloudy.json'),
  fog: require('./weather-foggy.json'),
  'partly-cloudy-day': require('./weather-partly-cloudy.json'),
  'partly-cloudy-night': require('./weather-cloudy-night.json'),
  rain: require('./weather-rain.json'),
  sleet: require('./weather-snow.json'),
  snow: require('./weather-snow.json'),
  wind: require('./weather-wind.json')
};

export const getIcon = (weather?: Type.Weather.Data['weather']): string =>
  weather && weather.icon ? iconMap[weather.icon] : require('./weather-sunny.json');
