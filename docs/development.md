# Development

## Setup docker

To setup docker environment:

```sh
npm run docker:install
```

New dependencies should be installed in both docker container and local environment, so, for installing a new dependency should do:

```sh
npm i [YOUR_DEP]
npm run docker:install
```

## Running the application

Start the application in docker running:

```sh
npm run docker:start
```

## Running the test suite

Execute test suite with:

```sh
npm run test
```

## Linting

To perform a manual linting, run:

```sh
npm run lint
```

## Database

[Prisma](https://www.prisma.io) is used as ORM, there is full access to docker prisma client using:

```sh
npm run prisma [YOUR_COMMAND]
```

Have in mind that any operation that modifies `node_modules` folder should be done both in your local environment and the docker container, so, for instance, for generating prisma types should do:

```sh
npm run prisma generate # Prisma types are generated in docker container node_modules
npx prisma generate # Prisma types are generated in your local node_modules folder
```

### Schemix

The project uses [Schemix](https://github.com/ridafkih/schemix) for generating the Prisma schema so `schema.prisma` file should not be modified in any way, for generating new schema based on `prisma/[enums|mixins|models]/*.ts` files can do:

```sh
npm run schemix
```

## GraphQL

[Mercurius](https://github.com/mercurius-js/mercurius) is used as GraphQL library on top of [Fastify](https://www.fastify.io), it automatically generates typescript types in `src/modules/graphql/generated-types.ts` according `src/modules/graphql/**/*.gql` files on each file modification, have in mind that it does not do it on each build process so, if you change something and the development server is not started, the types will not be refreshed once the server starts until any `*.gql` file were modified.

The expected way of developing a new graphql logic is:

- Creating first the new api structure via `*.gql` files.
- Let the application generates the new typescript types.
- Use the types for creating the new resolvers/loaders.

## VSCode Debugger

VSCode debugger is already configured in the project.

The inspector runs on 9229 by default when we start the server using the inspect flag. Just start the server using the command `npm run docker:start` server as usual, go to the Run and Debug tab on Visual Studio Code and press Start Debugging Go to the desire line and add your breakpoint!