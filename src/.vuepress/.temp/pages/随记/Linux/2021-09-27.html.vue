<template><div><blockquote>
<p>Version: Ubuntu 20.04.3 LTS</p>
</blockquote>
<ol>
<li>下载 deb 包 <a href="https://pinyin.sogou.com/linux/" target="_blank" rel="noopener noreferrer">官网地址</a></li>
<li>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> dpkg</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -i</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> sogoupinyin_版本号_amd64.deb</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 如果提示缺少依赖</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> apt</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -f</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>设置系统语言
Settings --&gt; Region &amp; Language --&gt; Manage Installed Languages
将
Keyboard input method system
设置为<code v-pre>fcitx</code></li>
<li>注销重新登录用户，使用 Ctrl+Space 即可切换为搜狗输入法</li>
</ol>
</div></template>


