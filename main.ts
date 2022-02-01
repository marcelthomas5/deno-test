import { Nubo } from 'https://storage.nubo.codes/@nubo/nubo/0.0.3/mod.ts';
import { Slack } from 'https://storage.nubo.codes/@businessql/slack/0.0.2/mod.ts';
import { ConvertKit } from 'https://storage.nubo.codes/@businessql/convertkit/0.0.1/mod.ts';

const VERSION = '0.0.8';

Nubo.router.get('/', ({ response }) => {
  response.body = {
    name: 'deno-test',
    version: VERSION,
    nubo: {
      version: Nubo.config.version,
      cloudProvider: Nubo.config.cloudProvider,
      region: Nubo.config.region,
      location: Nubo.config.location,
      secret: Deno.env.get('SECRET') || '--',
    }
  };
});

Nubo.router.get('/send-message', async ({ response }) => {
  const result = await Slack.sendMessage({
    channel: 'general',
    message: 'From Deno Test',
  });

  response.body = result;
});

Nubo.router.get('/subscriber/:id', async ({ response, params }) => {
  const { id } = params;
  const subscriber = await ConvertKit.getSubscriber({ id });

  response.body = { subscriber };
});

Nubo.start();
