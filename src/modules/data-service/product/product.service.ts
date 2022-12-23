import { PrismaClient } from '@prisma/client';

import { FilteringOptions } from '../types';
import { toPrismaSelect } from '../utils';

export const productService = (prisma: PrismaClient) => ({
  findOne: (id: string, options?: FilteringOptions) =>
    prisma.product.findUnique({
      where: { id },
      select: toPrismaSelect(options?.select),
    }),
  create: (name: string, options?: FilteringOptions) =>
    prisma.product.create({
      data: {
        name,
      },
      select: toPrismaSelect(options?.select),
    }),
});
