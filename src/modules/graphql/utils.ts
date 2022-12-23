import { GraphQLResolveInfo } from 'graphql';
import graphqlFields from 'graphql-fields';

export const getSelectionFields = (info: GraphQLResolveInfo) =>
  Object.keys(
    graphqlFields(info as unknown as Parameters<typeof graphqlFields>[0]),
  );
