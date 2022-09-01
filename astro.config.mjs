import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";
import image from "@astrojs/image";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  vite: {
    ssr: {
      external: ['svgo']
    }
  },
  integrations: [react(), svelte(), image(), mdx()]
});