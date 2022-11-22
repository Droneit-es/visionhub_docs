import{_ as f}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as w,c as x,e as A,a as e,b as n,d as a,w as o,f as r,r as t}from"./app.0a706e82.js";const E={},B=e("p",null,"VuePress 主要从 Markdown 文件生成页面。因此，你可以使用它轻松生成文档或博客站点。",-1),y=e("p",null,"你应该创建和编写 Markdown 文件，以便 VuePress 可以根据文件结构将它们转换为不同的页面。",-1),z=e("h2",{id:"markdown-介绍",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#markdown-介绍","aria-hidden":"true"},"#"),n(" Markdown 介绍")],-1),V={href:"https://vuepress-theme-hope.github.io/v2/zh/cookbook/markdown/",target:"_blank",rel:"noopener noreferrer"},C={href:"https://vuepress-theme-hope.github.io/v2/zh/cookbook/markdown/demo.html",target:"_blank",rel:"noopener noreferrer"},I=e("h2",{id:"markdown-配置",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#markdown-配置","aria-hidden":"true"},"#"),n(" Markdown 配置")],-1),M=e("p",null,"VuePress 通过 Frontmatter 为每个 Markdown 页面引入配置。",-1),j={class:"custom-container info"},U=e("p",{class:"custom-container-title"},"Info",-1),P={href:"https://vuepress-theme-hope.github.io/v2/zh/cookbook/vuepress/page.html#front-matter",target:"_blank",rel:"noopener noreferrer"},D=e("h2",{id:"markdown-扩展",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#markdown-扩展","aria-hidden":"true"},"#"),n(" Markdown 扩展")],-1),F={href:"https://github.com/markdown-it/markdown-it",target:"_blank",rel:"noopener noreferrer"},G={href:"https://github.com/markdown-it/markdown-it#syntax-extensions",target:"_blank",rel:"noopener noreferrer"},T=e("h3",{id:"vuepress-扩展",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vuepress-扩展","aria-hidden":"true"},"#"),n(" VuePress 扩展")],-1),J=e("p",null,"为了丰富文档写作，VuePress 对 Markdown 语法进行了扩展。",-1),K={href:"https://vuepress-theme-hope.github.io/v2/zh/cookbook/vuepress/markdown.html",target:"_blank",rel:"noopener noreferrer"},L=e("h3",{id:"主题扩展",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#主题扩展","aria-hidden":"true"},"#"),n(" 主题扩展")],-1),X={href:"https://vuepress-theme-hope.github.io/v2/md-enhance/zh/",target:"_blank",rel:"noopener noreferrer"},Z=e("code",null,"vuepress-plugin-md-enhance",-1),H=r(`<h4 id="自定义容器" tabindex="-1"><a class="header-anchor" href="#自定义容器" aria-hidden="true">#</a> 自定义容器</h4><div><p>安全的在 Markdown 中使用 {{ variable }}。</p></div><div class="custom-container info"><p class="custom-container-title">自定义标题</p><p>信息容器，包含 <code>代码</code> 与 <a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%AE%B9%E5%99%A8">链接</a>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">自定义标题</p><p>提示容器</p></div><div class="custom-container warning"><p class="custom-container-title">自定义标题</p><p>警告容器</p></div><div class="custom-container danger"><p class="custom-container-title">自定义标题</p><p>危险容器</p></div><details class="custom-container details"><summary>自定义标题</summary><p>详情容器</p></details><details class="custom-container details"><summary>代码</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: v-pre

安全的在 Markdown 中使用 {{ variable }}。

:::

::: info 自定义标题

信息容器

:::

::: tip 自定义标题

提示容器

:::

::: warning 自定义标题

警告容器

:::

::: danger 自定义标题

危险容器

:::

::: details 自定义标题

详情容器

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,8),N={href:"https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/container.html",target:"_blank",rel:"noopener noreferrer"},S=e("h4",{id:"代码块",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#代码块","aria-hidden":"true"},"#"),n(" 代码块")],-1),Q=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"pnpm"),n(),e("span",{class:"token function"},"add"),n(),e("span",{class:"token parameter variable"},"-D"),n(` vuepress-theme-hope
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),W=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"yarn"),n(),e("span",{class:"token function"},"add"),n(),e("span",{class:"token parameter variable"},"-D"),n(` vuepress-theme-hope
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),Y=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"npm"),n(" i "),e("span",{class:"token parameter variable"},"-D"),n(` vuepress-theme-hope
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),O={href:"https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/code-tabs.html",target:"_blank",rel:"noopener noreferrer"},R=e("h4",{id:"上下角标",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#上下角标","aria-hidden":"true"},"#"),n(" 上下角标")],-1),q=e("p",null,[n("19"),e("sup",null,"th"),n(" H"),e("sub",null,"2"),n("O")],-1),$={href:"https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/sup-sub.html",target:"_blank",rel:"noopener noreferrer"},ee=e("h4",{id:"自定义对齐",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#自定义对齐","aria-hidden":"true"},"#"),n(" 自定义对齐")],-1),ne=e("div",{style:{"text-align":"center"}},[e("p",null,"我是居中的")],-1),ae=e("div",{style:{"text-align":"right"}},[e("p",null,"我在右对齐")],-1),se={href:"https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/align.html",target:"_blank",rel:"noopener noreferrer"},te=e("h4",{id:"attrs",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#attrs","aria-hidden":"true"},"#"),n(" Attrs")],-1),oe=e("p",null,[n("一个拥有 ID 的 "),e("strong",{id:"word"},"单次"),n("。")],-1),re={href:"https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/attrs.html",target:"_blank",rel:"noopener noreferrer"},ie=r('<h4 id="脚注" tabindex="-1"><a class="header-anchor" href="#脚注" aria-hidden="true">#</a> 脚注</h4><p>此文字有脚注<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup>.</p>',2),le={href:"https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/footnote.html",target:"_blank",rel:"noopener noreferrer"},de=e("h4",{id:"标记",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#标记","aria-hidden":"true"},"#"),n(" 标记")],-1),ce=e("p",null,[n("你可以标记 "),e("mark",null,"重要的内容"),n(" 。")],-1),he={href:"https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/mark.html",target:"_blank",rel:"noopener noreferrer"},ue=e("h4",{id:"任务列表",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#任务列表","aria-hidden":"true"},"#"),n(" 任务列表")],-1),pe={class:"task-list-container"},me=r('<li class="task-list-item"><p><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 计划 1</label></p></li><li class="task-list-item"><p><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> 计划 2</label></p></li>',2),ve={href:"https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/tasklist.html",target:"_blank",rel:"noopener noreferrer"},_e=e("h3",{id:"图片增强",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#图片增强","aria-hidden":"true"},"#"),n(" 图片增强")],-1),ke=e("p",null,"支持为图片设置颜色模式和大小",-1),be={href:"https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/image.html",target:"_blank",rel:"noopener noreferrer"},ge=e("h4",{id:"图表",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#图表","aria-hidden":"true"},"#"),n(" 图表")],-1),fe={href:"https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/chart.html",target:"_blank",rel:"noopener noreferrer"},we=e("h4",{id:"echarts",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#echarts","aria-hidden":"true"},"#"),n(" Echarts")],-1),xe={href:"https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/echarts.html",target:"_blank",rel:"noopener noreferrer"},Ae=e("h4",{id:"流程图",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#流程图","aria-hidden":"true"},"#"),n(" 流程图")],-1),Ee={href:"https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/flowchart.html",target:"_blank",rel:"noopener noreferrer"},Be=e("h4",{id:"mermaid",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#mermaid","aria-hidden":"true"},"#"),n(" Mermaid")],-1),ye={href:"https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/mermaid.html",target:"_blank",rel:"noopener noreferrer"},ze=e("h4",{id:"tex-语法",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#tex-语法","aria-hidden":"true"},"#"),n(" Tex 语法")],-1),Ve=e("p",null,"$$ \\frac {\\partial^r} {\\partial \\omega^r} \\left(\\frac {y^{\\omega}} {\\omega}\\right) = \\left(\\frac {y^{\\omega}} {\\omega}\\right) \\left{(\\log y)^r + \\sum_{i=1}^r \\frac {(-1)^i r \\cdots (r-i+1) (\\log y)^{r-i}} {\\omega^i} \\right} $$",-1),Ce={href:"https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/tex.html",target:"_blank",rel:"noopener noreferrer"},Ie=e("h4",{id:"导入文件",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#导入文件","aria-hidden":"true"},"#"),n(" 导入文件")],-1),Me={href:"https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/include.html",target:"_blank",rel:"noopener noreferrer"},je=e("h4",{id:"代码演示",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#代码演示","aria-hidden":"true"},"#"),n(" 代码演示")],-1),Ue=e("div",{class:"language-html line-numbers-mode","data-ext":"html"},[e("pre",{class:"language-html"},[e("code",null,[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),n("h1")]),e("span",{class:"token punctuation"},">")]),n("VuePress Theme Hope"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),n("h1")]),e("span",{class:"token punctuation"},">")]),n(`
`),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),n("p")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),n("span")]),n(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),n("very"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),n("非常"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),n("span")]),e("span",{class:"token punctuation"},">")]),n("强大!"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),n("p")]),e("span",{class:"token punctuation"},">")]),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),Pe=e("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[e("pre",{class:"language-javascript"},[e("code",null,[n("document"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"querySelector"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"#very"'),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"addEventListener"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"click"'),e("span",{class:"token punctuation"},","),n(),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),n(),e("span",{class:"token operator"},"=>"),n(),e("span",{class:"token punctuation"},"{"),n(`
  `),e("span",{class:"token function"},"alert"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"非常强大"'),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),n(`
`),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),De=e("div",{class:"language-css line-numbers-mode","data-ext":"css"},[e("pre",{class:"language-css"},[e("code",null,[e("span",{class:"token selector"},"span"),n(),e("span",{class:"token punctuation"},"{"),n(`
  `),e("span",{class:"token property"},"color"),e("span",{class:"token punctuation"},":"),n(" red"),e("span",{class:"token punctuation"},";"),n(`
`),e("span",{class:"token punctuation"},"}"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),Fe={href:"https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/demo.html",target:"_blank",rel:"noopener noreferrer"},Ge=e("h4",{id:"样式化",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#样式化","aria-hidden":"true"},"#"),n(" 样式化")],-1),Te={href:"https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/stylize.html",target:"_blank",rel:"noopener noreferrer"},Je=e("h4",{id:"交互演示",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#交互演示","aria-hidden":"true"},"#"),n(" 交互演示")],-1),Ke={href:"https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/playground.html",target:"_blank",rel:"noopener noreferrer"},Le=e("h4",{id:"vue-交互演示",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vue-交互演示","aria-hidden":"true"},"#"),n(" Vue 交互演示")],-1),Xe={href:"https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/vue-playground.html",target:"_blank",rel:"noopener noreferrer"},Ze=e("h4",{id:"幻灯片",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#幻灯片","aria-hidden":"true"},"#"),n(" 幻灯片")],-1),He=e("p",null,"@slidestart",-1),Ne=e("h2",{id:"幻灯片-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#幻灯片-1","aria-hidden":"true"},"#"),n(" 幻灯片 1")],-1),Se={href:"https://mrhope.site",target:"_blank",rel:"noopener noreferrer"},Qe=r(`<hr><h2 id="幻灯片-2" tabindex="-1"><a class="header-anchor" href="#幻灯片-2" aria-hidden="true">#</a> 幻灯片 2</h2><ul><li>项目 1</li><li>项目 2</li></ul><hr><h2 id="幻灯片-3-1" tabindex="-1"><a class="header-anchor" href="#幻灯片-3-1" aria-hidden="true">#</a> 幻灯片 3.1</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>--</p><h2 id="幻灯片-3-2" tabindex="-1"><a class="header-anchor" href="#幻灯片-3-2" aria-hidden="true">#</a> 幻灯片 3.2</h2><p>$$ J(\\theta_0,\\theta_1) = \\sum_{i=0} $$</p><p>@slideend</p>`,10),We={href:"https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/presentation.html",target:"_blank",rel:"noopener noreferrer"},Ye=r('<hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p>这是脚注内容 <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p></li></ol></section>',2);function Oe(Re,qe){const s=t("ExternalLinkIcon"),h=t("CodeTabs"),u=t("ChartJS"),p=t("ECharts"),m=t("FlowChart"),v=t("Mermaid"),i=t("RouterLink"),_=t("CodeDemo"),k=t("Badge"),b=t("Playground"),g=t("VuePlayground");return w(),x("div",null,[B,y,A(" more "),z,e("p",null,[n("如果你是一个新手，还不会编写 Markdown，请先阅读 "),e("a",V,[n("Markdown 介绍"),a(s)]),n(" 和 "),e("a",C,[n("Markdown 演示"),a(s)]),n("。")]),I,M,e("div",j,[U,e("p",null,[n("Frontmatter 是 VuePress 中很重要的一个概念，如果你不了解它，你需要阅读 "),e("a",P,[n("Frontmatter 介绍"),a(s)]),n("。")])]),D,e("p",null,[n("VuePress 会使用 "),e("a",F,[n("markdown-it"),a(s)]),n(" 来解析 Markdown 内容，因此可以借助于 markdown-it 插件来实现 "),e("a",G,[n("语法扩展"),a(s)]),n(" 。")]),T,J,e("p",null,[n("关于这些扩展，请阅读 "),e("a",K,[n("VuePress 中的 Markdown 扩展"),a(s)]),n("。")]),L,e("p",null,[n("通过 "),e("a",X,[Z,a(s)]),n("，主题扩展了更多 Markdown 语法，提供更加丰富的写作功能。")]),H,e("ul",null,[e("li",null,[e("a",N,[n("查看详情"),a(s)])])]),S,a(h,{id:"92",data:[{title:"pnpm"},{title:"yarn"},{title:"npm"}],active:2},{tab0:o(({title:l,value:d,isActive:c})=>[Q]),tab1:o(({title:l,value:d,isActive:c})=>[W]),tab2:o(({title:l,value:d,isActive:c})=>[Y]),_:1}),e("ul",null,[e("li",null,[e("a",O,[n("查看详情"),a(s)])])]),R,q,e("ul",null,[e("li",null,[e("a",$,[n("查看详情"),a(s)])])]),ee,ne,ae,e("ul",null,[e("li",null,[e("a",se,[n("查看详情"),a(s)])])]),te,oe,e("ul",null,[e("li",null,[e("a",re,[n("查看详情"),a(s)])])]),ie,e("ul",null,[e("li",null,[e("a",le,[n("查看详情"),a(s)])])]),de,ce,e("ul",null,[e("li",null,[e("a",he,[n("查看详情"),a(s)])])]),ue,e("ul",pe,[me,e("li",null,[e("p",null,[e("a",ve,[n("查看详情"),a(s)])])])]),_e,ke,e("ul",null,[e("li",null,[e("a",be,[n("查看详情"),a(s)])])]),ge,a(u,{id:"chart-218",config:"eNptULsOgjAU3fmKppMmaETDoKufYRgKNIRYKYGaSAyLg5sjk6O7cfWHMP6F95byMGFp2vO6t+dsEUJVkXK6ITQPmFI8ozaCIVMMQBSYV85VDshOI8QwmhXM5wIT6urxubzr6lXfnt/7VScZjclr3TqB0BNAM2dhE1rAbUHK3tHxLeuM053bHXfP3Zafg6ITeIPdfBbso0wek3ArhczwJ1nkT5YuWNdrmzir5ZQaeZPgwamnUZmqWCZYjKkKWhS8fwOCawzaausWccJZ07ZhUpnHmIasL5WSh/+peJZWaf0ALadm1Q==",title:"%E4%B8%80%E4%B8%AA%E6%95%A3%E7%82%B9%E5%9B%BE%E6%A1%88%E4%BE%8B",type:"json"}),e("ul",null,[e("li",null,[e("a",fe,[n("查看详情"),a(s)])])]),we,a(p,{id:"echarts-231",config:"eNqr5lJQUKpwrMgsVrJSAHGA3JLKglQgTyk5sSQ1Pb+oUkkHIp6SWJIIFI9W8s3PU9JRUAopTQVR4akpYF5GKYhyK8oEUcGJJWCqNE8pFqi7FmSEUiV2e8oSc4AmwVUVpxZlpoKURYOVQRQjWW9oaqCjYGQMIoxMgIShhY6CobEpkDAxB3LNDGIh7kWyISczD2wB0AogGctVywUA9j06jQ==",title:"%E4%B8%80%E4%B8%AA%E6%8A%98%E7%BA%BF%E5%9B%BE%E6%A1%88%E4%BE%8B"}),e("ul",null,[e("li",null,[e("a",xe,[n("查看详情"),a(s)])])]),Ae,a(m,{id:"flowchart-244",code:"eNpLzs9LsbUDkZklmfl5VgrPZqx/OmHZs87lLxb2PJvc+2TvHHuugqL85NTiYlu7/ILUokSoOrAcV6qtXWpeipXC892Tn82dz8UFMkmjMrVYU9cOqkvXLhUimpcPFEzlAgD7FTFE",preset:"vue"}),e("ul",null,[e("li",null,[e("a",Ee,[n("查看详情"),a(s)])])]),Be,a(v,{id:"mermaid-255",code:"eNpLy8kvT85ILCpRCHHiUgCCZENdXbtEIzC7uDQpvSixIEMhPy8VLJCIJJmal4KqqKQ8HyyQBFKUhEtRRlEqxCywRcmoyoD2KABF4UaBVaOKlOeD+UCNAP9rL9s="}),e("ul",null,[e("li",null,[e("a",ye,[n("查看详情"),a(s)])])]),ze,Ve,e("ul",null,[e("li",null,[e("a",Ce,[n("查看详情"),a(s)])])]),Ie,e("ul",null,[e("li",null,[e("p",null,[a(i,{to:"/zh/demo/markdown.html"},{default:o(()=>[n("Markdown 展示")]),_:1})])]),e("li",null,[e("p",null,[a(i,{to:"/zh/demo/page.html"},{default:o(()=>[n("页面展示")]),_:1})])]),e("li",null,[e("p",null,[a(i,{to:"/zh/demo/disable.html"},{default:o(()=>[n("禁用展示")]),_:1})])]),e("li",null,[e("p",null,[a(i,{to:"/zh/demo/encrypt.html"},{default:o(()=>[n("加密展示")]),_:1})])])]),e("ul",null,[e("li",null,[e("a",Me,[n("查看详情"),a(s)])])]),je,a(_,{id:"code-demo-313",type:"normal",title:"%E4%B8%80%E4%B8%AA%E6%99%AE%E9%80%9A%20Demo",code:"eNoljrGKAjEQhl9lbq5REJdrvZju4IorDhSrNEsysKvZZE2ygoiPopXgK4j4Olv4Fk7cZor5v3++OWCVGoszFNWXXHX0HyhGWFbUEPz6lkTBe+VEK0VsSwe1mSvcUdgrlM/Tub/dRJED2T/u/eX6IYqWcZzgOvJR43XXkEvTbceVBVnSyYeRws/hxHhaGvOzY+Kvjokc5UzbWm8UTmA0hrmEg3IApaWQOBuUg4vr38od82Cfjln4/vHd0N76MINAJkOMHF8ck1dC"},{default:o(()=>[Ue,Pe,De]),_:1}),e("ul",null,[e("li",null,[e("a",Fe,[n("查看详情"),a(s)])])]),Ge,e("p",null,[n("向 Mr.Hope 捐赠一杯咖啡。 "),a(k,{type:"tip"},{default:o(()=>[n("Recommended")]),_:1})]),e("ul",null,[e("li",null,[e("a",Te,[n("查看详情"),a(s)])])]),Je,a(b,{key:"18f72856",title:"TS%20%E6%A1%88%E4%BE%8B",link:"https%3A%2F%2Fwww.typescriptlang.org%2Fplay%23code%2FMYewdgzgLgBAthA5jAvDARACwKYBtcgwDuIATrgCboDcAULaJLBAA7YCGA1qjABQKIAXDGikAlmEQBKVAD4YjCCFzYAdAUT8kUurVYdOW6XSA"}),e("ul",null,[e("li",null,[e("a",Ke,[n("查看详情"),a(s)])])]),Le,a(g,{title:"Vue%20%E4%BA%A4%E4%BA%92%E6%BC%94%E7%A4%BA",key:"2d733c58",settings:"%7B%7D",files:"eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cD5cbmltcG9ydCB7IHJlZiB9IGZyb20gXCJ2dWVcIjtcblxuY29uc3QgbXNnID0gcmVmKFwiSGVsbG8gV29ybGQhXCIpO1xuPC9zY3JpcHQ%2BXG5cbjx0ZW1wbGF0ZT5cbiAgPGgxPnt7IG1zZyB9fTwvaDE%2BXG4gIDxpbnB1dCB2LW1vZGVsPVwibXNnXCIgLz5cbjwvdGVtcGxhdGU%2BXG4ifQ%3D%3D"}),e("ul",null,[e("li",null,[e("a",Xe,[n("查看详情"),a(s)])])]),Ze,He,Ne,e("p",null,[n("一个有文字和 "),e("a",Se,[n("链接"),a(s)]),n(" 的段落")]),Qe,e("ul",null,[e("li",null,[e("a",We,[n("查看详情"),a(s)])])]),Ye])}const nn=f(E,[["render",Oe],["__file","markdown.html.vue"]]);export{nn as default};