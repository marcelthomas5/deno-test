import { Application } from 'https://deno.land/x/oak/mod.ts';

const PORT = parseInt(Deno.env.get('PORT') || '') || 8080;
const app = new Application();
const VERSION = 5;

console.log(Deno.env.get('LISTEN_ADDRESS'));

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
  ctx.response.body = `app:${PORT} - v${VERSION}`;
});

console.log(`http://localhost:${PORT}`);
console.log(`version ${VERSION}`);
await app.listen({ port: PORT });
