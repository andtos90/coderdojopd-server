/* @flow */
import Parse from 'parse/node';

import beforeSaveUser from 'src/cloud/triggers/beforeSaveUser';

Parse.Cloud.beforeSave('_User', beforeSaveUser);
