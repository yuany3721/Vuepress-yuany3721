<template><div><p>机器 A 访问 机器 B</p>
<ol>
<li>
<p>在机器 A 上<code v-pre>ssh-keygen</code></p>
</li>
<li>
<p>把机器 A 用户目录下<code v-pre>.ssh</code>文件夹里<code v-pre>id_rsa.pub</code>的公钥复制到机器 B 用户目录下<code v-pre>.ssh</code>文件夹里<code v-pre>authorized_keys</code>中</p>
</li>
</ol>
</div></template>


