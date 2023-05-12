import{_ as r,X as u,Y as k,Z as s,a1 as n,$ as e,a0 as a,a3 as t,C as l}from"./framework-a4aa538b.js";const m={},v=t(`<h1 id="show-tag-values" tabindex="-1"><a class="header-anchor" href="#show-tag-values" aria-hidden="true">#</a> SHOW TAG VALUES</h1><p>返回数据库中指定tag key的tag value。</p><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SHOW</span> TAG <span class="token keyword">VALUES</span> <span class="token punctuation">[</span><span class="token keyword">ON</span> <span class="token operator">&lt;</span>database_name<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>FROM_CLAUSE<span class="token punctuation">]</span> <span class="token keyword">WITH</span> <span class="token keyword">KEY</span> <span class="token punctuation">[</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>operator<span class="token operator">&gt;</span> <span class="token string">&quot;&lt;tag_key&gt;&quot;</span> <span class="token operator">|</span> <span class="token operator">&lt;</span>regular_expression<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token punctuation">[</span><span class="token operator">IN</span> <span class="token punctuation">(</span><span class="token string">&quot;&lt;tag_key1&gt;&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;&lt;tag_key2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token keyword">WHERE</span> <span class="token operator">&lt;</span>tag_key<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>operator<span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token string">&#39;&lt;tag_value&gt;&#39;</span> <span class="token operator">|</span> <span class="token operator">&lt;</span>regular_expression<span class="token operator">&gt;</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>LIMIT_CLAUSE<span class="token punctuation">]</span> <span class="token punctuation">[</span>OFFSET_CLAUSE<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="语法描述" tabindex="-1"><a class="header-anchor" href="#语法描述" aria-hidden="true">#</a> 语法描述</h2><p><code>ON &lt;database_name&gt;</code>是可选的。如果查询中没有包含<code>ON &lt;database_name&gt;</code>，您必须在CLI中使用<code>USE &lt;database_name&gt;</code>指定数据库，或者在HTTP API请求中使用参数<code>db</code>指定数据库。</p><p><code>WITH</code>子句是必须要有的，它支持指定一个tag key、一个正则表达式或多个tag key。</p><p><code>FROM</code>子句、<code>WHERE</code>子句、<code>LIMIT</code>子句和<code>OFFSET</code>子句是可选的。<code>WHERE</code>子句支持tag比较；在<code>SHOW TAG VALUES</code>查询中，field比较是无效的。</p><p><code>WITH</code>字句和<code>WHERE</code>子句中支持的操作符：</p><table><thead><tr><th>操作符</th><th>含义</th></tr></thead><tbody><tr><td><code>=</code></td><td>等于</td></tr><tr><td><code>&lt;&gt;</code></td><td>不等于</td></tr><tr><td><code>!=</code></td><td>不等于</td></tr><tr><td><code>=~</code></td><td>匹配</td></tr><tr><td><code>!~</code></td><td>不匹配</td></tr></tbody></table>`,10),b=s("code",null,"FROM",-1),g=s("code",null,"LIMIT、OFFSET",-1),h=t(`<h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><h3 id="运行带有on子句的show-tag-values查询" tabindex="-1"><a class="header-anchor" href="#运行带有on子句的show-tag-values查询" aria-hidden="true">#</a> 运行带有<code>ON</code>子句的<code>SHOW TAG VALUES</code>查询</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token operator">&gt;</span> <span class="token keyword">SHOW</span> TAG <span class="token keyword">VALUES</span> <span class="token keyword">ON</span> <span class="token string">&quot;NOAA_water_database&quot;</span> <span class="token keyword">WITH</span> <span class="token keyword">KEY</span> <span class="token operator">=</span> <span class="token string">&quot;randtag&quot;</span>

name: h2o_quality
<span class="token keyword">key</span>       <span class="token keyword">value</span>
<span class="token comment">---       -----</span>
randtag   <span class="token number">1</span>
randtag   <span class="token number">2</span>
randtag   <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该查询返回数据库<code>NOAA_water_database</code>中的tag key <code>randtag</code>的所有tag value。<code>SHOW TAG VALUES</code>将查询结果按measurement的名字进行分组。</p><h3 id="运行不带有on子句的show-tag-keys查询" tabindex="-1"><a class="header-anchor" href="#运行不带有on子句的show-tag-keys查询" aria-hidden="true">#</a> 运行不带有<code>ON</code>子句的<code>SHOW TAG KEYS</code>查询</h3>`,5),_=s("p",null,[n("使用"),s("code",null,"USE <database_name>"),n("指定数据库：")],-1),y=s("div",{class:"language-sql line-numbers-mode","data-ext":"sql"},[s("pre",{class:"language-sql"},[s("code",null,[s("span",{class:"token operator"},">"),n(),s("span",{class:"token keyword"},"USE"),n(` NOAA_water_database
`),s("span",{class:"token keyword"},"Using"),n(),s("span",{class:"token keyword"},"database"),n(` NOAA_water_database

`),s("span",{class:"token operator"},">"),n(),s("span",{class:"token keyword"},"SHOW"),n(" TAG "),s("span",{class:"token keyword"},"VALUES"),n(),s("span",{class:"token keyword"},"WITH"),n(),s("span",{class:"token keyword"},"KEY"),n(),s("span",{class:"token operator"},"="),n(),s("span",{class:"token string"},'"randtag"'),n(`

name: h2o_quality
`),s("span",{class:"token keyword"},"key"),n("       "),s("span",{class:"token keyword"},"value"),n(`
`),s("span",{class:"token comment"},"---       -----"),n(`
randtag   `),s("span",{class:"token number"},"1"),n(`
randtag   `),s("span",{class:"token number"},"2"),n(`
randtag   `),s("span",{class:"token number"},"3"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),w=s("p",null,[n("使用参数"),s("code",null,"db"),n("指定数据库")],-1),A=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[n("~"),s("span",{class:"token comment"},`# curl -G "http://localhost:8086/query?db=NOAA_water_database&pretty=true" --data-urlencode 'q=SHOW TAG VALUES WITH KEY = "randtag"'`),n(`

`),s("span",{class:"token punctuation"},"{"),n(`
    `),s("span",{class:"token string"},'"results"'),s("span",{class:"token builtin class-name"},":"),n(),s("span",{class:"token punctuation"},"["),n(`
        `),s("span",{class:"token punctuation"},"{"),n(`
            `),s("span",{class:"token string"},'"statement_id"'),s("span",{class:"token builtin class-name"},":"),n(),s("span",{class:"token number"},"0"),n(`,
            `),s("span",{class:"token string"},'"series"'),s("span",{class:"token builtin class-name"},":"),n(),s("span",{class:"token punctuation"},"["),n(`
                `),s("span",{class:"token punctuation"},"{"),n(`
                    `),s("span",{class:"token string"},'"name"'),s("span",{class:"token builtin class-name"},":"),n(),s("span",{class:"token string"},'"h2o_quality"'),n(`,
                    `),s("span",{class:"token string"},'"columns"'),s("span",{class:"token builtin class-name"},":"),n(),s("span",{class:"token punctuation"},"["),n(`
                        `),s("span",{class:"token string"},'"key"'),n(`,
                        `),s("span",{class:"token string"},'"value"'),n(`
                    `),s("span",{class:"token punctuation"},"]"),n(`,
                    `),s("span",{class:"token string"},'"values"'),s("span",{class:"token builtin class-name"},":"),n(),s("span",{class:"token punctuation"},"["),n(`
                        `),s("span",{class:"token punctuation"},"["),n(`
                            `),s("span",{class:"token string"},'"randtag"'),n(`,
                            `),s("span",{class:"token string"},'"1"'),n(`
                        `),s("span",{class:"token punctuation"},"]"),n(`,
                        `),s("span",{class:"token punctuation"},"["),n(`
                            `),s("span",{class:"token string"},'"randtag"'),n(`,
                            `),s("span",{class:"token string"},'"2"'),n(`
                        `),s("span",{class:"token punctuation"},"]"),n(`,
                        `),s("span",{class:"token punctuation"},"["),n(`
                            `),s("span",{class:"token string"},'"randtag"'),n(`,
                            `),s("span",{class:"token string"},'"3"'),n(`
                        `),s("span",{class:"token punctuation"},"]"),n(`
                    `),s("span",{class:"token punctuation"},"]"),n(`
                `),s("span",{class:"token punctuation"},"}"),n(`
            `),s("span",{class:"token punctuation"},"]"),n(`
        `),s("span",{class:"token punctuation"},"}"),n(`
    `),s("span",{class:"token punctuation"},"]"),n(`
`),s("span",{class:"token punctuation"},"}"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),q=t(`<h3 id="运行带有多个子句的show-tag-values查询" tabindex="-1"><a class="header-anchor" href="#运行带有多个子句的show-tag-values查询" aria-hidden="true">#</a> 运行带有多个子句的<code>SHOW TAG VALUES</code>查询</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token operator">&gt;</span> <span class="token keyword">SHOW</span> TAG <span class="token keyword">VALUES</span> <span class="token keyword">ON</span> <span class="token string">&quot;NOAA_water_database&quot;</span> <span class="token keyword">WITH</span> <span class="token keyword">KEY</span> <span class="token operator">IN</span> <span class="token punctuation">(</span><span class="token string">&quot;location&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;randtag&quot;</span><span class="token punctuation">)</span> <span class="token keyword">WHERE</span> <span class="token string">&quot;randtag&quot;</span> <span class="token operator">=</span><span class="token operator">~</span> <span class="token operator">/</span><span class="token punctuation">.</span><span class="token operator">/</span> <span class="token keyword">LIMIT</span> <span class="token number">3</span>

name: h2o_quality
<span class="token keyword">key</span>        <span class="token keyword">value</span>
<span class="token comment">---        -----</span>
location   coyote_creek
location   santa_monica
randtag	   <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该查询从数据库<code>NOAA_water_database</code>的所有measurement中返回<code>location</code>或<code>randtag</code>的tag value，并且返回的数据还需满足条件：<code>randtag</code>的tag value不为空。<code>LIMIT</code>子句将返回的tag value的个数限制为3。</p>`,3);function E(S,O){const o=l("RouterLink"),c=l("Tabs");return u(),k("div",null,[v,s("p",null,[n("请查阅DML章节获得关于"),e(o,{to:"/guide/geminiql/sql_syntax/DML/select.html#from%E5%AD%90%E5%8F%A5"},{default:a(()=>[b,n("子句")]),_:1}),n("、"),e(o,{to:"/guide/geminiql/sql_syntax/DML/limit_offset.html"},{default:a(()=>[g,n("子句")]),_:1}),n("、和正则表达式的介绍。")]),h,e(c,{id:"95",data:[{title:"CLI"},{title:"API"}]},{tab0:a(({title:p,value:d,isActive:i})=>[_,y]),tab1:a(({title:p,value:d,isActive:i})=>[w,A]),_:1}),q])}const L=r(m,[["render",E],["__file","show_tag_values.html.vue"]]);export{L as default};
