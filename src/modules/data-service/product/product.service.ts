import { PrismaClient } from '@prisma/client';

export const productService = (prisma: PrismaClient) => ({
  create: (name: string) =>
    prisma.product.create({
      data: {
        name,
      },
    }),
});
