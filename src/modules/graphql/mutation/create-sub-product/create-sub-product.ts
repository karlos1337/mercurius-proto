import { getSelectionFields } from '#modules/graphql/utils';
import { MutationResolvers } from '../../generated_types';

export const PRODUCT_CREATED_SOCKET = 'productCreated';

export const createSubProduct: MutationResolvers['createSubProduct'] = async (
  _root,
  { input: { productId, name } },
  { data },
  info,
) => {
  const select = getSelectionFields(info);
  const product = await data.subProduct.create(productId, name, { select });

  return product;
};
