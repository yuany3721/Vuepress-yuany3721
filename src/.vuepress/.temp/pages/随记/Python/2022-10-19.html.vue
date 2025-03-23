<template><div><ol>
<li>临时换源</li>
</ol>
<div class="language-powershell line-numbers-mode" data-highlighter="shiki" data-ext="powershell" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">pip install xxx </span><span style="--shiki-light:#999999;--shiki-dark:#666666">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">i https:</span><span style="--shiki-light:#999999;--shiki-dark:#666666">//</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">pypi.mirrors.ustc.edu.cn</span><span style="--shiki-light:#999999;--shiki-dark:#666666">/</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">simple</span><span style="--shiki-light:#999999;--shiki-dark:#666666">/</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="2">
<li>永久换源</li>
</ol>
<div class="language-powershell line-numbers-mode" data-highlighter="shiki" data-ext="powershell" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">pip config set global.index</span><span style="--shiki-light:#999999;--shiki-dark:#666666">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">url https:</span><span style="--shiki-light:#999999;--shiki-dark:#666666">//</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">pypi.mirrors.ustc.edu.cn</span><span style="--shiki-light:#999999;--shiki-dark:#666666">/</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">simple</span><span style="--shiki-light:#999999;--shiki-dark:#666666">/</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>也可以修改配置文件，linux 在<code v-pre>~/.pip/pip.conf</code>，Windows 在<code v-pre>C:\Users\YourUserName\AppData\Roaming\pip\pip.ini</code>，内容为：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>[global]</span></span>
<span class="line"><span>index-url = https://pypi.tuna.tsinghua.edu.cn/simple</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>常用源
中国科学技术大学 https://pypi.mirrors.ustc.edu.cn/simple/
清华大学 https://pypi.tuna.tsinghua.edu.cn/simple/
阿里云 https://mirrors.aliyun.com/pypi/simple/
豆瓣 https://pypi.douban.com/simple/
华中科技大学 https://pypi.hustunique.com/</p>
</blockquote>
</div></template>


