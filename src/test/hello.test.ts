import { describe, it, expect } from 'vitest';

import { getClient } from './test-clients';

describe('Hello', async () => {
  const client = await getClient();

  it('Should get hello answer', async () => {
    const mockedInput = { name: 'test' };

    const response = await client.query(
      `
    query Hello($input: HelloInput!) {
      hello(input: $input)
    }`,
      {
        variables: {
          input: mockedInput,
        },
      },
    );

    expect(response).toEqual({
      data: {
        hello: `Hello ${mockedInput.name}`,
      },
    });
  });
});
