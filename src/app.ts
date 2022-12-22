import fastify, { FastifyServerOptions } from 'fastify';

import { registerModules } from './modules';
import 'reflect-metadata';

export async function buildApp(options?: FastifyServerOptions) {
  const app = fastify(options);

  await registerModules(app);

  return app;
}
