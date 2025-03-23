<template><div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 查看时区列表</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">timedatectl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> list-timezones</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> |</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> grep</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Shanghai</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 设置时区</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> timedatectl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> set-timezone</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Asia/Shanghai</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 查看时间</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">date</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


