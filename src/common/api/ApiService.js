import axios from 'axios';
import { sleep } from 'common/util/sleepHelper';

// Typically in .env file
const API_KEY = '741fd8d3';
// Had to add "s" to "http" even though it's just "http" on the website.
// It seems that unencrypted network requests are blocked by default in iOS.
// https://stackoverflow.com/questions/49370747/network-error-with-axios-and-react-native
const BASE_URL = `https://www.omdbapi.com/?apikey=${API_KEY}&`;

const simulateAuthentication = async (username, password) => {
  await sleep(1000);
  if (username === 'remark' && password === 'testtest') {
    return true;
  }
  return false;
};

const simulateLogOut = async () => {
  await sleep(1000);
  return true;
};

const getCommonHeaders = () => ({
  Accept: 'application/json',
  'Content-Type': 'application/json',
});

const callAxiosInner = async (options) => {
  let result = null;

  try {
    result = await axios.request(options);
  } catch (error) {
    result = `Error: ${error}`;
  }

  return result;
};

const call = async (options) => {
  const axiosResult = await callAxiosInner({
    ...options,
    headers: {
      ...getCommonHeaders(),
    },
  });

  return axiosResult.data;
};

const get = async (url, params = null, options = {}) =>
  call({
    method: 'get',
    url: BASE_URL + url,
    params,
    ...options,
  });

export default {
  get,
  simulateAuthentication,
  simulateLogOut,
};
