import { FastifyInstance } from 'fastify';
import { MercuriusCommonOptions } from 'mercurius';

import { DataService } from '../data-service';

export const buildContext: (
  app: FastifyInstance,
) => MercuriusCommonOptions['context'] =
  (app: FastifyInstance) => async (_req, _res) => ({
    data: app.dataService,
  });

declare module 'mercurius' {
  interface MercuriusContext {
    data: DataService;
  }
}
