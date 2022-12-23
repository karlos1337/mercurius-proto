import { MercuriusContext, MercuriusLoaders } from 'mercurius';
import { mergeAll } from 'rambda';

import { QUERY_LOADERS } from './query/loaders';

export const LOADERS: MercuriusLoaders<MercuriusContext> = mergeAll([
  ...QUERY_LOADERS,
]);
