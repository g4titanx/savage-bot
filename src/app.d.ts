// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

declare namespace NodeJS {
  interface ProcessEnv {
    DISCORD_TOKEN: string;
    OPENAI_API_KEY: string;
  }
}


export {};
