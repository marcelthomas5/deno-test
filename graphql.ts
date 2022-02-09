import { Nubo, gql } from 'https://storage.nubo.codes/@nubo/nubo/0.0.3/mod.ts';

const types = gql`
  scalar JSON

  type Query {
    info: JSON
  }
`;

const resolvers = {
  Query: {
    info: (parent: any, { id }: any, context: any, info: any) => {
      return {
        name: 'graphql',
        version: Nubo.config.version,
        cloudProvider: Nubo.config.cloudProvider,
        region: Nubo.config.region,
        location: Nubo.config.location,
      };
    },
  },
};

Nubo.router.get('/', async ({ response }) => {
  response.body = {
    message: 'POST /graphql',
  };
});

await Nubo.graphql({
  types,
  resolvers,
  playground: true,
});

await Nubo.start();
