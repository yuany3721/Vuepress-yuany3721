<template><div><p>因为不小心把 id_rsa.pub 丢了，但是又不想改 id_rsa。。</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">ssh-keygen</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -y</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -f</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ~/.ssh/id_rsa</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> ></span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ~/id_rsa.pub</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>


