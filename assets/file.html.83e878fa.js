import{e as t}from"./app.8ba4e07d.js";import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";const r={},a=t(`<h1 id="\u76EE\u5F55\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u76EE\u5F55\u7ED3\u6784" aria-hidden="true">#</a> \u76EE\u5F55\u7ED3\u6784</h1><p>go-cqhttp \u9ED8\u8BA4\u751F\u6210\u7684\u6587\u4EF6\u6811\u5982\u4E0B\u6240\u793A :</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.
\u251C\u2500\u2500 go-cqhttp
\u251C\u2500\u2500 config.yml
\u251C\u2500\u2500 device.json
\u251C\u2500\u2500 logs
\u2502   \u2514\u2500\u2500 xx-xx-xx.log
\u2514\u2500\u2500 data
    \u251C\u2500\u2500 images
    \u2502   \u2514\u2500\u2500 xxxx.image
    \u2514\u2500\u2500 db
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><table><thead><tr><th>\u6587\u4EF6</th><th>\u7528\u9014</th></tr></thead><tbody><tr><td>go-cqhttp</td><td>go-cqhttp\u53EF\u6267\u884C\u6587\u4EF6</td></tr><tr><td>config.yml</td><td>\u8FD0\u884C\u914D\u7F6E\u6587\u4EF6</td></tr><tr><td>device.json</td><td>\u865A\u62DF\u8BBE\u5907\u914D\u7F6E\u6587\u4EF6</td></tr><tr><td>logs</td><td>\u65E5\u5FD7\u5B58\u653E\u76EE\u5F55</td></tr><tr><td>data</td><td>\u6570\u636E\u76EE\u5F55</td></tr><tr><td>data/images</td><td>\u56FE\u7247\u7F13\u5B58\u76EE\u5F55</td></tr><tr><td>data/db</td><td>\u6570\u636E\u5E93\u76EE\u5F55</td></tr></tbody></table><h2 id="\u56FE\u7247\u7F13\u5B58\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u56FE\u7247\u7F13\u5B58\u6587\u4EF6" aria-hidden="true">#</a> \u56FE\u7247\u7F13\u5B58\u6587\u4EF6</h2><p>\u51FA\u4E8E\u6027\u80FD\u8003\u8651, go-cqhttp \u5E76\u4E0D\u4F1A\u5C06\u56FE\u7247\u6E90\u6587\u4EF6\u4E0B\u8F7D\u5230\u672C\u5730, \u800C\u662F\u751F\u6210\u4E00\u4E2A\u53EF\u4EE5\u548CQQ\u670D\u52A1\u5668\u5BF9\u5E94\u7684\u7F13\u5B58\u6587\u4EF6 ( .image ), \u8BE5\u7F13\u5B58\u6587\u4EF6\u7ED3\u6784\u5982\u4E0B</p><table><thead><tr><th>\u504F\u79FB</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>0x00</td><td>[16]byte</td><td>\u56FE\u7247\u6E90\u6587\u4EF6MD5 HASH</td></tr><tr><td>0x10</td><td>uint32</td><td>\u56FE\u7247\u6E90\u6587\u4EF6\u5927\u5C0F</td></tr><tr><td>0x14</td><td>string</td><td>\u56FE\u7247\u539F\u540D(QQ\u5185\u90E8ID)</td></tr><tr><td>0x14 + \u539F\u540D\u957F\u5EA6</td><td>string</td><td>\u56FE\u7247\u4E0B\u8F7D\u94FE\u63A5</td></tr></tbody></table><h2 id="\u77ED\u89C6\u9891\u7F13\u5B58\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u77ED\u89C6\u9891\u7F13\u5B58\u6587\u4EF6" aria-hidden="true">#</a> \u77ED\u89C6\u9891\u7F13\u5B58\u6587\u4EF6</h2><blockquote><p>\u540C\u4E0A</p></blockquote><table><thead><tr><th>\u504F\u79FB</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>0x00</td><td>[16]byte</td><td>\u89C6\u9891\u6E90\u6587\u4EF6MD5 HASH</td></tr><tr><td>0x10</td><td>[16]byte</td><td>\u89C6\u9891\u5C01\u9762MD5 HASH</td></tr><tr><td>0x20</td><td>uint32</td><td>\u89C6\u9891\u6E90\u6587\u4EF6\u5927\u5C0F</td></tr><tr><td>0x24</td><td>uint32</td><td>\u89C6\u9891\u5C01\u9762\u5927\u5C0F</td></tr><tr><td>0x28</td><td>string</td><td>\u539F\u540D(QQ\u5185\u90E8ID)</td></tr><tr><td>0x28 + \u539F\u540D\u957F\u5EA6</td><td>[16]byte</td><td>UUID</td></tr></tbody></table>`,10);function e(n,s){return a}var l=d(r,[["render",e]]);export{l as default};