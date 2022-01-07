const originalListen = Deno.listen;

Object.defineProperty(Deno, 'listen', {
  value: () => originalListen({ port: 5050 }),
});
Object.freeze(Deno);
