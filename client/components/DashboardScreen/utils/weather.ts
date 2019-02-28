/**
 * @file weather utils
 * @link https://darksky.net/dev/docs
 * @link https://erikflowers.github.io/weather-icons/
 */
import * as Type from '../../../graphql/types';

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
  'clear-day': 'wi wi-day-sunny',
  'clear-night': 'wi wi-night-clear',
  cloudy: 'wi wi-cloudy',
  fog: 'wi wi-fog',
  'partly-cloudy-day': 'wi wi-day-cloudy',
  'partly-cloudy-night': 'wi wi-night-cloudy',
  rain: 'wi wi-rain',
  sleet: 'wi wi-sleet',
  snow: 'wi wi-snow',
  wind: 'wi wi-strong-wind'
};

export const getIcon = (weather?: Type.Weather.Data['weather']): string =>
  weather && weather.icon ? iconMap[weather.icon] : 'wi wi-day-sunny';
