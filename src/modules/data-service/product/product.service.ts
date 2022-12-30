import { PrismaClient } from '@prisma/client';

import { Product } from '#modules/graphql/generated_types';
import { FilteringOptions } from '../types';
import { toPrismaSelect } from '../utils';

export const productService = (prisma: PrismaClient) => ({
  findOne: (id: string, options?: FilteringOptions<Product>) =>
    prisma.product.findUnique({
      where: { id },
      select: toPrismaSelect(options?.select),
    }) as Promise<Partial<Product>>,

  findMany: (options?: FilteringOptions<Product>) =>
    prisma.product.findMany({
      select: toPrismaSelect(options?.select),
    }) as Promise<Partial<Product>[]>,

  create: (name: string, options?: FilteringOptions<Product>) =>
    prisma.product.create({
      data: {
        name,
      },
      select: toPrismaSelect(options?.select),
    }) as Promise<Partial<Product>>,
});
