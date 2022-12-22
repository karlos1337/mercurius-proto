import { FastifyInstance } from 'fastify';

import { registerDataService } from './data-service';
import { registerGraphQL } from './graphql';
import { registerWebsocket } from './websocket';

const MODULES = [registerWebsocket, registerDataService, registerGraphQL];

export const registerModules = async (
  app: FastifyInstance,
): Promise<FastifyInstance> => {
  await Promise.all(MODULES.map((module) => module(app)));

  return app;
};
