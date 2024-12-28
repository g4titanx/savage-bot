import { Client, GatewayIntentBits } from 'discord.js';
import { ChatOpenAI } from '@langchain/openai';
import { HumanMessage, SystemMessage } from '@langchain/core/messages';
import { config } from './config';

class DiscordBot {
  private static instance: DiscordBot;
  private client: Client;
  private llm: ChatOpenAI;
  private isReady = false;

  private constructor() {
    // Initialize Discord client
    this.client = new Client({
      intents: config.discord.intents.map(intent => GatewayIntentBits[intent]),
    });

    // Initialize XAI chat model
    this.llm = new ChatOpenAI({
      model: "grok-beta",
      apiKey: config.xai.apiKey,
      configuration: {
        baseURL: "https://api.x.ai/v1"
      }
    });

    // Set up event handlers
    this.setupEventHandlers();
  }

  public static getInstance(): DiscordBot {
    if (!DiscordBot.instance) {
      DiscordBot.instance = new DiscordBot();
    }
    return DiscordBot.instance;
  }

  private setupEventHandlers() {
    this.client.once('ready', () => {
      console.log(`Logged in as ${this.client.user?.tag}!`);
      this.isReady = true;
    });

    this.client.on('messageCreate', async (message) => {
      if (message.author.bot) return;
      
      try {
        await message.channel.sendTyping();
        
        const response = await this.llm.invoke([
          new SystemMessage(config.prompt),
          new HumanMessage(message.content)
        ]);
        
        // Get the first sentence of the response
        const savageResponse = response.content.split('.')[0].trim();
        await message.reply(savageResponse);

      } catch (error) {
        console.error('Error:', error);
        const errorResponses = [
          "Even Grok needs a moment to process that level of roast-worthy content...",
          "Hold up, recalibrating my savage algorithms...",
          "Brb, updating my roast database with X's latest burns...",
          "Error 418: I'm a teapot... just kidding, just need a moment to think of something truly savage."
        ];
        const randomResponse = errorResponses[Math.floor(Math.random() * errorResponses.length)];
        await message.reply(randomResponse);
      }
    });
  }

  public async start() {
    if (!this.isReady) {
      await this.client.login(config.discord.token);
    }
  }

  public isRunning(): boolean {
    return this.isReady;
  }
}

export const botService = DiscordBot.getInstance();