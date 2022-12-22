import { PrismaClient } from '@prisma/client';
import { createMercuriusTestClient } from 'mercurius-integration-testing';
import { buildApp } from 'src/app';
import { DeepMockProxy } from 'vitest-mock-extended';

import { prismaClient } from '#modules/data-service/prisma-client';

export const getClient = async () => {
  const app = await buildApp();
  const client = await createMercuriusTestClient(app);

  return client;
};

export const getPrisma = () =>
  prismaClient as unknown as DeepMockProxy<PrismaClient>;
