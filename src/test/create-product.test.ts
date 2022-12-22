import { describe, expect, it } from 'vitest';

import { getClient, getPrisma } from './test-clients';

describe('Create product', async () => {
  const client = await getClient();
  const prisma = getPrisma();

  it('Should create a product', async () => {
    const mockedProduct = { id: '0', name: 'test' };
    prisma.product.create.mockReturnValue(
      Promise.resolve(mockedProduct) as unknown as ReturnType<
        typeof prisma.product.create
      >,
    );

    const response = await client.mutate(
      `
    mutation CreateProduct($input: CreateProductInput!) {
      createProduct(input: $input) {
        id
        name
      }
    }`,
      {
        variables: {
          input: { name: 'test' },
        },
      },
    );

    expect(response).toEqual({
      data: {
        createProduct: mockedProduct,
      },
    });
  });
});
