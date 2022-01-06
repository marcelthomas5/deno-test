import { Application } from 'https://deno.land/x/oak/mod.ts';
import { sayHello } from './lib/utils.ts';

const PORT = parseInt(Deno.env.get('PORT') || '') || 8080;
const app = new Application();

// Logger
app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.headers.get('X-Response-Time');
  console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
});

// Timing
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.response.headers.set('X-Response-Time', `${ms}ms`);
});

// Hello World!
app.use((ctx) => {
  ctx.response.body = sayHello();
});

console.log(`http://localhost:${PORT}`);
await app.listen({ port: PORT });
