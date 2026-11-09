import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://csashoponline.com',
  trailingSlash: 'always',
  integrations: [
    tailwind(),
  ],
});