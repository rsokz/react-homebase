/**
 * @file MySportsFeed service
 * @link https://www.mysportsfeeds.com/data-feeds/api-docs/
 */
const axios = require('axios');
const btoa = require('btoa');

const getNBAGames = async () => {
  try {
    const seasonName = 'current';
    const date = '20190228';
    // build request URL
    const URL = `https://api.mysportsfeeds.com/v1.2/pull/nba/${seasonName}/daily_game_schedule.json?fordate=${date}`;

    // build request config
    // prettier-ignore
    const config = {
      headers: {
				'Authorization': `Basic ${btoa("47a86413-828b-4d72-a217-e3460b:cykachmo10")}`
      },
    };

    // get response
    const response = await axios.get(URL, config);

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
