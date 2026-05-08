import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    tailwind({ entrypoint: '/src/styles/global.css' }),
  ],
  output: 'static',
});
