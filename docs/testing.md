# Testing

[Vitest](https://vitest.dev) is used as testing library in conjunction with ['Mercurius Integration Testing'](https://github.com/mercurius-js/mercurius-integration-testing), we do an integration test per query/operation trying to reach at least 80% of code coverage, every testing related file it's in `test` folder, the workaround is as follows:

1. Vitest executes `test/setup.ts` for mocking any dependant library (atm only Prisma client is required to be mocked)
2. Then, on each test, can obtain from `test/test-client.ts`:)
  - Mocked Prisma (`getPrismaClient()`) client and use it as any other mocked library.
  - App client (`getClient()`) for executing required requests.

Also [vitest-mock-extended](https://github.com/eratio08/vitest-mock-extended) library is installed for improving mocking tools.
  



