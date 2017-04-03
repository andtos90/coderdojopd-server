/* @flow */
import Parse from 'parse/node';
import { setParseLib, initializeParseSDK } from 'parse-utils';
import '../src/index';

// Stops if we have any chance to do something harmful
if (process.env.MASTER_KEY) throw new Error('Invalid test environment');

const setup = (async () => { // eslint-disable-line
  // eslint-disable-line
  setParseLib(Parse);
  initializeParseSDK('http://localhost:1337/api', 'DEV_APP_ID', 'DEV_MASTER_KEY');
  // $FlowFixMe
  run(); // eslint-disable-line
})();
