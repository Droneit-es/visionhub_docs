import { defineClientConfig } from "@vuepress/client";
import { setupPWA } from "/Users/garci/Desarrollo/visionhub-docs/visionhub_docs/node_modules/vuepress-plugin-pwa2/lib/client/composables/setup.js";
import SWUpdatePopup from "/Users/garci/Desarrollo/visionhub-docs/visionhub_docs/node_modules/vuepress-plugin-pwa2/lib/client/components/SWUpdatePopup.js";


export default defineClientConfig({
  setup: () => {
    setupPWA();
  },
  rootComponents: [
    SWUpdatePopup,
    
  ],
});
