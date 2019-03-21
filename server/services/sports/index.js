/**
 * @file NBA service
 * @link http://data.nba.net/10s/prod/v1/today.json
 */
const axios = require('axios');
const moment = require('moment');

const getNBAGames = async () => {
  try {
    const date = moment(new Date()).format('YYYYMMDD');

    // build request URL
    const URL = `http://data.nba.net/10s/prod/v1/${date}/scoreboard.json`;

    // get response
    const response = await axios.get(URL);

    // check error
    if (response.status !== 200) {
      throw Error(response.data.error_message || 'Unable to get NBA data.');
    }

    // return result
    return response.data;
  } catch (err) {
    throw err;
  }
};

module.exports = { getNBAGames };
