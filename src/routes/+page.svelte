<!-- src/routes/+page.svelte -->
<script lang="ts">
  import { onMount } from 'svelte';
  import Header from '$lib/components/Header.svelte';
  import { Zap, ChevronDown, MessageSquare, Shield, Sparkles } from 'lucide-svelte';

  let isVisible = false;

  onMount(() => {
    isVisible = true;
  });

  const features = [
    {
      icon: MessageSquare,
      title: "Savage Responses",
      description: "Brutally honest and hilariously savage replies to keep your server entertained."
    },
    {
      icon: Sparkles,
      title: "AI-Powered",
      description: "Powered by advanced AI to deliver the most creative and witty comebacks."
    },
    {
      icon: Shield,
      title: "Server Safe",
      description: "Keeps it savage but clean. No inappropriate content, just pure savage wit."
    }
  ];
</script>

<div class="snap-y snap-mandatory h-screen overflow-y-scroll">
  <Header />
  
  <!-- Hero Section -->
  <div id="home" class="h-screen snap-start relative bg-black flex flex-col items-center justify-center text-white px-4">
    <div class="text-center transition-all duration-1000 {isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}">
      <h1 class="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-500 text-transparent bg-clip-text">
        The Most Savage
        <br />
        Discord Bot Ever
      </h1>
      <p class="text-xl md:text-2xl text-gray-400 mb-12">
        Brutally honest. Hilariously savage. No filter.
      </p>
      <a 
        href="https://discord.com/oauth2/authorize?client_id=1322242864553529344&permissions=274878105664&integration_type=0&scope=bot+applications.commands"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center px-8 py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transform hover:scale-105 transition-all duration-200"
      >
        <Zap class="w-5 h-5 mr-2" />
        Add to Discord
      </a>
    </div>
    
    <button 
      on:click={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
      class="absolute bottom-8 animate-bounce cursor-pointer text-gray-400 hover:text-white transition-colors"
      aria-label="Scroll to features"
    >
      <ChevronDown class="w-10 h-10" />
    </button>

    <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900 to-black -z-10" />
  </div>

  <!-- Features Section -->
  <div id="features" class="h-screen snap-start bg-black flex items-center justify-center px-4">
    <div class="max-w-7xl w-full">
      <div class="grid md:grid-cols-3 gap-8">
        {#each features as feature, index}
          <div 
            class="p-8 rounded-lg border border-gray-800 hover:border-gray-700 transition-all duration-500 transform hover:-translate-y-1 hover:bg-gray-900/50 {
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }"
            style="transition-delay: {index * 200}ms"
          >
            <div class="bg-gradient-to-r from-white to-gray-500 p-3 rounded-lg inline-block mb-4">
              <svelte:component this={feature.icon} class="w-8 h-8" />
            </div>
            <h3 class="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
            <p class="text-gray-400 text-lg">{feature.description}</p>
          </div>
        {/each}
      </div>
      
      <button 
        on:click={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
        class="mt-16 block mx-auto animate-bounce cursor-pointer text-gray-400 hover:text-white transition-colors"
        aria-label="Scroll to call to action"
      >
        <ChevronDown class="w-10 h-10" />
      </button>
    </div>
  </div>

  <!-- CTA Section -->
  <div id="cta" class="h-screen snap-start bg-black flex items-center justify-center px-4 relative overflow-hidden">
    <div class="text-center transition-all duration-1000 {isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}">
      <div class="relative z-10 max-w-3xl mx-auto">
        <h2 class="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-500 text-transparent bg-clip-text">
          Ready to Unleash the Savagery?
        </h2>
        <p class="text-xl text-gray-400 mb-8">
          Join servers experiencing the most brutally honest and hilariously savage bot on Discord.
          Your server will never be the same again.
        </p>
        <div class="space-y-4">
          <a 
            href="https://discord.com/oauth2/authorize?client_id=1322242864553529344&permissions=274878105664&integration_type=0&scope=bot+applications.commands"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center px-8 py-4 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transform hover:scale-105 transition-all duration-200"
          >
            <Zap class="w-6 h-6 mr-2" />
            Add Bot to Your Server
          </a>
        </div>
      </div>

      <!-- Animated background -->
      <div class="absolute inset-0 -z-10">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900 to-black" />
        <div class="absolute top-0 left-0 w-full h-full bg-black/50" />
      </div>
    </div>
  </div>
</div>

<style>
  :global(html) {
    scroll-behavior: smooth;
  }
</style>