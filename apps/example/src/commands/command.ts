import { Command } from '@httpi/client';

import { ButtonStyle, ComponentType } from '@discordjs/core';
import {
  ApplicationIntegrationType,
  InteractionContextType,
  InteractionResponseType,
} from 'discord-api-types/v10';

export default new Command({
  data: {
    name: 'command',
    description: 'This is a test command',
    integration_types: [
      ApplicationIntegrationType.GuildInstall,
      ApplicationIntegrationType.UserInstall,
    ],
    contexts: [
      InteractionContextType.Guild,
      InteractionContextType.BotDM,
      InteractionContextType.PrivateChannel,
    ],
  },
  async execute({ respond }) {
    await respond({
      type: InteractionResponseType.ChannelMessageWithSource,
      data: {
        content: 'This is a test command',
        components: [
          {
            type: ComponentType.ActionRow,
            components: [
              {
                type: ComponentType.Button,
                style: ButtonStyle.Primary,
                custom_id: 'button',
                label: 'Click here',
              },
            ],
          },
        ],
      },
    });
  },
});
