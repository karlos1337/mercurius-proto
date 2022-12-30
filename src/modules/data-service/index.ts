import { FastifyInstance } from 'fastify';

import { prismaClient } from '#modules/data-service/prisma-client';
import { productService } from './product/product.service';
import { subProductService } from './sub-product/sub-product.service';

const DATA_SERVICE_KEY = 'dataService';

export type DataService = {
  product: ReturnType<typeof productService>;
  subProduct: ReturnType<typeof subProductService>;
};

declare module 'fastify' {
  interface FastifyInstance {
    [DATA_SERVICE_KEY]: DataService;
  }
}

export const registerDataService = (app: FastifyInstance) => {
  const dataService: DataService = {
    product: productService(prismaClient),
    subProduct: subProductService(prismaClient),
  };
  app.decorate(DATA_SERVICE_KEY, dataService);
};
