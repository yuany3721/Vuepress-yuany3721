<template><div><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2>
<p><strong>ssh 是客户端，sshd 才是服务端</strong></p>
<p><strong>2023-6-20 Update</strong>: 在 Ubuntu22.04.2 中包名已经更新为<code v-pre>openssh-clien</code>, <code v-pre>openssh-server</code>, <code v-pre>openssh-sftp-server</code></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 查看是否已经安装</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">dpkg</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -l</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> |</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> grep</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ssh</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 安装openssh server</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> apt</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> openssh-server</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="修改端口" tabindex="-1"><a class="header-anchor" href="#修改端口"><span>修改端口</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 修改端口</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> vi</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /etc/ssh/sshd_config</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 修改Port后的参数</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 重启ssh</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> service</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ssh</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> restart</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>远程连接</strong></li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">ssh</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -p</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 修改后的端口</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 用户名@ip地址</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="配置-sftp" tabindex="-1"><a class="header-anchor" href="#配置-sftp"><span>配置 sftp</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 使用系统自带的internal-sftp服务</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo vi /etc/ssh/sshd_config</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 修改以下字段</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">Subsystem</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> sftp</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> internal-sftp</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 限定用户</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">Match Group sftp</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 更改登录后默认路径</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">ChrootDirectory /</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


