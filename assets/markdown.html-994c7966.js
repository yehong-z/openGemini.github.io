import{_ as b,X as w,Y as z,a2 as x,Z as s,a1 as e,$ as a,a0 as l,a3 as i,C as n}from"./framework-a4aa538b.js";const A={},E=s("p",null,"VuePress 主要从 Markdown 文件生成页面。因此，你可以使用它轻松生成文档或博客站点。",-1),B=s("p",null,"你应该创建和编写 Markdown 文件，以便 VuePress 可以根据文件结构将它们转换为不同的页面。",-1),j=s("h2",{id:"markdown-介绍",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#markdown-介绍","aria-hidden":"true"},"#"),e(" Markdown 介绍")],-1),V={href:"https://theme-hope.vuejs.press/zh/cookbook/markdown/",target:"_blank",rel:"noopener noreferrer"},U={href:"https://theme-hope.vuejs.press/zh/cookbook/markdown/demo.html",target:"_blank",rel:"noopener noreferrer"},C=s("h2",{id:"markdown-配置",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#markdown-配置","aria-hidden":"true"},"#"),e(" Markdown 配置")],-1),M=s("p",null,"VuePress 通过 Frontmatter 为每个 Markdown 页面引入配置。",-1),I={class:"hint-container info"},J=s("p",{class:"hint-container-title"},"相关信息",-1),P={href:"https://theme-hope.vuejs.press/zh/cookbook/vuepress/page.html#front-matter",target:"_blank",rel:"noopener noreferrer"},F=s("h2",{id:"markdown-扩展",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#markdown-扩展","aria-hidden":"true"},"#"),e(" Markdown 扩展")],-1),G={href:"https://github.com/markdown-it/markdown-it",target:"_blank",rel:"noopener noreferrer"},X={href:"https://github.com/markdown-it/markdown-it#syntax-extensions",target:"_blank",rel:"noopener noreferrer"},D=s("h3",{id:"vuepress-扩展",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#vuepress-扩展","aria-hidden":"true"},"#"),e(" VuePress 扩展")],-1),Z=s("p",null,"为了丰富文档写作，VuePress 对 Markdown 语法进行了扩展。",-1),Y={href:"https://theme-hope.vuejs.press/zh/cookbook/vuepress/markdown.html",target:"_blank",rel:"noopener noreferrer"},K=s("h3",{id:"主题扩展",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#主题扩展","aria-hidden":"true"},"#"),e(" 主题扩展")],-1),L={href:"https://theme-hope.vuejs.press/md-enhance/zh/",target:"_blank",rel:"noopener noreferrer"},S=s("code",null,"vuepress-plugin-md-enhance",-1),T=i(`<h4 id="自定义容器" tabindex="-1"><a class="header-anchor" href="#自定义容器" aria-hidden="true">#</a> 自定义容器</h4><div><p>安全的在 Markdown 中使用 {{ variable }}。</p></div><div class="hint-container info"><p class="hint-container-title">自定义标题</p><p>信息容器，包含 <code>代码</code> 与 <a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%AE%B9%E5%99%A8">链接</a>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><div class="hint-container tip"><p class="hint-container-title">自定义标题</p><p>提示容器</p></div><div class="hint-container warning"><p class="hint-container-title">自定义标题</p><p>警告容器</p></div><div class="hint-container danger"><p class="hint-container-title">自定义标题</p><p>危险容器</p></div><details class="hint-container details"><summary>自定义标题</summary><p>详情容器</p></details>`,7),W={href:"https://theme-hope.vuejs.press/zh/guide/markdown/container.html",target:"_blank",rel:"noopener noreferrer"},q=s("h4",{id:"代码块",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#代码块","aria-hidden":"true"},"#"),e(" 代码块")],-1),H=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"pnpm"),e(),s("span",{class:"token function"},"add"),e(),s("span",{class:"token parameter variable"},"-D"),e(` vuepress-theme-hope
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),Q=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"yarn"),e(),s("span",{class:"token function"},"add"),e(),s("span",{class:"token parameter variable"},"-D"),e(` vuepress-theme-hope
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),O=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"npm"),e(" i "),s("span",{class:"token parameter variable"},"-D"),e(` vuepress-theme-hope
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),R={href:"https://theme-hope.vuejs.press/zh/guide/markdown/code-tabs.html",target:"_blank",rel:"noopener noreferrer"},N=s("h4",{id:"上下角标",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#上下角标","aria-hidden":"true"},"#"),e(" 上下角标")],-1),$=s("p",null,[e("19"),s("sup",null,"th"),e(" H"),s("sub",null,"2"),e("O")],-1),ss={href:"https://theme-hope.vuejs.press/zh/guide/markdown/sup-sub.html",target:"_blank",rel:"noopener noreferrer"},es=s("h4",{id:"自定义对齐",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#自定义对齐","aria-hidden":"true"},"#"),e(" 自定义对齐")],-1),as=s("div",{style:{"text-align":"center"}},[s("p",null,"我是居中的")],-1),ts=s("div",{style:{"text-align":"right"}},[s("p",null,"我在右对齐")],-1),ns={href:"https://theme-hope.vuejs.press/zh/guide/markdown/align.html",target:"_blank",rel:"noopener noreferrer"},ls=s("h4",{id:"attrs",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#attrs","aria-hidden":"true"},"#"),e(" Attrs")],-1),rs=s("p",null,[e("一个拥有 ID 的 "),s("strong",{id:"word"},"单词"),e("。")],-1),is={href:"https://theme-hope.vuejs.press/zh/guide/markdown/attrs.html",target:"_blank",rel:"noopener noreferrer"},os=i('<h4 id="脚注" tabindex="-1"><a class="header-anchor" href="#脚注" aria-hidden="true">#</a> 脚注</h4><p>此文字有脚注<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup>.</p>',2),cs={href:"https://theme-hope.vuejs.press/zh/guide/markdown/footnote.html",target:"_blank",rel:"noopener noreferrer"},ps=s("h4",{id:"标记",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#标记","aria-hidden":"true"},"#"),e(" 标记")],-1),ms=s("p",null,[e("你可以标记 "),s("mark",null,"重要的内容"),e(" 。")],-1),hs={href:"https://theme-hope.vuejs.press/zh/guide/markdown/mark.html",target:"_blank",rel:"noopener noreferrer"},ds=s("h4",{id:"任务列表",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#任务列表","aria-hidden":"true"},"#"),e(" 任务列表")],-1),us={class:"task-list-container"},gs=i('<li class="task-list-item"><p><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 计划 1</label></p></li><li class="task-list-item"><p><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> 计划 2</label></p></li>',2),ks={href:"https://theme-hope.vuejs.press/zh/guide/markdown/tasklist.html",target:"_blank",rel:"noopener noreferrer"},_s=s("h3",{id:"图片增强",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#图片增强","aria-hidden":"true"},"#"),e(" 图片增强")],-1),vs=s("p",null,"支持为图片设置颜色模式和大小",-1),ys={href:"https://theme-hope.vuejs.press/zh/guide/markdown/image.html",target:"_blank",rel:"noopener noreferrer"},fs=s("h4",{id:"图表",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#图表","aria-hidden":"true"},"#"),e(" 图表")],-1),bs={href:"https://theme-hope.vuejs.press/zh/guide/markdown/chart.html",target:"_blank",rel:"noopener noreferrer"},ws=s("h4",{id:"echarts",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#echarts","aria-hidden":"true"},"#"),e(" Echarts")],-1),zs={href:"https://theme-hope.vuejs.press/zh/guide/markdown/echarts.html",target:"_blank",rel:"noopener noreferrer"},xs=s("h4",{id:"流程图",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#流程图","aria-hidden":"true"},"#"),e(" 流程图")],-1),As={href:"https://theme-hope.vuejs.press/zh/guide/markdown/flowchart.html",target:"_blank",rel:"noopener noreferrer"},Es=s("h4",{id:"mermaid",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#mermaid","aria-hidden":"true"},"#"),e(" Mermaid")],-1),Bs={href:"https://theme-hope.vuejs.press/zh/guide/markdown/mermaid.html",target:"_blank",rel:"noopener noreferrer"},js=s("h4",{id:"tex-语法",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#tex-语法","aria-hidden":"true"},"#"),e(" Tex 语法")],-1),Vs=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mfrac",null,[s("msup",null,[s("mi",{mathvariant:"normal"},"∂"),s("mi",null,"r")]),s("mrow",null,[s("mi",{mathvariant:"normal"},"∂"),s("msup",null,[s("mi",null,"ω"),s("mi",null,"r")])])]),s("mrow",null,[s("mo",{fence:"true"},"("),s("mfrac",null,[s("msup",null,[s("mi",null,"y"),s("mi",null,"ω")]),s("mi",null,"ω")]),s("mo",{fence:"true"},")")]),s("mo",null,"="),s("mrow",null,[s("mo",{fence:"true"},"("),s("mfrac",null,[s("msup",null,[s("mi",null,"y"),s("mi",null,"ω")]),s("mi",null,"ω")]),s("mo",{fence:"true"},")")]),s("mrow",null,[s("mo",{fence:"true"},"{"),s("mo",{stretchy:"false"},"("),s("mi",null,"log"),s("mo",null,"⁡"),s("mi",null,"y"),s("msup",null,[s("mo",{stretchy:"false"},")"),s("mi",null,"r")]),s("mo",null,"+"),s("munderover",null,[s("mo",null,"∑"),s("mrow",null,[s("mi",null,"i"),s("mo",null,"="),s("mn",null,"1")]),s("mi",null,"r")]),s("mfrac",null,[s("mrow",null,[s("mo",{stretchy:"false"},"("),s("mo",null,"−"),s("mn",null,"1"),s("msup",null,[s("mo",{stretchy:"false"},")"),s("mi",null,"i")]),s("mi",null,"r"),s("mo",null,"⋯"),s("mo",{stretchy:"false"},"("),s("mi",null,"r"),s("mo",null,"−"),s("mi",null,"i"),s("mo",null,"+"),s("mn",null,"1"),s("mo",{stretchy:"false"},")"),s("mo",{stretchy:"false"},"("),s("mi",null,"log"),s("mo",null,"⁡"),s("mi",null,"y"),s("msup",null,[s("mo",{stretchy:"false"},")"),s("mrow",null,[s("mi",null,"r"),s("mo",null,"−"),s("mi",null,"i")])])]),s("msup",null,[s("mi",null,"ω"),s("mi",null,"i")])]),s("mo",{fence:"true"},"}")])]),s("annotation",{encoding:"application/x-tex"}," \\frac {\\partial^r} {\\partial \\omega^r} \\left(\\frac {y^{\\omega}} {\\omega}\\right) = \\left(\\frac {y^{\\omega}} {\\omega}\\right) \\left\\{(\\log y)^r + \\sum_{i=1}^r \\frac {(-1)^i r \\cdots (r-i+1) (\\log y)^{r-i}} {\\omega^i} \\right\\} ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.4em","vertical-align":"-0.95em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.3714em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord",style:{"margin-right":"0.05556em"}},"∂"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"ω"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.5904em"}},[s("span",{style:{top:"-2.989em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02778em"}},"r")])])])])])])])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord",style:{"margin-right":"0.05556em"}},"∂"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6644em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02778em"}},"r")])])])])])])])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.686em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"minner"},[s("span",{class:"mopen delimcenter",style:{top:"0em"}},[s("span",{class:"delimsizing size3"},"(")]),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.3414em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"ω")])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6644em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.03588em"}},"ω")])])])])])])])])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.686em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mclose delimcenter",style:{top:"0em"}},[s("span",{class:"delimsizing size3"},")")])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"3.0277em","vertical-align":"-1.2777em"}}),s("span",{class:"minner"},[s("span",{class:"mopen delimcenter",style:{top:"0em"}},[s("span",{class:"delimsizing size3"},"(")]),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.3414em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"ω")])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6644em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.03588em"}},"ω")])])])])])])])])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.686em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mclose delimcenter",style:{top:"0em"}},[s("span",{class:"delimsizing size3"},")")])]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"minner"},[s("span",{class:"mopen delimcenter",style:{top:"0em"}},[s("span",{class:"delimsizing size4"},"{")]),s("span",{class:"mopen"},"("),s("span",{class:"mop"},[e("lo"),s("span",{style:{"margin-right":"0.01389em"}},"g")]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"mclose"},[s("span",{class:"mclose"},")"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.7144em"}},[s("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02778em"}},"r")])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mop op-limits"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.6514em"}},[s("span",{style:{top:"-1.8723em","margin-left":"0em"}},[s("span",{class:"pstrut",style:{height:"3.05em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"i"),s("span",{class:"mrel mtight"},"="),s("span",{class:"mord mtight"},"1")])])]),s("span",{style:{top:"-3.05em"}},[s("span",{class:"pstrut",style:{height:"3.05em"}}),s("span",null,[s("span",{class:"mop op-symbol large-op"},"∑")])]),s("span",{style:{top:"-4.3em","margin-left":"0em"}},[s("span",{class:"pstrut",style:{height:"3.05em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02778em"}},"r")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.2777em"}},[s("span")])])])]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.5017em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"ω"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.7507em"}},[s("span",{style:{top:"-2.989em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"i")])])])])])])])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mopen"},"("),s("span",{class:"mord"},"−"),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},[s("span",{class:"mclose"},")"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8247em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"i")])])])])])])]),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"r"),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"minner"},"⋯"),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"r"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},")"),s("span",{class:"mopen"},"("),s("span",{class:"mop"},[e("lo"),s("span",{style:{"margin-right":"0.01389em"}},"g")]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"mclose"},[s("span",{class:"mclose"},")"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8247em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02778em"}},"r"),s("span",{class:"mbin mtight"},"−"),s("span",{class:"mord mathnormal mtight"},"i")])])])])])])])])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.686em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mclose delimcenter",style:{top:"0em"}},[s("span",{class:"delimsizing size4"},"}")])])])])])])],-1),Us={href:"https://theme-hope.vuejs.press/zh/guide/markdown/tex.html",target:"_blank",rel:"noopener noreferrer"},Cs=s("h4",{id:"导入文件",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#导入文件","aria-hidden":"true"},"#"),e(" 导入文件")],-1),Ms={href:"https://theme-hope.vuejs.press/zh/guide/markdown/include.html",target:"_blank",rel:"noopener noreferrer"},Is=s("h4",{id:"代码演示",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#代码演示","aria-hidden":"true"},"#"),e(" 代码演示")],-1),Js=s("div",{class:"language-html line-numbers-mode","data-ext":"html"},[s("pre",{class:"language-html"},[s("code",null,[s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),e("h1")]),s("span",{class:"token punctuation"},">")]),e("VuePress Theme Hope"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),e("h1")]),s("span",{class:"token punctuation"},">")]),e(`
`),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),e("p")]),s("span",{class:"token punctuation"},">")]),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),e("span")]),e(),s("span",{class:"token attr-name"},"id"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),e("very"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),e("非常"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),e("span")]),s("span",{class:"token punctuation"},">")]),e("强大!"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),e("p")]),s("span",{class:"token punctuation"},">")]),e(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),Ps=s("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[s("pre",{class:"language-javascript"},[s("code",null,[e("document"),s("span",{class:"token punctuation"},"."),s("span",{class:"token function"},"querySelector"),s("span",{class:"token punctuation"},"("),s("span",{class:"token string"},'"#very"'),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},"."),s("span",{class:"token function"},"addEventListener"),s("span",{class:"token punctuation"},"("),s("span",{class:"token string"},'"click"'),s("span",{class:"token punctuation"},","),e(),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),e(),s("span",{class:"token operator"},"=>"),e(),s("span",{class:"token punctuation"},"{"),e(`
  `),s("span",{class:"token function"},"alert"),s("span",{class:"token punctuation"},"("),s("span",{class:"token string"},'"非常强大"'),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";"),e(`
`),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";"),e(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),Fs=s("div",{class:"language-css line-numbers-mode","data-ext":"css"},[s("pre",{class:"language-css"},[s("code",null,[s("span",{class:"token selector"},"span"),e(),s("span",{class:"token punctuation"},"{"),e(`
  `),s("span",{class:"token property"},"color"),s("span",{class:"token punctuation"},":"),e(" red"),s("span",{class:"token punctuation"},";"),e(`
`),s("span",{class:"token punctuation"},"}"),e(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),Gs={href:"https://theme-hope.vuejs.press/zh/guide/markdown/demo.html",target:"_blank",rel:"noopener noreferrer"},Xs=s("h4",{id:"样式化",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#样式化","aria-hidden":"true"},"#"),e(" 样式化")],-1),Ds={href:"https://theme-hope.vuejs.press/zh/guide/markdown/stylize.html",target:"_blank",rel:"noopener noreferrer"},Zs=s("h4",{id:"交互演示",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#交互演示","aria-hidden":"true"},"#"),e(" 交互演示")],-1),Ys={href:"https://theme-hope.vuejs.press/zh/guide/markdown/playground.html",target:"_blank",rel:"noopener noreferrer"},Ks=s("h4",{id:"vue-交互演示",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#vue-交互演示","aria-hidden":"true"},"#"),e(" Vue 交互演示")],-1),Ls={href:"https://theme-hope.vuejs.press/zh/guide/markdown/vue-playground.html",target:"_blank",rel:"noopener noreferrer"},Ss=s("h4",{id:"幻灯片",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#幻灯片","aria-hidden":"true"},"#"),e(" 幻灯片")],-1),Ts={href:"https://theme-hope.vuejs.press/zh/guide/markdown/presentation.html",target:"_blank",rel:"noopener noreferrer"},Ws=i('<hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p>这是脚注内容 <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p></li></ol></section>',2);function qs(Hs,Qs){const t=n("ExternalLinkIcon"),m=n("CodeTabs"),h=n("ChartJS"),d=n("ECharts"),u=n("FlowChart"),g=n("Mermaid"),r=n("RouterLink"),k=n("CodeDemo"),_=n("Badge"),v=n("Playground"),y=n("VuePlayground"),f=n("Presentation");return w(),z("div",null,[E,B,x(" more "),j,s("p",null,[e("如果你是一个新手，还不会编写 Markdown，请先阅读 "),s("a",V,[e("Markdown 介绍"),a(t)]),e(" 和 "),s("a",U,[e("Markdown 演示"),a(t)]),e("。")]),C,M,s("div",I,[J,s("p",null,[e("Frontmatter 是 VuePress 中很重要的一个概念，如果你不了解它，你需要阅读 "),s("a",P,[e("Frontmatter 介绍"),a(t)]),e("。")])]),F,s("p",null,[e("VuePress 会使用 "),s("a",G,[e("markdown-it"),a(t)]),e(" 来解析 Markdown 内容，因此可以借助于 markdown-it 插件来实现 "),s("a",X,[e("语法扩展"),a(t)]),e(" 。")]),D,Z,s("p",null,[e("关于这些扩展，请阅读 "),s("a",Y,[e("VuePress 中的 Markdown 扩展"),a(t)]),e("。")]),K,s("p",null,[e("通过 "),s("a",L,[S,a(t)]),e("，主题扩展了更多 Markdown 语法，提供更加丰富的写作功能。")]),T,s("ul",null,[s("li",null,[s("a",W,[e("查看详情"),a(t)])])]),q,a(m,{id:"89",data:[{title:"pnpm"},{title:"yarn"},{title:"npm"}],active:2},{tab0:l(({title:o,value:c,isActive:p})=>[H]),tab1:l(({title:o,value:c,isActive:p})=>[Q]),tab2:l(({title:o,value:c,isActive:p})=>[O]),_:1}),s("ul",null,[s("li",null,[s("a",R,[e("查看详情"),a(t)])])]),N,$,s("ul",null,[s("li",null,[s("a",ss,[e("查看详情"),a(t)])])]),es,as,ts,s("ul",null,[s("li",null,[s("a",ns,[e("查看详情"),a(t)])])]),ls,rs,s("ul",null,[s("li",null,[s("a",is,[e("查看详情"),a(t)])])]),os,s("ul",null,[s("li",null,[s("a",cs,[e("查看详情"),a(t)])])]),ps,ms,s("ul",null,[s("li",null,[s("a",hs,[e("查看详情"),a(t)])])]),ds,s("ul",us,[gs,s("li",null,[s("p",null,[s("a",ks,[e("查看详情"),a(t)])])])]),_s,vs,s("ul",null,[s("li",null,[s("a",ys,[e("查看详情"),a(t)])])]),fs,a(h,{id:"chart-215",config:"eJxtULsOgjAU3fmKppMmaETDoKufYRgKNIRYKYGaSAyLg5sjk6O7cfWHMP6F95byMGFp2vO6t+dsEUJVkXK6ITQPmFI8ozaCIVMMQBSYV85VDshOI8QwmhXM5wIT6urxubzr6lXfnt/7VScZjclr3TqB0BNAM2dhE1rAbUHK3tHxLeuM053bHXfP3Zafg6ITeIPdfBbso0wek3ArhczwJ1nkT5YuWNdrmzir5ZQaeZPgwamnUZmqWCZYjKkKWhS8fwOCawzaausWccJZ07ZhUpnHmIasL5WSh/+peJZWaf0ALadm1Q==",title:"%E4%B8%80%E4%B8%AA%E6%95%A3%E7%82%B9%E5%9B%BE%E6%A1%88%E4%BE%8B",type:"json"}),s("ul",null,[s("li",null,[s("a",bs,[e("查看详情"),a(t)])])]),ws,a(d,{id:"echarts-228",config:"eJyr5lJQUKpwrMgsVrJSAHGA3JLKglQgTyk5sSQ1Pb+oUkkHIp6SWJIIFI9W8s3PU9JRUAopTQVR4akpYF5GKYhyK8oEUcGJJWCqNE8pFqi7FmSEUiV2e8oSc4AmwVUVpxZlpoKURYOVQRQjWW9oaqCjYGQMIoxMgIShhY6CobEpkDAxB3LNDGIh7kWyISczD2wB0AogGctVywUA9j06jQ==",title:"%E4%B8%80%E4%B8%AA%E6%8A%98%E7%BA%BF%E5%9B%BE%E6%A1%88%E4%BE%8B"}),s("ul",null,[s("li",null,[s("a",zs,[e("查看详情"),a(t)])])]),xs,a(u,{id:"flowchart-241",code:"eJxLzs9LsbUDkZklmfl5VgrPZqx/OmHZs87lLxb2PJvc+2TvHHuugqL85NTiYlu7/ILUokSoOrAcV6qtXWpeipXC892Tn82dz8UFMkmjMrVYU9cOqkvXLhUimpcPFEzlAgD7FTFE",preset:"vue"}),s("ul",null,[s("li",null,[s("a",As,[e("查看详情"),a(t)])])]),Es,a(g,{id:"mermaid-252",code:"eJzT1dXlKsksyUm1UnDLyS9PzkgsKuECCabBeAohTlwKQJBsqKtrl2gEZheXJqUXJRZkKOTnpYIFEpEkU/NSUBWVlOeDBZJAipJwKcooSoWYBbYoGVUZ0B4FoCjcKLBqVJHyfDAfqBEAuj83LQ=="}),s("ul",null,[s("li",null,[s("a",Bs,[e("查看详情"),a(t)])])]),js,Vs,s("ul",null,[s("li",null,[s("a",Us,[e("查看详情"),a(t)])])]),Cs,s("ul",null,[s("li",null,[s("p",null,[a(r,{to:"/zh/demo/markdown.html"},{default:l(()=>[e("Markdown 展示")]),_:1})])]),s("li",null,[s("p",null,[a(r,{to:"/zh/demo/page.html"},{default:l(()=>[e("页面展示")]),_:1})])]),s("li",null,[s("p",null,[a(r,{to:"/zh/demo/disable.html"},{default:l(()=>[e("禁用展示")]),_:1})])]),s("li",null,[s("p",null,[a(r,{to:"/zh/demo/encrypt.html"},{default:l(()=>[e("加密展示")]),_:1})])])]),s("ul",null,[s("li",null,[s("a",Ms,[e("查看详情"),a(t)])])]),Is,a(k,{id:"code-demo-308",type:"normal",title:"%E4%B8%80%E4%B8%AA%E6%99%AE%E9%80%9A%20Demo",code:"eJwljrGKAjEQhl9lbq5REJdrvZju4IorDhSrNEsysKvZZE2ygoiPopXgK4j4Olv4Fk7cZor5v3++OWCVGoszFNWXXHX0HyhGWFbUEPz6lkTBe+VEK0VsSwe1mSvcUdgrlM/Tub/dRJED2T/u/eX6IYqWcZzgOvJR43XXkEvTbceVBVnSyYeRws/hxHhaGvOzY+Kvjokc5UzbWm8UTmA0hrmEg3IApaWQOBuUg4vr38od82Cfjln4/vHd0N76MINAJkOMHF8ck1dC"},{default:l(()=>[Js,Ps,Fs]),_:1}),s("ul",null,[s("li",null,[s("a",Gs,[e("查看详情"),a(t)])])]),Xs,s("p",null,[e("向 Mr.Hope 捐赠一杯咖啡。 "),a(_,{type:"tip"},{default:l(()=>[e("Recommended")]),_:1})]),s("ul",null,[s("li",null,[s("a",Ds,[e("查看详情"),a(t)])])]),Zs,a(v,{key:"8cd5b888",title:"TS%20%E6%A1%88%E4%BE%8B",link:"https%3A%2F%2Fwww.typescriptlang.org%2Fplay%23code%2FMYewdgzgLgBAthA5jAvDARACwKYBtcgwDuIATrgCboDcAULaJLBAA7YCGA1qjABQKIAXDGikAlmEQBKVAD4YjCCFzYAdAUT8kUurVYdOW6XSA"}),s("ul",null,[s("li",null,[s("a",Ys,[e("查看详情"),a(t)])])]),Ks,a(y,{title:"Vue%20%E4%BA%A4%E4%BA%92%E6%BC%94%E7%A4%BA",key:"680406bd",settings:"%7B%7D",files:"eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cD5cbmltcG9ydCB7IHJlZiB9IGZyb20gXCJ2dWVcIjtcblxuY29uc3QgbXNnID0gcmVmKFwiSGVsbG8gV29ybGQhXCIpO1xuPC9zY3JpcHQ%2BXG5cbjx0ZW1wbGF0ZT5cbiAgPGgxPnt7IG1zZyB9fTwvaDE%2BXG4gIDxpbnB1dCB2LW1vZGVsPVwibXNnXCIgLz5cbjwvdGVtcGxhdGU%2BXG4ifQ%3D%3D"}),s("ul",null,[s("li",null,[s("a",Ls,[e("查看详情"),a(t)])])]),Ss,a(f,{id:"presentation-366",code:"eJzjUlZWeLpz9/PG9c872xUMubie7Gh4smPVszmdz6a1P107/emkHoXol5P3PetbGquRUVJSUGylr59blJFfkKpXnFmSqqnwfFbLs3VbX0zYy8Wlq6vLhWqgEVBQ4eXCnc9nrwMaDmeChDHUGusBrU9ISMgq5krOzysuUUhUsFUwtAYJgZRjqAYaoqLC5aURU5KRWpIYb6ADZRhqAvXFFJfmxldn2hrUghQBAI9BXC0=",theme:"auto"}),s("ul",null,[s("li",null,[s("a",Ts,[e("查看详情"),a(t)])])]),Ws])}const Rs=b(A,[["render",qs],["__file","markdown.html.vue"]]);export{Rs as default};
