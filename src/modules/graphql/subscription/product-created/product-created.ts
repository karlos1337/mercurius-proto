import { SubscriptionResolvers } from '../../generated-types';
import { PRODUCT_CREATED_SOCKET } from '../../mutation/create-product/create-product';

export const productCreated: SubscriptionResolvers['productCreated'] = {
  subscribe: async (_root, _input, { pubsub }) => {
    return await pubsub.subscribe(PRODUCT_CREATED_SOCKET);
  },
};
