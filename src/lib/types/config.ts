import type { GatewayIntentBits } from 'discord.js';

export interface Config {
  discord: {
    token: string;
    intents: (keyof typeof GatewayIntentBits)[];
  };
  openai: {
    apiKey: string;
    model: string;
    temperature: number;
    maxTokens: number;
  };
  prompt: string;
}