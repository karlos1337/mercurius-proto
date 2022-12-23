import { ProductPayloadResolvers } from '#modules/graphql/generated_types';
import { getSelectionFields } from '#modules/graphql/utils';

export const subProducts: ProductPayloadResolvers['subProducts'] = async (
  { id: productId },
  _params,
  { data },
  info,
) => {
  const select = getSelectionFields(info);
  const subProducts = await data.subProduct.findByProductId(productId, {
    select,
  });
  return subProducts;
};
