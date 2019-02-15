/**
 * @file darksky weather service
 * @link https://darksky.net/dev/docs
 */
import axios from "axios";
import Config from "react-native-config";
import { IconType } from "./type";

// export interface WeatherCurrently {
// 	time?: number
// 	summary?: string
// 	icon?: IconType
// 	precipProbability?: number
// 	precipType?: string
// 	temperature?: number
// 	apparentTemperature?: number
// 	humidity?: number
// 	pressure?: number
// 	windSpeed?: number
// 	cloudCover?: number
// 	visibility?: number
// }

export const getWeatherCurrently = async () => {
  try {
    // build request URL
    const URL = `https://api.darksky.net/forecast/${Config.DARKSKY_API_KEY}/${
      coords.lat
    },${coords.lng}`;

    // build request config
    const config = {
      params: {
        exclude: "=minutely,hourly,daily,alerts,flags"
      }
    };

    // get response
    const response = await axios.get(URL, config);

    // check error
    if (response.status !== 200) {
      throw Error(
        response.data.error_message || "Unable to get Location Weather Details."
      );
    }

    // return result
    return response.data.currently;
  } catch (err) {
    throw err;
  }
};
