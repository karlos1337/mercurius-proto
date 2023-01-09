import { getSelectionFields } from '#modules/graphql/utils';
import { QueryResolvers } from '../../generated-types';

export const products: QueryResolvers['products'] = async (
  _root,
  _input,
  { data },
  info,
) => {
  const select = getSelectionFields(info, { exclude: ['subProducts'] });
  const product = await data.product.findMany({ select });
  return product;
};
