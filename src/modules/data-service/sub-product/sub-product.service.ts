import { PrismaClient } from '@prisma/client';

import { FilteringOptions } from '../types';
import { toPrismaSelect } from '../utils';

export const subProductService = (prisma: PrismaClient) => ({
  findByProductId: (productId: string, options?: FilteringOptions) =>
    prisma.subProduct.findMany({
      where: { productId },
      select: toPrismaSelect(options?.select),
    }),
  create: (productId: string, name: string, options?: FilteringOptions) =>
    prisma.subProduct.create({
      data: {
        productId,
        name,
      },
      select: toPrismaSelect(options?.select),
    }),
});
