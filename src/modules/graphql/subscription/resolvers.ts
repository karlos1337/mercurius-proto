import { IResolvers } from 'mercurius';

import { productCreated } from './product-created/product-created';

export const SUBSCRIPTION_RESOLVERS: IResolvers[] = [
  {
    Subscription: {
      productCreated,
    },
  },
];
