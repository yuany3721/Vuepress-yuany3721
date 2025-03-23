<template><div><ol>
<li>准备工作</li>
</ol>
<p>下载<a href="https://micropython.org/download/esp32/" target="_blank" rel="noopener noreferrer">micropython for esp32</a></p>
<p>vscode 安装插件“Pymakr”</p>
<ol start="2">
<li>烧写 micropython</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">pip</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> esptool</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">esptool</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --chip</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> esp32</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --port</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> your_serial_port</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> clear_flash</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">esptool</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --chip</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> esp32</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --port</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> your_serial_port</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> write_flash</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -z</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 0x1000</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> your_micropython.bin</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>在 Pymakr 中新建项目，选择同步目录，选择 create terminal，出现 micropython 命令行即为配置成功</li>
</ol>
<figure><img src="@source/随记/MCU/img/pymakr.png" alt="pymakr" tabindex="0" loading="lazy" width="333" height="166"><figcaption>pymakr</figcaption></figure>
<figure><img src="@source/随记/MCU/img/pymakr_terminal.png" alt="pymakr" tabindex="0" loading="lazy" width="439" height="77"><figcaption>pymakr</figcaption></figure>
</div></template>


