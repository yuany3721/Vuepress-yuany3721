<template><div><ol>
<li>下载 nssm</li>
</ol>
<p><a href="https://nssm.cc/download" target="_blank" rel="noopener noreferrer">https://nssm.cc/download</a></p>
<p>解压相应的 nssm.exe 到目录</p>
<ol start="2">
<li>配置运行环境</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 安装环境</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">python</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -m</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> venv</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> venv</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">pip</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> glances</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> fastapi</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> uvicorn</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> jinja2</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># docker支持</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">pip</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> glances[containers]</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 测试环境</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">path/to/venv/Scripts/python.exe</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -m</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> glances</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --bind</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 127.0.0.1</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --port</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 8080</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -w</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -q</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>配置 nssm</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">\</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">nssm.exe</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> glances</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>在对话框中配置：
Path: <code v-pre>path/to/venv/Scripts/python.exe</code>
Startup Directory: <code v-pre>path/to/venv/Scripts/</code>
Augments: <code v-pre>-m glances --bind 127.0.0.1 --port 8080 -w -q</code></p>
<ol start="4">
<li>启动服务</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">\</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">nssm.exe</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> start</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> glances</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>


