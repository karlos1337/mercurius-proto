import { GraphQLResolveInfo } from 'graphql';
import graphqlFields from 'graphql-fields';

import { Loader } from './generated-types';

export interface GetSelectionFieldsOptions<T> {
  exclude: Array<keyof T>;
}

export const getSelectionFields = <T>(
  info: GraphQLResolveInfo,
  { exclude }: GetSelectionFieldsOptions<T> = { exclude: [] },
): Array<keyof T> =>
  Object.keys(
    graphqlFields(info as unknown as Parameters<typeof graphqlFields>[0]),
  ).filter((key) => !exclude.includes(key as keyof T)) as Array<keyof T>;

export const getLoaderSelectionFields = <T>(
  queries: Parameters<Loader<unknown, unknown, unknown, unknown>>[0],
  options: GetSelectionFieldsOptions<T> = { exclude: [] },
) => {
  const info = (queries[0] as unknown as { info: GraphQLResolveInfo }).info;

  return getSelectionFields<T>(info, options);
};
