import { FastifyInstance } from 'fastify';

import { prismaClient } from '#modules/data-service/prisma-client';
import { productService } from './product/product.service';

const DATA_SERVICE_KEY = 'dataService';

export interface DataService {
  product: ReturnType<typeof productService>;
}

declare module 'fastify' {
  interface FastifyInstance {
    [DATA_SERVICE_KEY]: DataService;
  }
}

export const registerDataService = (app: FastifyInstance) => {
  const dataService = {
    product: productService(prismaClient),
  };

  app.decorate(DATA_SERVICE_KEY, dataService);
};
