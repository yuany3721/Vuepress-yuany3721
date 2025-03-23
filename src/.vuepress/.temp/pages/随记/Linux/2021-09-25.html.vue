<template><div><ul>
<li>
<p>设置<code v-pre>php.ini</code></p>
<p>主要把包括的选项有：<code v-pre>post_max_size</code>、<code v-pre>upload_max_filesize</code>、<code v-pre>memory_limit</code>、<code v-pre>max_execution_time</code>等</p>
</li>
<li>
<p>设置<code v-pre>nginx.conf</code></p>
<p>主要是<code v-pre>client_max_body_size</code>，注意设置<code v-pre>sendfile on</code></p>
</li>
<li>
<p>nginx 一定程度上避免 502</p>
<div class="language-conf line-numbers-mode" data-highlighter="shiki" data-ext="conf" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>location / {</span></span>
<span class="line"><span>    ......</span></span>
<span class="line"><span>    proxy_connect_timeout 300;</span></span>
<span class="line"><span>    proxy_send_timeout 300;</span></span>
<span class="line"><span>    proxy_read_timeout 300;</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</div></template>


