import { IResolvers } from 'mercurius';

import { subProducts } from './sub-products/sub-products';

export const PRODUCT_RESOLVERS: IResolvers[] = [
  {
    ProductPayload: {
      subProducts,
    },
  },
];
