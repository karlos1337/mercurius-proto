import { IResolvers } from 'mercurius';

import { hello } from './hello/hello';

export const QUERY_RESOLVERS: IResolvers = {
  Query: {
    hello,
  },
};
