import adapter from '@fleek-platform/svelte-adapter';

export default {
  kit: {
    adapter: adapter({
      // optional configuration
      outDir: '.fleek', // Defaults to '.fleek'
    }),
  },
};