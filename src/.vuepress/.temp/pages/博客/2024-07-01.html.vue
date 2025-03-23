<template><div><h2 id="需求" tabindex="-1"><a class="header-anchor" href="#需求"><span>需求</span></a></h2>
<ol>
<li>
<p>在不同地点的网络设备虚拟组网</p>
</li>
<li>
<p>虚拟网络中各设备可以访问<code v-pre>172.16.60.0/23</code>内网网段设备</p>
</li>
</ol>
<h2 id="创建-zerotier-虚拟网络" tabindex="-1"><a class="header-anchor" href="#创建-zerotier-虚拟网络"><span>创建 ZeroTier 虚拟网络</span></a></h2>
<p>参考<a href="https://docs.zerotier.com/" target="_blank" rel="noopener noreferrer">官方文档</a></p>
<h2 id="配置-moon-节点" tabindex="-1"><a class="header-anchor" href="#配置-moon-节点"><span>配置 moon 节点</span></a></h2>
<p>直接通过 ZeroTier 官方节点建立网络连接延迟太高，使用本地服务器建立 moon 节点进行加速。</p>
<ol>
<li>基础配置</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 安装zerotier-one</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">curl</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -s</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> https://install.zerotier.com</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> |</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> bash</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 加入创建好的虚拟网络</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> zerotier-cli</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> join</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> xxxxxxxx</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 ZeroTier Central 网络管理的 Members 中选择该设备进行授权，并勾选<code v-pre>Allow Ethernet Bridging</code>。</p>
<ol start="2">
<li>生成并应用 moon 配置</li>
</ol>
<p>参考<a href="https://docs.zerotier.com/roots" target="_blank" rel="noopener noreferrer">Private Root Servers</a></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 生成moon配置文件</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">cd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /var/lib/zerotier-one</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> zerotier-idtool</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> initmoon</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> identity.public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> >></span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> moon.json</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 编辑配置文件</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 将"stableEndpoints": [] 修改成 "stableEndpoints": ["ServerIP/9993"]，ServerIP是服务器的公网IP</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 生成moon文件</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> zerotier-idtool</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> genmoon</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> moon.json</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 查看生成的moon文件</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">ls</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /var/lib/zerotier-one</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 应用moon文件</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> mkdir</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> moons.d</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> mv</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 000000xxxxxxxxxx.moon</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> moons.d</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> service</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> zerotier-one</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> restart</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>使用 moon 节点</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> zerotier-cli</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> orbit</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> xxxxxxxxxx</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> xxxxxxxxxx</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 这里xxxxxxxxxx是前面生成的moon文件除了那些0之外的部分，即节点ID</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>如何检查是否成功应用 moon 节点</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> zerotier-cli</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> listpeers</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>该命令会输出一行有关 moon 的信息，如果没有成功应用，应该类似于<code v-pre>200 listpeers xxxxxxxxx - -1 - MOON</code>，通常情况下是防火墙的问题，需要打开<code v-pre>9993/udp</code>，包括服务器防火墙、运营商安全组之类的。</p>
<p>也可以通过虚拟网络中设备相互 ping 看延迟检查，如果成功应用 moon 节点，相互 ping 的延迟最坏情况下是比各自 ping moon 节点延迟之和略高几 ms。以我的网络为例，A 设备与 moon 节点 ping 约 30ms，B 设备与 moon 节点 ping 约 20ms，无 moon 节点时 AB 互 ping 约 300+ms，moon 节点生效时互 ping 约 30+ms。</p>
<h2 id="与物理网络组网" tabindex="-1"><a class="header-anchor" href="#与物理网络组网"><span>与物理网络组网</span></a></h2>
<p>参考<a href="https://docs.zerotier.com/route-between-phys-and-virt#configure-iptables" target="_blank" rel="noopener noreferrer">Route between ZeroTier and Physical Networks</a></p>
<ol>
<li>网络说明</li>
</ol>
<p>希望加入了 ZeroTier 虚拟网络的设备可以访问<code v-pre>172.16.60.0/23</code>内网网段设备，该网段的默认网关及其它设备的配置无法修改，我有一台可以作为跳板机的内网服务器。</p>
<ol start="2">
<li>配置 ZeroTier 虚拟网络</li>
</ol>
<p>配置 ZeroTier 自动分配 ipv4 地址池为<code v-pre>172.16.58.0</code>到<code v-pre>172.16.59.254</code>。在 ZeroTier Central 的网络管理中，添加 route：destination 为<code v-pre>172.16.58.0/23</code>，空置 via，提交后显示<code v-pre>172.16.58.0/23 (LAN)</code>。</p>
<ol start="3">
<li>配置内网服务器</li>
</ol>
<p>在内网服务器上安装 zerotier-one 并加入虚拟网络，在 ZeroTier Central 网络管理的 Members 中选择该网络进行授权，并勾选<code v-pre>Allow Ethernet Bridging</code>。</p>
<p>假定该服务器的地址为<code v-pre>172.16.58.58</code>，它在内网中的地址为<code v-pre>172.16.61.61</code>。此时应该可以从 moon 节点使用<code v-pre>172.16.58.58</code>正常访问到该内网服务器。</p>
<p>在 ZeroTier Central 的网络管理中，添加 route：destination 为<code v-pre>172.16.60.0/22</code>，via 为<code v-pre>172.16.58.58</code>，提交后显示<code v-pre>172.16.58.0/23 via 172.16.58.58</code>。</p>
<p><strong>注意！！！这里的掩码必须要大于该网络本来的掩码！！！</strong> 官方解释如下：</p>
<blockquote>
<p>Configure the destination route as slightly larger than the actual physical subnet, here /23 instead of /24 (a smaller number is a bigger subnet in this notation) This makes devices that are on both the physical and the ZeroTier network prefer the physical connection.</p>
</blockquote>
<p>回到内网服务器配置 NAT：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 查看网络接口</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">ip</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> a</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 找到172.16.58.58对应的ztxxxx，以及172.16.61.61对应的enpxxxx</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">PHY_IFACE</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">enpxxxx</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">ZT_IFACE</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">ztxxxx</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 配置NAT</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> iptables</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -t</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> nat</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -A</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> POSTROUTING</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -o</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> $PHY_IFACE</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -j</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> MASQUERADE</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> iptables</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -A</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> FORWARD</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -i</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> $PHY_IFACE</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -o</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> $ZT_IFACE</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -m</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> state</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --state</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> RELATED,ESTABLISHED</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -j</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ACCEPT</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> iptables</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -A</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> FORWARD</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -i</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> $ZT_IFACE</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -o</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> $PHY_IFACE</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -j</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ACCEPT</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>持久化路由表，使重启有效：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 持久化</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> apt</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> iptables-persistent</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 备份iptables</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> cp</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /etc/iptables/rules.v4</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /etc/iptables/rules.v4.bak</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 更新路由表</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> sh</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -c</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">iptables-save > /etc/iptables/rules.v4</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>至此，所有加入 ZeroTier 的设备均可以直接访问<code v-pre>172.16.60.0/23</code>网段的内网设备了。但是如果内网设备想访问<code v-pre>172.16.58.0/23</code>网段设备，仍然需要加入 ZeroTier 虚拟网络。</p>
</div></template>


