import { IResolvers } from 'mercurius';
import { mergeAll } from 'rambda';

import { MUTATION_RESOLVERS } from './mutation/resolvers';
import { QUERY_RESOLVERS } from './query/resolvers';
import { SUBSCRIPTION_RESOLVERS } from './subscription/resolvers';

export const RESOLVERS: IResolvers = mergeAll([
  ...MUTATION_RESOLVERS,
  ...QUERY_RESOLVERS,
  ...SUBSCRIPTION_RESOLVERS,
]);
