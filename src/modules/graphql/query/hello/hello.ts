import { QueryResolvers } from '../../generated_types';

export const hello: QueryResolvers['hello'] = (_root, { input: { name } }) => {
  return `Hello ${name}`;
};
