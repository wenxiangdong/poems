import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    "./src/**/*.{js,jsx,ts,tsx,astro}",
    "./pages/**/*.{js,jsx,ts,tsx,astro}",
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      semanticTokens: {
        colors: {
          colorTextPrimary: {
            value: {
              base: '{colors.black}',
              _osDark: '{colors.white}'
            }
          },
          colorBg: {
            value: {
              base: '{colors.gray.50}',
              _osDark: '#3e3841'
            }
          }
        }
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
  globalCss: {
    body: {
      backgroundColor: "{colors.colorBg}",
      color: "{colors.colorTextPrimary}"
    }
  }
});
