<template><div><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2>
<p>AOM的驱动信号及扫频控制信号由AD9910及其控制板提供，本文档旨在对硬件连接、软件使用作出基本说明。</p>
<figure><img src="@source/notes/文档/AD9910/img/AD9910.png" alt="AD9910" tabindex="0" loading="lazy" width="527" height="364"><figcaption>AD9910</figcaption></figure>
<p>后面称为“核心板”</p>
<figure><img src="@source/notes/文档/AD9910/img/STMCTR.png" alt="STMCTR" tabindex="0" loading="lazy" width="426" height="404"><figcaption>STMCTR</figcaption></figure>
<p>后面称为“控制板”</p>
<h2 id="硬件说明" tabindex="-1"><a class="header-anchor" href="#硬件说明"><span>硬件说明</span></a></h2>
<h3 id="核心板" tabindex="-1"><a class="header-anchor" href="#核心板"><span>核心板</span></a></h3>
<figure><img src="@source/notes/文档/AD9910/img/AD9910_E.png" alt="AD9910" tabindex="0" loading="lazy" width="529" height="365"><figcaption>AD9910</figcaption></figure>
<ol>
<li>
<p>外部连接</p>
<ul>
<li>
<p>通过左侧<code v-pre>DC-5V</code>连接到台式电源，提供5V供电</p>
</li>
<li>
<p>通过W1跳线帽（紫色方框）进行时钟源选择，跳线帽短接左侧两个引脚时为晶振提供时钟（推荐），短接右侧两个引脚时为外部时钟源（蓝色方框）</p>
</li>
<li>
<p>DDS输出为靠近核心板中间的SMA接头（红色方框）</p>
</li>
<li>
<p>通过下方排针与控制板连接（绿色方框）</p>
</li>
</ul>
</li>
<li>
<p>注意事项</p>
<ul>
<li>
<p>（重要）DDS输出含有约1.5V的直流成分， <strong>！！！必须！！！</strong> 连接隔直器后再接入后级设备</p>
</li>
<li>
<p>（重要）外部时钟源输入时，输入频率 <strong>！！！必须 ！！！</strong> 为40MHz，推荐信号幅值为0~3V，推荐信号类型为方波</p>
</li>
<li>
<p>（重要）<strong>注意与控制板的排线连接方向！！！没有防呆设计！！！连接错误可能直接烧掉芯片</strong>，默认已经连接好</p>
</li>
<li>
<p>（推荐）上电前将模块开关（红色圆框）置于关闭状态</p>
</li>
<li>
<p>（不推荐）核心板出现输出异常时，直接通过开关断电重启核心板，这种硬件重置的方式只有在软件重置无效时才使用</p>
</li>
</ul>
</li>
</ol>
<h3 id="控制板" tabindex="-1"><a class="header-anchor" href="#控制板"><span>控制板</span></a></h3>
<figure><img src="@source/notes/文档/AD9910/img/STMCTR_E.png" alt="STMCTR" tabindex="0" loading="lazy" width="426" height="404"><figcaption>STMCTR</figcaption></figure>
<ol>
<li>
<p>外部连接</p>
<ul>
<li>
<p>通过右侧USB接口连接到上位机，上位机同时可以为模块提供5V供电，使用串口与上位机通信</p>
</li>
<li>
<p>通过左侧SMA接头（红色方框）与1pps时钟源连接</p>
</li>
<li>
<p>通过W1跳线帽（紫色方框）进行时钟源选择，跳线帽短接左侧两个引脚时为晶振提供时钟（推荐），短接右侧两个引脚时为外部时钟源（蓝色方框）</p>
</li>
<li>
<p>通过右上排针与核心板连接（绿色方框）</p>
</li>
</ul>
</li>
<li>
<p>注意事项</p>
<ul>
<li>
<p>（重要）外部1pps时钟输入幅值<strong>必须</strong>大于1.8V（<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>V</mi><mrow><mi>p</mi><mi>e</mi><mi>a</mi><mi>k</mi><mo>−</mo><mi>t</mi><mi>o</mi><mo>−</mo><mi>p</mi><mi>e</mi><mi>a</mi><mi>k</mi></mrow></msub></mrow><annotation encoding="application/x-tex">V_{peak-to-peak}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.9694em;vertical-align:-0.2861em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:-0.2222em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">p</span><span class="mord mathnormal mtight">e</span><span class="mord mathnormal mtight" style="margin-right:0.03148em;">ak</span><span class="mbin mtight">−</span><span class="mord mathnormal mtight">t</span><span class="mord mathnormal mtight">o</span><span class="mbin mtight">−</span><span class="mord mathnormal mtight">p</span><span class="mord mathnormal mtight">e</span><span class="mord mathnormal mtight" style="margin-right:0.03148em;">ak</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2861em;"><span></span></span></span></span></span></span></span></span></span>)，为了避免意外噪声导致意外触发，建议输入幅值大于2V，蓝色方框处的蓝色LED灯在每次触发信号到来时会切换开关状态，作为时钟信号是否正常给到控制板的依据</p>
</li>
<li>
<p>（重要）注意与控制板的排线连接方向，<strong>有防呆设计，不要硬插</strong>，默认已经连接好</p>
</li>
<li>
<p>（推荐）直接使用USB接口为模块供电，如果使用USB-HUB，需要注意HUB连接设备过多时，将USB-HUB连接上额外供电，<code v-pre>DC-5V</code>供电接口只在供电无法满足时才需要连接</p>
</li>
<li>
<p>（推荐）上电前将模块开关（右侧红色圆框）置于关闭状态</p>
</li>
<li>
<p>（推荐）核心板出现输出异常时，可以通过开关（左右侧红色圆框均可）断电重启控制板，达到软件重置核心板的效果</p>
</li>
<li>
<p>（不重要）核心板的<code v-pre>DC-5V</code>不要与控制板的<code v-pre>DC-5V</code>使用同一电源供电，以减小对DDS输出噪声的影响</p>
</li>
</ul>
</li>
</ol>
<h3 id="启动顺序" tabindex="-1"><a class="header-anchor" href="#启动顺序"><span>启动顺序</span></a></h3>
<ol>
<li>
<p>按照外部连接说明连接核心板和控制板，检查模块开关均处于关闭状态（板卡上无红灯亮起）</p>
</li>
<li>
<p>打开台式电源供电开关</p>
</li>
<li>
<p>打开DDS模块开关（板上红灯亮起）</p>
</li>
<li>
<p>打开控制板模块开关（板上红灯亮起）</p>
</li>
</ol>
<h2 id="软件配置" tabindex="-1"><a class="header-anchor" href="#软件配置"><span>软件配置</span></a></h2>
<h3 id="相关文件" tabindex="-1"><a class="header-anchor" href="#相关文件"><span>相关文件</span></a></h3>
<p>服务端：<a href="/files/AD9910/server_web.py">server_web.py</a></p>
<p>服务端依赖：<a href="/files/AD9910/requirements.txt">requirements.txt</a></p>
<p>客户端调用示例：<a href="/files/AD9910/client_web.py">client_web.py</a></p>
<h3 id="使用说明" tabindex="-1"><a class="header-anchor" href="#使用说明"><span>使用说明</span></a></h3>
<ol>
<li>
<p>下载依赖<code v-pre>requirements.txt</code>并使用pip安装依赖</p>
</li>
<li>
<p>（重要）程序运行前必须先确认已经正确连接控制板</p>
</li>
<li>
<p>运行服务端程序<code v-pre>server_web.py</code>，程序运行后会自动选择第一个设备描述中含有<code v-pre>STM</code>的串口进行连接通信</p>
</li>
<li>
<p>编写并运行客户端程序</p>
</li>
</ol>
<h3 id="软件接口" tabindex="-1"><a class="header-anchor" href="#软件接口"><span>软件接口</span></a></h3>
<p><code v-pre>server_web.py</code>成功运行后，控制台会输出如下内容，表明服务端已经成功连接上控制板端口，并在<code v-pre>http://127.0.0.1:56789</code>监听客户端请求：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">INFO:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">     Started</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> server</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> process</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> [xxxxx]</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">INFO:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">     Waiting</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> for</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> application</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> startup.</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">INFO:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">     Application</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> startup</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> complete.</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">INFO:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">     Uvicorn</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> running</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> on</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> http://127.0.0.1:56789</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> (Press </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">CTRL+C</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> to</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> quit</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>client_web.py</code>中包含了所有接口的调用样例代码，以下是服务端的接口说明：</p>
<table>
<thead>
<tr>
<th>功能</th>
<th>请求路径</th>
<th>请求类型</th>
<th>请求体内容</th>
<th>成功调用返回值</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td>测试指令</td>
<td><code v-pre>/test/</code></td>
<td>GET</td>
<td>无</td>
<td><code v-pre>{&quot;res&quot;: 1}</code></td>
<td></td>
</tr>
<tr>
<td>清空1pps序列</td>
<td><code v-pre>/ctr/</code></td>
<td>POST</td>
<td><code v-pre>{&quot;text&quot;: &quot;SYS:TIME:CLR&quot;}</code></td>
<td><code v-pre>{&quot;res&quot;: &quot;SYS:TIME:CLR&quot;}</code></td>
<td></td>
</tr>
<tr>
<td>清空1pps序列</td>
<td><code v-pre>/ctr/</code></td>
<td>POST</td>
<td><code v-pre>{&quot;text&quot;: &quot;SYS:TIME:GET?&quot;}</code></td>
<td>序列长度不足10时：<br/><code v-pre>{&quot;error&quot;: &quot;now queue size n&quot;}</code><br/>序列长度足够时：<br/><code v-pre>[&quot;2024-01-23 01:23:45.123456&quot;, ...]</code></td>
<td>序列长度不同时，返回类型不同</td>
</tr>
<tr>
<td>扫频一级触发</td>
<td><code v-pre>/ctr/</code></td>
<td>POST</td>
<td><code v-pre>{&quot;text&quot;: &quot;SYS:CURVE:START&quot;}</code></td>
<td><code v-pre>{&quot;res&quot;: &quot;SYS:CURVE:START&quot;}</code></td>
<td></td>
</tr>
<tr>
<td>结束扫频</td>
<td><code v-pre>/ctr/</code></td>
<td>POST</td>
<td><code v-pre>{&quot;text&quot;: &quot;SYS:CURVE:STOP&quot;}</code></td>
<td><code v-pre>{&quot;res&quot;: &quot;SYS:CURVE:STOP&quot;}</code></td>
<td>不会立即停止，会在扫完当前6MHz范围后不再进行下一段扫频</td>
</tr>
<tr>
<td>软件重置AD9910</td>
<td><code v-pre>/ctr/</code></td>
<td>POST</td>
<td><code v-pre>{&quot;text&quot;: &quot;SYS:RESET&quot;}</code></td>
<td><code v-pre>{&quot;res&quot;: &quot;SYS:RESET&quot;}</code></td>
<td></td>
</tr>
</tbody>
</table>
<p><strong>备注：</strong></p>
<ol>
<li>
<p>请求路径为<code v-pre>/test/</code>表示该请求的实际请求地址为<code v-pre>http://127.0.0.1:56789/test/</code></p>
</li>
<li>
<p>请求类型为<code v-pre>POST</code>的请求体需要用<code v-pre>json.dumps</code>编码</p>
</li>
<li>
<p>所有调用因为网络原因不成功的，均可以用<code v-pre>response.status_code != 200</code>判断</p>
</li>
<li>
<p>（强烈建议）使用<code v-pre>client_web.py</code>封装好的接口进行接口调用</p>
</li>
<li>
<p>（建议）使用虚拟环境运行代码，参考<RouteLink to="/blogs/note/python/2024-07-31.html">python虚拟环境配置</RouteLink></p>
</li>
</ol>
</div></template>


