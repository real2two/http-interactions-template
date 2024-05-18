import env from '@/env';
import { createEvents, createStandaloneClient } from '@/discord';

import commands from '../utils/commands';
import components from '../utils/components';

createStandaloneClient({
  port: env.WebsitePort,
  publicKey: env.DiscordPublicKey,
  events: createEvents({
    commands,
    components,
  }),
});