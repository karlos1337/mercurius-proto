import { createSchema } from 'schemix';

createSchema({
  basePath: __dirname,
  datasource: {
    provider: 'postgresql',
    url: { env: 'DATABASE_URL' },
  },
  generator: {
    provider: 'prisma-client-js',
    binaryTargets: ['native', 'linux-musl'],
  },
}).export(__dirname, 'schema');
