<template><div><blockquote>
<p>参考<a href="https://github.com/YerongAI/Office-Tool/issues/216" target="_blank" rel="noopener noreferrer">YerongAI/Office-Tool/Issues#216</a></p>
</blockquote>
<p>运行 <code v-pre>C:\WINDOWS\system32\SppExtComObj.exe</code> 如果异常会提示 <code v-pre>启动SppExtComObjHook.dll时出现问题</code></p>
<p>检测注册表是否存在配置项 <code v-pre>HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Image File Execution Options\SppExtComObj.exe</code></p>
<p>若果存在，则将其删除</p>
<p>重新运行 <code v-pre>C:\WINDOWS\system32\SppExtComObj.exe</code>，如正常则会立刻返回 <code v-pre>exit with code 0</code></p>
<p>重新使用 kms 激活工具激活即可</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">cscript</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">path for OSPP.VBS</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /sethst:kms.ustc.edu.cn</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">cscript</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">path for OSPP.VBS</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /act</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


