import type { InteractionType } from 'discord-api-types/v10';
import type { Event } from '../index.js';

export interface Events {
  [InteractionType.Ping]: Event;
  [InteractionType.ApplicationCommand]: Event;
  [InteractionType.MessageComponent]: Event;
  [InteractionType.ApplicationCommandAutocomplete]: Event;
  [InteractionType.ModalSubmit]: Event;
}
