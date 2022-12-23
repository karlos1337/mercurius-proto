import { MercuriusContext, MercuriusLoaders } from 'mercurius';
import { groupBy } from 'rambda';

import { SubProduct } from '#modules/graphql/generated_types';
import { getLoaderSelectionFields } from '#modules/graphql/utils';

export const PRODUCT_LOADERS: MercuriusLoaders<MercuriusContext> = {
  Product: {
    subProducts: {
      loader: async (queries, { data }) => {
        const select = getLoaderSelectionFields<SubProduct>(queries);
        const productIds = queries.map(({ obj }) => obj.id);
        const subProducts = await data.subProduct.findByProductIds(productIds, {
          select: [...select, 'productId'],
        });
        const subProductsByProductId = groupBy(
          (subProduct) => subProduct?.productId || '',
          subProducts,
        );

        return productIds.map(
          (productId) => subProductsByProductId[productId] || [],
        );
      },
      opts: {
        cache: false,
      },
    },
  },
};
