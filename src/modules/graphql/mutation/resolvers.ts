import { IResolvers } from 'mercurius';

import { createProduct } from './create-product/create-product';

export const MUTATION_RESOLVERS: IResolvers = {
  Mutation: {
    createProduct,
  },
};
