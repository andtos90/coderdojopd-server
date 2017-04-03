/* @flow */
export default {
  IS_ENV_TEST: process.env.NODE_ENV === 'test',
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/coderdojopd-server',
  APP_NAME: process.env.APP_NAME || 'CODERDOJOPD_SERVER',
  APP_ID: process.env.APP_ID || 'DEV_APP_ID',
  MASTER_KEY: process.env.MASTER_KEY || 'DEV_MASTER_KEY',
  SERVER_URL: process.env.SERVER_URL || 'http://localhost:1337/api',
  PORT: process.env.PORT || 1337,
  PARSE_MOUNT: process.env.PARSE_MOUNT || '/api',
  CLIENT_URL: process.env.CLIENT_URL ? `${process.env.CLIENT_URL}` : 'http://localhost:8080',
  MANDRILL_API_KEY: process.env.MANDRILL_API_KEY || '123456789',
};
