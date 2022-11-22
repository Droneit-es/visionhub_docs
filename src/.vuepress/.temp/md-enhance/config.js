import { defineClientConfig } from "@vuepress/client";
import ChartJS from "/Users/garci/Desarrollo/visionhub-docs/visionhub_docs/node_modules/vuepress-plugin-md-enhance/lib/client/components/ChartJS.js";
import CodeTabs from "/Users/garci/Desarrollo/visionhub-docs/visionhub_docs/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import "/Users/garci/Desarrollo/visionhub-docs/visionhub_docs/node_modules/vuepress-plugin-md-enhance/lib/client/styles/container/index.scss";
import CodeDemo from "/Users/garci/Desarrollo/visionhub-docs/visionhub_docs/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import ECharts from "/Users/garci/Desarrollo/visionhub-docs/visionhub_docs/node_modules/vuepress-plugin-md-enhance/lib/client/components/ECharts.js";
import FlowChart from "/Users/garci/Desarrollo/visionhub-docs/visionhub_docs/node_modules/vuepress-plugin-md-enhance/lib/client/components/FlowChart.js";
import "/Users/garci/Desarrollo/visionhub-docs/visionhub_docs/node_modules/vuepress-plugin-md-enhance/lib/client/styles/footnote.scss";
import "/Users/garci/Desarrollo/visionhub-docs/visionhub_docs/node_modules/vuepress-plugin-md-enhance/lib/client/styles/image-mark.scss";
import "/Users/garci/Desarrollo/visionhub-docs/visionhub_docs/node_modules/vuepress-plugin-md-enhance/lib/client/styles/image-title.scss";
import Mermaid from "/Users/garci/Desarrollo/visionhub-docs/visionhub_docs/node_modules/vuepress-plugin-md-enhance/lib/client/components/Mermaid.js";
import Playground from "/Users/garci/Desarrollo/visionhub-docs/visionhub_docs/node_modules/vuepress-plugin-md-enhance/lib/client/components/Playground.js";
import Tabs from "/Users/garci/Desarrollo/visionhub-docs/visionhub_docs/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";
import "/Users/garci/Desarrollo/visionhub-docs/visionhub_docs/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";
import { defineAsyncComponent } from "vue";


export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("ChartJS", ChartJS);
    app.component("CodeTabs", CodeTabs);
    app.component("CodeDemo", CodeDemo);
    app.component("ECharts", ECharts);
    app.component("FlowChart", FlowChart);
    app.component("Mermaid", Mermaid);
    app.component("Playground", Playground);
    app.component("Tabs", Tabs);
    app.component("VuePlayground", defineAsyncComponent(() => import("/Users/garci/Desarrollo/visionhub-docs/visionhub_docs/node_modules/vuepress-plugin-md-enhance/lib/client/components/VuePlayground.js")));
        
  },
});
