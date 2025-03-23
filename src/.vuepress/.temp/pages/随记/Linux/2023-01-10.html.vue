<template><div><ol>
<li>查看 codename</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">lsb_release</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -a</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>No LSB modules are available.</span></span>
<span class="line"><span>Distributor ID: Ubuntu</span></span>
<span class="line"><span>Description:    Ubuntu 20.04.5 LTS</span></span>
<span class="line"><span>Release:        20.04</span></span>
<span class="line"><span>Codename:       focal</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>换源</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> cp</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /etc/apt/sources.list</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /etc/apt/sources.list.bak</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> vi</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /etc/apt/sources.list</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意这里 codename 的对应关系</strong></p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>deb https://mirrors.ustc.edu.cn/ubuntu/ focal main restricted universe multiverse</span></span>
<span class="line"><span>deb https://mirrors.ustc.edu.cn/ubuntu/ focal-updates main restricted universe multiverse</span></span>
<span class="line"><span>deb https://mirrors.ustc.edu.cn/ubuntu/ focal-backports main restricted universe multiverse</span></span>
<span class="line"><span>deb https://mirrors.ustc.edu.cn/ubuntu/ focal-security main restricted universe multiverse</span></span>
<span class="line"><span>deb https://mirrors.ustc.edu.cn/ubuntu/ focal-proposed main restricted universe multiverse</span></span>
<span class="line"><span>deb-src https://mirrors.ustc.edu.cn/ubuntu/ focal main restricted universe multiverse</span></span>
<span class="line"><span>deb-src https://mirrors.ustc.edu.cn/ubuntu/ focal-updates main restricted universe multiverse</span></span>
<span class="line"><span>deb-src https://mirrors.ustc.edu.cn/ubuntu/ focal-backports main restricted universe multiverse</span></span>
<span class="line"><span>deb-src https://mirrors.ustc.edu.cn/ubuntu/ focal-security main restricted universe multiverse</span></span>
<span class="line"><span>deb-src https://mirrors.ustc.edu.cn/ubuntu/ focal-proposed main restricted universe multiverse</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span># 如果报错 NO_PUBKEY ABCDE12345</span></span>
<span class="line"><span>sudo apt-key adv --recv-keys --keyserver keyserver.ubuntu.com ABCDE12345</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>更新</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> apt</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> update</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> apt</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> upgrade</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>ubuntu 安装时的 mirror 选择：<code v-pre>https://mirrors.ustc.edu.cn/ubuntu</code></p>
</blockquote>
</div></template>


