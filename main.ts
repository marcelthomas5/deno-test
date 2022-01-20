import { Nubo } from 'https://storage.nubo.codes/nubo/0.0.1/mod.ts';

const VERSION = '0.0.1';

Nubo.router.get('/', ({ response }) => {
  response.body = {
    name: 'deno-test',
    version: VERSION,
    cloudProvider: Deno.env.get('NUBO_CLOUD_PROVIDER') || 'unknown',
    region: Deno.env.get('NUBO_REGION') || 'unknown',
    location: Deno.env.get('NUBO_LOCATION') || 'unknown',
  };
});

Nubo.start();
