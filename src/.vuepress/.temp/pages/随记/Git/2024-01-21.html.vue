<template><div><p><a href="https://github.com/orgs/community/discussions/88410#discussioncomment-8151064" target="_blank" rel="noopener noreferrer">参考</a></p>
<p>该方法需要先检查是否可以直接访问/通过代理访问 github</p>
<ol>
<li>
<p>在 <code v-pre>C:\Users\{username}\.ssh</code> 目录下创建 or 编辑 <code v-pre>config</code> 文件。</p>
</li>
<li>
<p>将以下内容复制到 config</p>
</li>
</ol>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>Host github.com</span></span>
<span class="line"><span>User git</span></span>
<span class="line"><span>Hostname ssh.github.com</span></span>
<span class="line"><span>PreferredAuthentications publickey</span></span>
<span class="line"><span>IdentityFile ~/.ssh/id_rsa</span></span>
<span class="line"><span>Port 443</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>使用 <code v-pre>ssh -T git@github.com</code> 命令测试连接</li>
</ol>
</div></template>


