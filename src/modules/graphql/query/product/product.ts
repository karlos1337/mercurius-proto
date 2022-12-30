import { getSelectionFields } from '#modules/graphql/utils';
import { Product, QueryResolvers } from '../../generated_types';

export const product: QueryResolvers['product'] = async (
  _root,
  { input: { id } },
  { data },
  info,
) => {
  const select = getSelectionFields<Product>(info, {
    exclude: ['subProducts'],
  });
  const product = await data.product.findOne(id, { select });

  return product;
};
