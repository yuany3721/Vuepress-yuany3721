<template><div><p>编辑<code v-pre>~/.ssh/config</code>文件</p>
<p>文件格式：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>Host hostalias                          # 关键词</span></span>
<span class="line"><span>    HostName example.com or ip addr     # 主机地址</span></span>
<span class="line"><span>    User root                           # 用户名</span></span>
<span class="line"><span>    IdentityFile ~/.ssh/id_rrrsa        # 认证文件</span></span>
<span class="line"><span>    Port 22                             # 端口</span></span>
<span class="line"><span>    ProxyCommand command                # 代理命令</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以使用<code v-pre>ssh hostalias</code>替代后面一堆配置选项</p>
<p>没有指定 hostname 的 IdentityFile 默认还是去 id_rsa 做对应</p>
</div></template>


