import { defineConfig } from 'astro/config';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://wenxiangdong.github.io",
  base: 'poems',
  integrations: [mdx()]
});