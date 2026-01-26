// @ts-check
import { defineConfig } from "astro/config";
import aws from "astro-sst";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  // 'server' for dynamic, 'static' for static site
  output: "static",

  adapter: aws(),

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],
});