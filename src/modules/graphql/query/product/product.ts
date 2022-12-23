import { getSelectionFields } from '#modules/graphql/utils';
import { QueryResolvers } from '../../generated_types';

export const product: QueryResolvers['product'] = async (
  _root,
  { input: { id } },
  { data },
  info,
) => {
  const select = getSelectionFields(info);
  const product = await data.product.findOne(id, { select });
  return product;
};
