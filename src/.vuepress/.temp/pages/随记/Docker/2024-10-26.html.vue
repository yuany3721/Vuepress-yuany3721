<template><div><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h2>
<p>在<RouteLink to="/%E9%9A%8F%E8%AE%B0/Docker/2024-07-01.html">ZeroTier 组网的简单应用</RouteLink>中，我们自建了 Zerotier Moon，并使用 Moon 优化了连接延迟。</p>
<p>但是在实际使用中，很多时候明明可以 ping 通 Moon 所在 IP，但出现了断开连接的问题，猜测可能原因是与 Planet 服务器连接不稳定，导致根本走不到 Moon 这一步，因此考虑自建 Planet 和 Controler。</p>
<h2 id="卸载-zerotier-one-环境" tabindex="-1"><a class="header-anchor" href="#卸载-zerotier-one-环境"><span>卸载 Zerotier One 环境</span></a></h2>
<p>由于<a href="https://github.com/xubiaolin/docker-zerotier-planet" target="_blank" rel="noopener noreferrer">docker-zerotier-planet</a>使用容器化部署，为了避免端口冲突等问题，干脆把原来的 Zerotier-One 卸载掉：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> dpkg</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -P</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> zerotier-one</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> rm</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -rf</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /var/lib/zerotier-one/</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置-docker-环境" tabindex="-1"><a class="header-anchor" href="#配置-docker-环境"><span>配置 docker 环境</span></a></h2>
<p>参考<RouteLink to="/%E9%9A%8F%E8%AE%B0/note/docker/2023-06-27.html">ubuntu 安装 docker</RouteLink></p>
<h2 id="配置-planet" tabindex="-1"><a class="header-anchor" href="#配置-planet"><span>配置 Planet</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 下载源码</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> clone</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> https://ghproxy.imoyuapp.win/https://github.com/xubiaolin/docker-zerotier-planet.git</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 执行安装脚本</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">cd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> docker-zerotier-planet</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">  ./deploy.sh</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装过程很安逸，按提示操作就完事了，安装结束后进入 web 页面新建网络、配置 ip 等操作与官方 Zerotier Controller 类似</p>
<h2 id="客户端配置" tabindex="-1"><a class="header-anchor" href="#客户端配置"><span>客户端配置</span></a></h2>
<h3 id="windows" tabindex="-1"><a class="header-anchor" href="#windows"><span>Windows</span></a></h3>
<p>下载<code v-pre>planet</code>文件，覆盖到<code v-pre>C:\ProgramData\ZeroTier\One</code>中</p>
<p><code v-pre>Win+R</code> <code v-pre>services.msc</code>找到 Zerotier One，重启服务，然后就可以加入新建的网络了</p>
<h3 id="linux" tabindex="-1"><a class="header-anchor" href="#linux"><span>Linux</span></a></h3>
<p>类似地，下载<code v-pre>planet</code>文件，覆盖到<code v-pre>/var/lib/zerotier-one</code>中，然后重启服务<code v-pre>sudo service zerotier-one restart</code>，重启好久可以加入网络了</p>
</div></template>


