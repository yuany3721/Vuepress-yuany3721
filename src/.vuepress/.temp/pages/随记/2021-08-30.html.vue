<template><div><ol>
<li>A（Address）记录 将域名指向 IP 地址（Ipv4）</li>
<li>MX（Mail Exchange）记录 邮件交换记录，用于电子邮件系统发邮件时根据收信人的地址后缀来定位邮件服务器</li>
<li>CNAME（Canonical Name）记录 通常称别名解析，可实现将域名指向另一个域名或 IP 地址</li>
<li>URL（Uniform Resource Locator）转发 网址转发，如果没有一个独立的 IP 地址或者有一个域名 B，想在访问 A 域名时访问到 B 域名的内容，这时就可以通过 URL 转发来实现。URL 转发可以转发到某一个目录或某一个文件上，而 CName 不可以</li>
<li>NS（Name Server）记录 域名服务器记录，用来指定该域名由哪个 DNS 服务器来进行解析</li>
<li>AAAA 记录 将域名指向 Ipv6 地址</li>
<li>TXT 记录 文本记录</li>
<li>PTR 值（Pointer） 用于将一个 IP 地址映射到对应的域名，也可以看成是 A 记录的反向解析</li>
<li>SRV 记录 服务定位器，记录了哪台服务器提供了何种服务</li>
<li>CAA（Certificate Authority Authorization）记录 认证机构授权，限定了特定域名颁发的证书和 CA（证书颁发机构）之间的联系</li>
</ol>
</div></template>


