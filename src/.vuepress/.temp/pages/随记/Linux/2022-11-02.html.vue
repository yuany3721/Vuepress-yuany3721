<template><div><p><strong>通常，Ubuntu Server 安装完成后已经自动配置了 swap 分区，使用<code v-pre>sudo swapon --show</code>或者<code v-pre>free -m</code>查看</strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 建立swapfile</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> fallocate</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -l</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 4G</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /swap.img</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 设置权限</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> chmod</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 600</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /swap.img</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 配置分区生效</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> mkswap</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /swap.img</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> swapon</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /swap.img</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># sudo cp /etc/fstab /etc/fstab.bak</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">echo</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/swap.img none swap sw 0 0</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> |</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> tee</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -a</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /etc/fstab</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 查看分区生效情况</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># sudo swapon --show</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># free -m</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>分区大小参考：</p>
<table>
<thead>
<tr>
<th>RAM(GB)</th>
<th>No hibernation</th>
<th>With Hibernation</th>
<th>Maximum</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>1</td>
<td>2</td>
<td>2</td>
</tr>
<tr>
<td>2</td>
<td>1</td>
<td>3</td>
<td>4</td>
</tr>
<tr>
<td>3</td>
<td>2</td>
<td>5</td>
<td>6</td>
</tr>
<tr>
<td>4</td>
<td>2</td>
<td>6</td>
<td>8</td>
</tr>
<tr>
<td>5</td>
<td>2</td>
<td>7</td>
<td>10</td>
</tr>
<tr>
<td>6</td>
<td>2</td>
<td>8</td>
<td>12</td>
</tr>
<tr>
<td>8</td>
<td>3</td>
<td>11</td>
<td>16</td>
</tr>
<tr>
<td>12</td>
<td>3</td>
<td>15</td>
<td>24</td>
</tr>
<tr>
<td>16</td>
<td>4</td>
<td>20</td>
<td>32</td>
</tr>
<tr>
<td>24</td>
<td>5</td>
<td>29</td>
<td>48</td>
</tr>
<tr>
<td>32</td>
<td>6</td>
<td>38</td>
<td>64</td>
</tr>
<tr>
<td>64</td>
<td>8</td>
<td>72</td>
<td>128</td>
</tr>
<tr>
<td>128</td>
<td>11</td>
<td>139</td>
<td>256</td>
</tr>
<tr>
<td>256</td>
<td>256</td>
<td>512</td>
<td>512</td>
</tr>
<tr>
<td>512</td>
<td>512</td>
<td>1024</td>
<td>1024</td>
</tr>
<tr>
<td>1024</td>
<td>1024</td>
<td>2048</td>
<td>2048</td>
</tr>
</tbody>
</table>
</div></template>


