import { Application, Router, applyGraphQL, GQLError } from './deps.ts';

const app = new Application();
const PORT = parseInt(Deno.env.get('PORT') || '3000');
const types = await Deno.readTextFile('api/main.graphql');

const resolvers = {
  Query: {
    test: (parent: any, args: any, context: any, info: any) => {
      return 'This is a test.';
    },
    error: () => {
      throw new GQLError({ type: 'General error' });
    },
  },
};

const router = new Router();

router.get('/', (context) => {
  context.response.body = { name: 'api' };
});

const GraphQLService = await applyGraphQL<Router>({
  Router,
  typeDefs: types,
  resolvers: resolvers,
  context: (ctx) => {
    return { user: 'Aaron' };
  },
});

app.use(router.routes());
app.use(GraphQLService.routes(), GraphQLService.allowedMethods());

console.log(`http://localhost:${PORT}`);

await app.listen({ port: PORT });
