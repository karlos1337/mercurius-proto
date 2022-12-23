import { IResolvers } from 'mercurius';

import { product } from './product/product';
import { products } from './products/products';

export const QUERY_RESOLVERS: IResolvers[] = [
  {
    Query: {
      product,
      products,
    },
  },
];
