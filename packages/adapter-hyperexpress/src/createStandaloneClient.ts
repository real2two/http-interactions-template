import type { Events } from '@httpi/client';
import HyperExpress from 'hyper-express';
import { createHyperExpressAdapter } from './createHyperExpressAdapter';

/**
 * Start the bot using a standalone web server
 * @param data The client data
 */
export function createStandaloneClient({
  port,
  publicKey,
  events,
}: {
  port: number;
  publicKey: string;
  events: Events;
}) {
  const app = new HyperExpress.Server();

  app.post(
    '/',
    createHyperExpressAdapter({
      publicKey,
      events,
    }),
  );

  app.listen(port);
}
