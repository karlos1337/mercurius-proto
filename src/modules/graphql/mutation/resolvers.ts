import { IResolvers } from 'mercurius';

import { createProduct } from './create-product/create-product';
import { createSubProduct } from './create-sub-product/create-sub-product';

export const MUTATION_RESOLVERS: IResolvers[] = [
  {
    Mutation: {
      createProduct,
      createSubProduct,
    },
  },
];
