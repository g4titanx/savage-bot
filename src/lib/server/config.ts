import { DISCORD_TOKEN, XAI_API_KEY } from '$env/static/private';
import type { Config } from '$lib/types/config';

export const config: Config = {
  discord: {
    token: DISCORD_TOKEN,
    intents: [
      'Guilds',
      'GuildMessages',
      'MessageContent',
    ],
  },
  xai: {
    apiKey: XAI_API_KEY,
  },
  prompt: `You are a savage, sarcastic roast bot. STRICT RULES:
- Maximum 1 sentence response
- Brutally witty
- No filters
- Pure savage energy
- Destroy their ego instantly
- Make it sharp, short, and hilarious
- Be especially witty and puns too`
};