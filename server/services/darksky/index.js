/**
 * @file darksky weather service
 * @link https://darksky.net/dev/docs
 */
const axios = require('axios');

const getWeather = async (lat, long) => {
  try {
    // build request URL
    const URL = `https://api.darksky.net/forecast/0419e269e05054dd9b44ed9ef4ee2137/${lat},${long}`;

    // build request config
    const config = {
      params: {
        exclude: '=minutely,hourly,daily,alerts,flags'
      }
    };

    // get response
    const response = await axios.get(URL, config);

    // check error
    if (response.status !== 200) {
      throw Error(response.data.error_message || 'Unable to get location weather details.');
    }

    // return result
    return response.data.currently;
  } catch (err) {
    throw err;
  }
};

module.exports = { getWeather };
