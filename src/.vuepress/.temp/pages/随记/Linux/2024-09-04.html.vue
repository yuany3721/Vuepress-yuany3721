<template><div><h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景"><span>背景</span></a></h2>
<p>前段时间 Ubuntu22.4 自动更新内核后，nvidia 535.86 安装不上了，编译报错<code v-pre>ERROR: modpost: GPL-incompatible module nvidia.ko uses GPL-only symbol 'rcu_read_unlock_strict'</code></p>
<p>大概有这么个公告：</p>
<blockquote>
<p><strong>Problem with 535 Nvidia drivers and 5.15.0-106 kernel</strong>
Recently, an ubuntu update to the 5.15.0-106 kernel produced the following error from the nvidia driver when it compiled the kernel module:</p>
<p>ERROR: modpost: GPL-incompatible module nvidia.ko uses GPL-only symbol 'rcu_read_unlock_strict'</p>
<p>We typically freeze our driver updates so that we can do them at planned downtimes – the fix was to unhold the held nvidia-driver packages and upgrade to nvidia-driver-550</p>
</blockquote>
<p>在 forum 上也确定了确实是内核更新带来的 bug，所以简单粗暴回退内核更新尝试解决</p>
<h2 id="回退-kernel" tabindex="-1"><a class="header-anchor" href="#回退-kernel"><span>回退 kernel</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 查看当前内核版本</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">uname</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -a</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 查看grub可选内核版本</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">grep</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> menuentry</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /boot/grub/grub.cfg</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出类似下面这样：</p>
<blockquote>
<p>if [ x&quot;${feature_menuentry_id}&quot; = xy ]; then
menuentry_id_option=&quot;--id&quot;
menuentry_id_option=&quot;&quot;
export menuentry_id_option
menuentry 'Ubuntu' --class ubuntu --class gnu-linux --class gnu --class os $menuentry_id_option 'gnulinux-simple-cdc0eb43-b3e9-4337-b245-bb62aeb7cff5' {
submenu 'Advanced options for Ubuntu' $menuentry_id_option 'gnulinux-advanced-cdc0eb43-b3e9-4337-b245-bb62aeb7cff5' {
menuentry 'Ubuntu, with Linux 5.15.0-119-generic' --class ubuntu --class gnu-linux --class gnu --class os $menuentry_id_option 'gnulinux-5.15.0-119-generic-advanced-cdc0eb43-b3e9-4337-b245-bb62aeb7cff5' {
menuentry 'Ubuntu, with Linux 5.15.0-119-generic (recovery mode)' --class ubuntu --class gnu-linux --class gnu --class os $menuentry_id_option 'gnulinux-5.15.0-119-generic-recovery-cdc0eb43-b3e9-4337-b245-bb62aeb7cff5' {
menuentry 'Ubuntu, with Linux 5.15.0-105-generic' --class ubuntu --class gnu-linux --class gnu --class os $menuentry_id_option 'gnulinux-5.15.0-105-generic-advanced-cdc0eb43-b3e9-4337-b245-bb62aeb7cff5' {
menuentry 'Ubuntu, with Linux 5.15.0-105-generic (recovery mode)' --class ubuntu --class gnu-linux --class gnu --class os $menuentry_id_option 'gnulinux-5.15.0-105-generic-recovery-cdc0eb43-b3e9-4337-b245-bb62aeb7cff5' {
menuentry 'Ubuntu, with Linux 5.15.0-84-generic' --class ubuntu --class gnu-linux --class gnu --class os $menuentry_id_option 'gnulinux-5.15.0-84-generic-advanced-cdc0eb43-b3e9-4337-b245-bb62aeb7cff5' {
menuentry 'Ubuntu, with Linux 5.15.0-84-generic (recovery mode)' --class ubuntu --class gnu-linux --class gnu --class os $menuentry_id_option 'gnulinux-5.15.0-84-generic-recovery-cdc0eb43-b3e9-4337-b245-bb62aeb7cff5' {
menuentry 'Ubuntu, with Linux 5.15.0-78-generic' --class ubuntu --class gnu-linux --class gnu --class os $menuentry_id_option 'gnulinux-5.15.0-78-generic-advanced-cdc0eb43-b3e9-4337-b245-bb62aeb7cff5' {
menuentry 'Ubuntu, with Linux 5.15.0-78-generic (recovery mode)' --class ubuntu --class gnu-linux --class gnu --class os $menuentry_id_option 'gnulinux-5.15.0-78-generic-recovery-cdc0eb43-b3e9-4337-b245-bb62aeb7cff5' {
menuentry 'UEFI Firmware Settings' $menuentry_id_option 'uefi-firmware' {</p>
</blockquote>
<p>说明可选内核版本有<code v-pre>Ubuntu, with Linux 5.15.0-119-generic</code>、<code v-pre>Ubuntu, with Linux 5.15.0-105-generic</code>、<code v-pre>Ubuntu, with Linux 5.15.0-84-generic</code>、<code v-pre>Ubuntu, with Linux 5.15.0-78-generic</code></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 查看nvidia驱动版本匹配</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">ls</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /var/lib/dkms/nvidia/</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 修改GRUB文件</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> vi</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /etc/default/grub</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改<code v-pre>GRUB_DEFAULT=0</code>的<code v-pre>0</code>值为<code v-pre>&quot;Advanced options for Ubuntu&gt;合适的内核版本&quot;</code></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 更新grub</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> update-grub</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 重启</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> reboot</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


