<!-- src/lib/components/Header.svelte -->
<script lang="ts">
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
</script>

<header class="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center h-16">
      <div class="text-white font-bold text-xl">SavageBot</div>
      <nav>
        <ul class="flex space-x-8">
          <li>
            <button 
              on:click={() => scrollToSection('home')} 
              class="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </button>
          </li>
          <li>
            <button 
              on:click={() => scrollToSection('features')} 
              class="text-gray-300 hover:text-white transition-colors"
            >
              Features
            </button>
          </li>
          <li>
            <button 
              on:click={() => scrollToSection('cta')} 
              class="text-gray-300 hover:text-white transition-colors"
            >
              Get Started
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</header>