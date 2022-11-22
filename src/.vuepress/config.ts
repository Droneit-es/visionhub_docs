import { defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
import theme from "./theme.js";
import { gitPlugin } from '@vuepress/plugin-git';
import { nprogressPlugin } from '@vuepress/plugin-nprogress';

export default defineUserConfig({
  base: "/",
  plugins: [
    searchPlugin({
      // your options
    }),
    gitPlugin({
      // options
    }),
    nprogressPlugin(),
  ],
  locales: {
    "/": {
      lang: "en-US",
      title: "Visionhub docs",
      description: "A docs demo for vuepress-theme-hope",
    },
    "/es/": {
      lang: "es-ES",
      title: "Visionhub docs",
      description: "vuepress-theme-hope 的文档演示",
    },
  },

  theme,

  shouldPrefetch: false,
});
