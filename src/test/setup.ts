import { PrismaClient } from '@prisma/client';
import { vi } from 'vitest';

vi.mock('#modules/data-service/prisma-client', async () => ({
  prismaClient: (await import('vitest-mock-extended')).mockDeep<PrismaClient>(),
}));
