import { FastifyInstance } from 'fastify';
import { buildSchema } from 'graphql';
import mercurius from 'mercurius';
import mercuriusCodegen, { loadSchemaFiles } from 'mercurius-codegen';
import { mergeAll } from 'rambda';

import { buildContext } from './context';
import { MUTATION_RESOLVERS } from './mutation/resolvers';
import { QUERY_RESOLVERS } from './query/resolvers';
import { SUBSCRIPTION_RESOLVERS } from './subscription/resolvers';

const generateSchema = (app: FastifyInstance, schema: string[]) => {
  app.graphql.replaceSchema(buildSchema(schema.join('\n')));

  mercuriusCodegen(app, {
    targetPath: 'src/modules/graphql/generated_types.ts',
  }).catch(console.error);
};

export const registerGraphQL = (app: FastifyInstance) => {
  const { schema } = loadSchemaFiles('src/modules/graphql/**/*.gql', {
    prebuild: {
      enabled: false,
    },
    watchOptions: {
      enabled: process.env.NODE_ENV === 'dev',
      uniqueWatch: true,
      onChange(schema) {
        generateSchema(app, schema);
      },
    },
  });

  return app.register(mercurius, {
    schema,
    resolvers: mergeAll([
      ...MUTATION_RESOLVERS,
      ...QUERY_RESOLVERS,
      ...SUBSCRIPTION_RESOLVERS,
    ]),
    graphiql: true,
    context: buildContext(app),
    subscription: true,
  });
};
