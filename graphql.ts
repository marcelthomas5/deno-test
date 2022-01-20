import { Nubo, gql } from 'https://storage.nubo.codes/nubo/0.0.3/mod.ts';

const types = gql`
  scalar JSON

  type Query {
    hello: JSON
  }
`;

const resolvers = {
  Query: {
    hello: (parent: any, { id }: any, context: any, info: any) => {
      return {
        name: 'deno-test',
        version: Nubo.config.version,
        cloudProvider: Nubo.config.cloudProvider,
        region: Nubo.config.region,
        location: Nubo.config.location,
      };
    },
  },
};

await Nubo.graphql({
  types,
  resolvers,
  playground: true,
});

await Nubo.start();
