/**
 * @file product hunt service
 * @link https://api.producthunt.com/v1/docs
 */
const axios = require('axios');

const getToken = async () => {
  try {
    // build request URL
    const URL = 'https://api.producthunt.com/v1/oauth/token';

    // build request config
    // prettier-ignore
    const config = {
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Host': 'api.producthunt.com'
			}
		};
    const data = {
      client_id: 'f0e20c6025aeaab00a5938a0af209f59b3ac3f75d39068c41079e146e1bab1b6',
      client_secret: 'f811eb35014b7851657bba62ed72ba0cab86561ef7bd5f85c98823f6aae6bc95',
      grant_type: 'client_credentials'
    };

    // get response
    const response = await axios.post(URL, data, config);

    // check error
    if (response.status !== 200) {
      throw Error(response.data.error_message || 'Unable to get product hunt token.');
    }

    // return result
    return response.data.access_token;
  } catch (err) {
    throw err;
  }
};

const getPosts = async () => {
  try {
    const token = await getToken();

    // build request URL
    const URL = 'https://api.producthunt.com/v1/posts';

    // build request config
    // prettier-ignore
    const config = {
      headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`,
				'Host': 'api.producthunt.com'
      }
    };

    // get response
    const response = await axios.get(URL, config);

    // check error
    if (response.status !== 200) {
      throw Error(response.data.error_message || 'Unable to get product hunt posts.');
    }

    // return result
    return response.data;
  } catch (err) {
    throw err;
  }
};

module.exports = { getPosts };
