/**
 * @file weather utils
 */

enum IconType {
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
  'clear-night': '',
  cloudy: '',
  fog: '',
  'partly-cloudy-day': '',
  'partly-cloudy-night': '',
  rain: '',
  sleet: '',
  snow: '',
  wind: ''
};

export interface WeatherCurrently {
  time?: number;
  summary?: string;
  icon?: IconType;
  temperature?: number;
}

export const getIcon = (weather?: WeatherCurrently): string =>
  weather && weather.icon ? iconMap[weather.icon] : '';
