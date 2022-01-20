import { Nubo } from 'https://storage.nubo.codes/nubo/0.0.3/mod.ts';

Nubo.router.get('/', ({ response }) => {
  response.body = {
    name: 'deno-test',
    version: Nubo.config.version,
    cloudProvider: Nubo.config.cloudProvider,
    region: Nubo.config.region,
    location: Nubo.config.location,
  };
});

Nubo.start();
