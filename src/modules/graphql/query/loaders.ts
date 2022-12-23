import { MercuriusContext, MercuriusLoaders } from 'mercurius';

import { PRODUCT_LOADERS } from './product/loaders';

export const QUERY_LOADERS: MercuriusLoaders<MercuriusContext>[] = [
  PRODUCT_LOADERS,
];
