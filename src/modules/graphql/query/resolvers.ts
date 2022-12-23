import { IResolvers } from 'mercurius';

import { product } from './product/product';
import { PRODUCT_RESOLVERS } from './product/resolvers';

export const QUERY_RESOLVERS: IResolvers[] = [
  {
    Query: {
      product,
    },
  },
  ...PRODUCT_RESOLVERS,
];
