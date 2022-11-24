export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"en-US\",\"title\":\"\",\"description\":\"\",\"head\":[[\"script\",{},\"\\n      window.chatwootSettings = {\\\"position\\\":\\\"right\\\",\\\"type\\\":\\\"standard\\\",\\\"launcherTitle\\\":\\\"Chatea con nosotros\\\"};\\n      (function(d,t) {\\n        var BASE_URL=\\\"https://app.chatwoot.com\\\";\\n        var g=d.createElement(t),s=d.getElementsByTagName(t)[0];\\n        g.src=BASE_URL+\\\"/packs/js/sdk.js\\\";\\n        g.defer = true;\\n        g.async = true;\\n        s.parentNode.insertBefore(g,s);\\n        g.onload=function(){\\n          window.chatwootSDK.run({\\n            websiteToken: 'qraJVeDwwabfvszTMPirCMut',\\n            baseUrl: BASE_URL\\n          })\\n        }\\n      })(document,\\\"script\\\");\"],[\"link\",{\"rel\":\"icon\",\"href\":\"/favicon.ico\"}],[\"link\",{\"rel\":\"icon\",\"href\":\"/assets/icon/chrome-mask-512.png\",\"type\":\"image/png\",\"sizes\":\"512x512\"}],[\"link\",{\"rel\":\"icon\",\"href\":\"/assets/icon/chrome-mask-192.png\",\"type\":\"image/png\",\"sizes\":\"192x192\"}],[\"link\",{\"rel\":\"icon\",\"href\":\"/assets/icon/chrome-512.png\",\"type\":\"image/png\",\"sizes\":\"512x512\"}],[\"link\",{\"rel\":\"icon\",\"href\":\"/assets/icon/chrome-192.png\",\"type\":\"image/png\",\"sizes\":\"192x192\"}],[\"link\",{\"rel\":\"manifest\",\"href\":\"/manifest.webmanifest\",\"crossorigin\":\"use-credentials\"}],[\"meta\",{\"name\":\"theme-color\",\"content\":\"#46bd87\"}],[\"link\",{\"rel\":\"apple-touch-icon\",\"href\":\"/assets/icon/apple-icon-152.png\"}],[\"meta\",{\"name\":\"apple-mobile-web-app-capable\",\"content\":\"yes\"}],[\"meta\",{\"name\":\"apple-mobile-web-app-status-bar-style\",\"content\":\"black\"}],[\"meta\",{\"name\":\"msapplication-TileImage\",\"content\":\"/assets/icon/ms-icon-144.png\"}],[\"meta\",{\"name\":\"msapplication-TileColor\",\"content\":\"#ffffff\"}],[\"meta\",{\"name\":\"viewport\",\"content\":\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover\"}]],\"locales\":{\"/\":{\"lang\":\"en-US\",\"title\":\"Visionhub docs\",\"description\":\"A docs demo for vuepress-theme-hope\"},\"/es/\":{\"lang\":\"es-ES\",\"title\":\"Visionhub docs\",\"description\":\"vuepress-theme-hope 的文档演示\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
