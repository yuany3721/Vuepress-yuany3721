import{_ as i,c as n,a as s,o as a}from"./app-B5m6HLX-.js";const l={};function t(d,e){return a(),n("div",null,e[0]||(e[0]=[s(`<ul><li><p>设置<code>php.ini</code></p><p>主要把包括的选项有：<code>post_max_size</code>、<code>upload_max_filesize</code>、<code>memory_limit</code>、<code>max_execution_time</code>等</p></li><li><p>设置<code>nginx.conf</code></p><p>主要是<code>client_max_body_size</code>，注意设置<code>sendfile on</code></p></li><li><p>nginx 一定程度上避免 502</p><div class="language-conf line-numbers-mode" data-highlighter="shiki" data-ext="conf" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>location / {</span></span>
<span class="line"><span>    ......</span></span>
<span class="line"><span>    proxy_connect_timeout 300;</span></span>
<span class="line"><span>    proxy_send_timeout 300;</span></span>
<span class="line"><span>    proxy_read_timeout 300;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,1)]))}const o=i(l,[["render",t]]),p=JSON.parse('{"path":"/%E9%9A%8F%E8%AE%B0/Linux/2021-09-25.html","title":"nginx+php上传文件配置","lang":"zh-CN","frontmatter":{"title":"nginx+php上传文件配置","createTime":"2021/09/25","tags":["linux"],"categories":["随记"]},"headers":[],"readingTime":{"minutes":0.22,"words":65},"git":{},"filePathRelative":"随记/Linux/2021-09-25.md","categoryList":[{"id":"0f870d","sort":10000,"name":"随记"},{"id":"d513be","sort":10017,"name":"Linux"}]}');export{o as comp,p as data};
