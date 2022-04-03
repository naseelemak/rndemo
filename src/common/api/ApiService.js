import { sleep } from 'common/util/sleepHelper';

const simulateAuthentication = async (username, password) => {
  console.log('authenticating');
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

export default { simulateAuthentication, simulateLogOut };
