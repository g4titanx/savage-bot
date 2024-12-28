import type { Handle } from '@sveltejs/kit';
import { botService } from '$lib/server/bot';

// Start the bot when the server starts
botService.start().catch(console.error);

export const handle: Handle = async ({ event, resolve }) => {
  return resolve(event);
};
