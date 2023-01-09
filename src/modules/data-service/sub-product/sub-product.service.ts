import { PrismaClient } from '@prisma/client';

import { SubProduct } from '#modules/graphql/generated-types';
import { FilteringOptions } from '../types';
import { toPrismaSelect } from '../utils';

export const subProductService = (prisma: PrismaClient) => ({
  findByProductIds: (
    productIds: string[],
    options?: FilteringOptions<SubProduct>,
  ) =>
    prisma.subProduct.findMany({
      where: { productId: { in: productIds } },
      select: toPrismaSelect(options?.select),
    }) as Promise<Partial<SubProduct>[]>,

  create: (
    productId: string,
    name: string,
    options?: FilteringOptions<SubProduct>,
  ) =>
    prisma.subProduct.create({
      data: {
        productId,
        name,
      },
      select: toPrismaSelect(options?.select),
    }) as Promise<Partial<SubProduct>>,
});
