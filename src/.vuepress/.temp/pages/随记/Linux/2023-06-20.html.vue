<template><div><h2 id="配置联网超时" tabindex="-1"><a class="header-anchor" href="#配置联网超时"><span>配置联网超时</span></a></h2>
<blockquote>
<p>启动时卡在<code v-pre>A start job is running for wait for network to be Configured</code></p>
</blockquote>
<p>进入目录<code v-pre>/etc/systemd/system/network-online.target.wants</code>修改配置文件<code v-pre>systemd-networkd-wait-online.service</code></p>
<p>在[Service]下添加<code v-pre>TimeoutStartSec=2sec</code>设置超时时间为 2 秒:</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Service</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">Type</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">oneshot</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">ExecStart</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/lib/systemd/systemd-networkd-wait-online</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">RemainAfterExit</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">yes</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">TimeoutStartSec</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">2sec</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置-swap-分区" tabindex="-1"><a class="header-anchor" href="#配置-swap-分区"><span>配置 swap 分区</span></a></h2>
<p>参考<RouteLink to="/%E9%9A%8F%E8%AE%B0/Linux/2022-11-02.html">Ubuntu 设置 swap 分区</RouteLink></p>
<h2 id="挂载数据盘" tabindex="-1"><a class="header-anchor" href="#挂载数据盘"><span>挂载数据盘</span></a></h2>
<ol>
<li>
<p>使用<code v-pre>df -h</code>命令查看磁盘信息，没有就是未挂载。</p>
</li>
<li>
<p>格式化与分区：</p>
</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 查看分区信息</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> fdisk</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -l</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 磁盘格式化/分区</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> fdisk</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /dev/sdabcd</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 一些基本命令：m菜单 p打印分区 d删除分区 n新建分区 w保存并退出</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 格式化分区</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> mkfs</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -t</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ext4</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /dev/sdabcd</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>挂载：</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 挂载</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> mkdir</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /data</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> mount</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /dev/sdabcd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /data</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>启动自动挂载：</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 查看UUID</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">blkid</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 修改</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> vi</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /etc/fstab</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># UUID=对应的UUID /data ext4 defaults 0 1</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 检查配置文件是否有误</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> mount</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -a</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置-openssh" tabindex="-1"><a class="header-anchor" href="#配置-openssh"><span>配置 OpenSSH</span></a></h2>
<p>参考<RouteLink to="/%E9%9A%8F%E8%AE%B0/Linux/2021-09-28-88168a.html">Ubuntu 配置 ssh 和 sftp</RouteLink></p>
<h2 id="连接-wifi" tabindex="-1"><a class="header-anchor" href="#连接-wifi"><span>连接 wifi</span></a></h2>
<ol>
<li>
<p><code v-pre>ip a</code>查看网络设备信息</p>
</li>
<li>
<p>编辑 netplan 配置文件</p>
</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 查看原有配置文件目录</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">ls</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /etc/netplan</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 如果没有则生成一个新的配置文件</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># netplan generate</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 编辑配置文件</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> vi</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /etc/netplan/xxx.yaml</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 添加wifi配置</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">network:</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">    version:</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> ****</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">    wifis:</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">        wifi设备名:</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">            access-points:</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">                wifi_ssid:</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">                    password:</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> ****</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">        dhcp4:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> true</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 保存后验证(验证通过并应用)</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> netplan</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> try</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 应用</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># sudo netplan apply</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 查看网络信息</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">ip</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> addr</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>连接成功后随便 ping 一个测试一下</p>
<ol start="3">
<li><code v-pre>sudo apt install net-tools</code>(可选)</li>
</ol>
<h2 id="一些小问题" tabindex="-1"><a class="header-anchor" href="#一些小问题"><span>一些小问题</span></a></h2>
<ol>
<li>使用独立显卡输出，安装系统屏幕显示多次卡在不一样的位置，通常是因为安装程序不带独显驱动，使用集显输出或 IPMI 远程安装即可</li>
</ol>
</div></template>


