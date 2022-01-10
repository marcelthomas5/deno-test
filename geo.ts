import { Application } from 'https://deno.land/x/oak/mod.ts';

const PORT = parseInt(Deno.env.get('PORT') || '') || 8080;
const LOCATION = Deno.env.get('LOCATION') || 'unknown';
const app = new Application();

app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.headers.get('X-Response-Time');
  console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
});

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.response.headers.set('X-Response-Time', `${ms}ms`);
});

app.use(async (ctx) => {
  ctx.response.body = `Location ${LOCATION}`;
});

console.log(`http://localhost:${PORT}`);
console.log(`location: ${LOCATION}`);
await app.listen({ port: PORT });
