import { defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
import theme from "./theme.js";
import { gitPlugin } from '@vuepress/plugin-git';
import { nprogressPlugin } from '@vuepress/plugin-nprogress';
import { docsearchPlugin } from '@vuepress/plugin-docsearch'

export default defineUserConfig({
  base: "/",
  plugins: [
    searchPlugin({
      // your options
    }),
    docsearchPlugin({
      // options
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
  head: [
    ['script', {},`
      window.chatwootSettings = {"position":"right","type":"standard","launcherTitle":"Chatea con nosotros"};
      (function(d,t) {
        var BASE_URL="https://app.chatwoot.com";
        var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
        g.src=BASE_URL+"/packs/js/sdk.js";
        g.defer = true;
        g.async = true;
        s.parentNode.insertBefore(g,s);
        g.onload=function(){
          window.chatwootSDK.run({
            websiteToken: 'qraJVeDwwabfvszTMPirCMut',
            baseUrl: BASE_URL
          })
        }
      })(document,"script");`
    ]
  ],

  theme,

  shouldPrefetch: false,
});
