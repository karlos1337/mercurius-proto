import { FastifyInstance } from 'fastify';

import { prismaClient } from '#modules/data-service/prisma-client';
import { productService } from './product/product.service';
import { subProductService } from './sub-product/sub-product.service';

const DATA_SERVICE_KEY = 'dataService';

const dataService = {
  product: productService(prismaClient),
  subProduct: subProductService(prismaClient),
};
export type DataService = typeof dataService;

declare module 'fastify' {
  interface FastifyInstance {
    [DATA_SERVICE_KEY]: DataService;
  }
}

export const registerDataService = (app: FastifyInstance) => {
  app.decorate(DATA_SERVICE_KEY, dataService);
};
