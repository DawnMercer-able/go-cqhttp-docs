import{r as o,o as a,c,a as e,b as t,F as r,d as n,e as d}from"./app.8ba4e07d.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";const i={},p=e("h1",{id:"\u81EA\u5B9A\u4E49-go-cqhttp",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49-go-cqhttp","aria-hidden":"true"},"#"),n(" \u81EA\u5B9A\u4E49 go-cqhttp")],-1),h=e("h2",{id:"\u4F7F\u7528-xgo-cqhttp",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u4F7F\u7528-xgo-cqhttp","aria-hidden":"true"},"#"),n(" \u4F7F\u7528 "),e("code",null,"xgo-cqhttp")],-1),u=n("\u672C\u5DE5\u5177\u9B54\u6539\u81EA"),b={href:"https://github.com/caddyserver/xcaddy",target:"_blank",rel:"noopener noreferrer"},g=n("xcaddy"),m=e("br",null,null,-1),_=n(" \u8FD9\u4E2A\u547D\u4EE4\u884C\u5DE5\u5177\u548C\u76F8\u5173\u7684 Go \u5305\u53EF\u4EE5\u5F88\u5BB9\u6613\u5730\u8FDB\u884C\u81EA\u5B9A\u4E49\u6784\u5EFA "),x={href:"https://github.com/Mrs4s/go-cqhttp",target:"_blank",rel:"noopener noreferrer"},q=n("go-cqhttp"),f=n("."),v=e("h3",{id:"\u9884\u5148\u51C6\u5907",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u9884\u5148\u51C6\u5907","aria-hidden":"true"},"#"),n(" \u9884\u5148\u51C6\u5907")],-1),k={href:"https://golang.org/doc/install",target:"_blank",rel:"noopener noreferrer"},G=n("Golang"),M=e("h3",{id:"\u5B89\u88C5",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u5B89\u88C5","aria-hidden":"true"},"#"),n(" \u5B89\u88C5")],-1),w=n("\u4F60\u53EF\u4EE5\u4ECE Release \u6807\u7B7E\u4E2D"),O={href:"https://github.com/RomiChan/xgo-cqhttp/releases",target:"_blank",rel:"noopener noreferrer"},R=n("\u4E0B\u8F7D\u5DF2\u7ECF\u4E3A\u4F60\u7684\u5E73\u53F0\u7F16\u8BD1\u597D\u7684\u4E8C\u8FDB\u5236\u6587\u4EF6"),$=n("\u3002"),y=d(`<p>\u4F60\u4E5F\u53EF\u4EE5\u4ECE\u6E90\u4EE3\u7801\u6784\u5EFA <code>xgo-cqhttp</code>:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ go <span class="token function">install</span> github.com/RomiChan/xgo-cqhttp/cmd/xgo-cqhttp@latest
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="\u547D\u4EE4\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u547D\u4EE4\u7528\u6CD5" aria-hidden="true">#</a> \u547D\u4EE4\u7528\u6CD5</h3><p><code>xgo-cqhttp</code>\u547D\u4EE4\u6709\u4E24\u4E2A\u4E3B\u8981\u7528\u9014\u3002</p><ol><li>\u7F16\u8BD1\u81EA\u5B9A\u4E49\u7684 <code>xgo-cqhttp</code> \u4E8C\u8FDB\u5236\u6587\u4EF6</li><li>\u5728\u5F00\u53D1 <code>go-cqhttp</code> \u63D2\u4EF6\u65F6\u66FF\u4EE3 <code>go run</code>\u3002</li></ol><p><code>xgo-cqhttp</code> \u547D\u4EE4\u9ED8\u8BA4\u4F7F\u7528 <code>go-cqhttp</code> \u7684\u6700\u65B0\u7248\u672C\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E<code>GOCQHTTP_VERSION</code>\u73AF\u5883\u53D8\u91CF\u6765\u4E3A\u6240\u6709\u7684\u8C03\u7528\u8FDB\u884C\u81EA\u5B9A\u4E49\u3002 <br> \u4E0E <code>go</code> \u547D\u4EE4\u4E00\u6837\uFF0C<code>xgo-cqhttp</code> \u547D\u4EE4\u5C06\u4F20\u9012 <code>GOOS</code>\u3001<code>GOARCH</code> \u548C <code>GOARM</code> \u73AF\u5883\u53D8\u91CF\uFF0C\u4EE5\u4FBF\u4EA4\u53C9\u7F16\u8BD1\u3002</p><h4 id="\u81EA\u5B9A\u4E49\u6784\u5EFA" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u6784\u5EFA" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u6784\u5EFA</h4><p>\u8BED\u6CD5:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ xgo-cqhttp build [&lt;gocq_version&gt;]
    [--output &lt;file&gt;]
    [--with &lt;module[@version][=replacement]&gt;...]
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li><code>&lt;gocq_version&gt;</code> \u662F\u8981\u5EFA\u7ACB\u7684 <code>go-cqhttp</code> \u6838\u5FC3\u7248\u672C\uFF1B\u9ED8\u8BA4\u4E3A <code>GOCQHTTP_VERSION</code> \u73AF\u5883\u53D8\u91CF\u6216\u6700\u65B0\u7248\u672C\u3002</li><li><code>--output</code> \u8F93\u51FA\u6587\u4EF6\u8DEF\u5F84\u3002</li><li><code>--with</code> \u53EF\u4EE5\u91CD\u590D\uFF0C\u901A\u8FC7\u6307\u5B9AGo\u6A21\u5757\u7684\u540D\u79F0\u548C\u53EF\u9009\u7684\u7248\u672C\u6765\u6DFB\u52A0\u63D2\u4EF6\uFF0C\u7C7B\u4F3C <code>go get</code>\u3002 \u6A21\u5757\u540D\u79F0\u5FC5\u987B\uFF0C\u5177\u4F53\u7248\u672C\u548C/\u6216\u672C\u5730\u66FF\u6362\u53EF\u9009\u3002</li></ul><p>\u4F8B\u5B50:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ xgo-cqhttp build <span class="token punctuation">\\</span>
    --with github.com/Mrs4s/go-cqhttp/db/mongodb

$ xgo-cqhttp build v1.0.0-rc1 <span class="token punctuation">\\</span>
    --with github.com/Mrs4s/go-cqhttp/db/mongodb@v1.0.0-rc1

$ xgo-cqhttp build <span class="token punctuation">\\</span>
    --with github.com/Mrs4s/MiraiGo<span class="token operator">=</span><span class="token punctuation">..</span>/<span class="token punctuation">..</span>/my-fork

$ xgo-cqhttp build <span class="token punctuation">\\</span>
    --with github.com/Mrs4s/MiraiGo@v0.1.1<span class="token operator">=</span><span class="token punctuation">..</span>/<span class="token punctuation">..</span>/my-fork
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u4F60\u751A\u81F3\u53EF\u4EE5\u4F7F\u7528 <code>--with</code> \u6807\u5FD7\u6765\u66FF\u6362 <code>go-cqhttp</code> \u6838\u5FC3:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ xgo-cqhttp build \\
    --with github.com/Mrs4s/go-cqhttp=../../my-go-cqhttp-fork
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u8FD9\u53EF\u4EE5\u8BA9\u4F60\u66F4\u5BB9\u6613\u4FEE\u6539 <code>go-cqhttp</code> \u6838\u5FC3\uFF08\u540C\u65F6\u4E5F\u53EF\u4EE5\u9009\u62E9\u63D2\u5165\u989D\u5916\u7684\u6A21\u5757\uFF01\uFF09\u3002</p>`,15);function C(N,V){const s=o("ExternalLinkIcon");return a(),c(r,null,[p,h,e("p",null,[u,e("a",b,[g,t(s)]),m,_,e("a",x,[q,t(s)]),f]),v,e("ul",null,[e("li",null,[e("a",k,[G,t(s)])])]),M,e("p",null,[w,e("a",O,[R,t(s)]),$]),y],64)}var I=l(i,[["render",C]]);export{I as default};
