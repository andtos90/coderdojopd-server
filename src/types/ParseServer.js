/* @flow */
import Parse from 'parse/node';

export type ParseRequest = {
  user: Parse.User,
  object: Parse.Object,
  params: Object,
  master: boolean,
  query: Object,
};

export type ParseResponse = {
  success: (value: any) => void,
  error: (value: any) => void,
};

export type ParsePointer = {
  __type: string,
  className: string,
  objectId: string,
};
