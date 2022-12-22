import fastifyWebsocket from '@fastify/websocket';
import { FastifyInstance } from 'fastify';

export const registerWebsocket = (app: FastifyInstance) => {
  return app.register(fastifyWebsocket, {
    options: {
      maxPayload: 1048576,
    },
  });
};
