import { MutationResolvers } from '../../generated_types';

export const PRODUCT_CREATED_SOCKET = 'productCreated';

export const createProduct: MutationResolvers['createProduct'] = async (
  _root,
  { input: { name } },
  { data, pubsub },
) => {
  const product = await data.product.create(name);

  if (product) {
    pubsub.publish({
      topic: PRODUCT_CREATED_SOCKET,
      payload: {
        [PRODUCT_CREATED_SOCKET]: product,
      },
    });
  }

  return product;
};
