import { IconType } from '../../components/DashboardScreen/utils/weather';

export interface Data {
  weather: {
    time?: number;
    summary?: string;
    icon?: IconType;
    temperature?: number;
  };
}

export interface Variables {
  lat: number;
  long: number;
}
