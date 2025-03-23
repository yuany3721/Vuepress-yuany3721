<template><div><ul>
<li>
<p>symmetric cipher model <img src="@source/学习笔记/现代密码学理论与实践/img/Pasted-6.png" alt="" loading="lazy" width="459" height="300"></p>
<ul>
<li>Plaintext: X</li>
<li>Cyphertext: Y</li>
<li>Encryption algorithm: E</li>
<li>Secret Key: K</li>
<li>Decryption algorithm: D</li>
</ul>
</li>
<li>
<p>密码编码学</p>
<ul>
<li>转换明文为密文的运算类型：代替、置换</li>
<li>所用的密钥数：对称密码、非对称密码</li>
<li>处理明文的方法：分组密码、流密码</li>
</ul>
</li>
<li>
<p>Attacks</p>
<ul>
<li>Brute-force attack 穷举攻击</li>
<li>Cryptanalytic attack 密码分析学攻击</li>
</ul>
</li>
<li>
<p>密码安全</p>
<ul>
<li>无条件安全：无论有多少可使用的密文，都不足以唯一地确定密文所对应的明文</li>
<li>计算安全：破译密码的代价超过密文信息价值/破译密码的时间超过密文信息的有效生命期</li>
</ul>
</li>
<li>
<p>攻击类型</p>
<table>
<thead>
<tr>
<th>攻击类型</th>
<th>已知的信息</th>
</tr>
</thead>
<tbody>
<tr>
<td>唯密文攻击</td>
<td>部分或者全部密文</td>
</tr>
<tr>
<td>已知明文攻击</td>
<td>某些明文对及其相应的密文</td>
</tr>
<tr>
<td>选择明文攻击</td>
<td>分析者选择的明文以及对应的密文</td>
</tr>
<tr>
<td>选择密文攻击</td>
<td>分析者选择的密文以及对应的明文</td>
</tr>
<tr>
<td>选择文本攻击</td>
<td>用同一密钥加密的一个或多个明密文对</td>
</tr>
</tbody>
</table>
</li>
<li>
<p>凯撒密码 --&gt;  单表替代密码   --&gt;  Playfair 密码   --&gt; Hill 密码   --&gt; AutoKey  --&gt;  一次一密</p>
</li>
<li>
<p>Caesar Cipher --&gt; Monoalpabetic Cipher  --&gt;  Polyalphabetic Cipher  --&gt;  One-Time Pad</p>
</li>
</ul>
</div></template>


