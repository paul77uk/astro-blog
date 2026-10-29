// @ts-check
import { defineConfig } from "astro/config";
import { remarkCallout } from "@r4ai/remark-callout";
import cloudflare from "@astrojs/cloudflare";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare(),
  integrations: [mdx()],
  markdown: {
    remarkPlugins: [remarkCallout],
  },
});
