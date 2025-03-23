<template><div><blockquote>
<p>Version: Ubuntu Server 20.04.3 LTS</p>
</blockquote>
<ol>
<li>建立自己的脚本，如<code v-pre>wlt.sh</code></li>
<li>修改脚本执行权限<code v-pre>chmod 775 wlt.sh</code></li>
<li>将脚本放入<code v-pre>/etc/profile.d</code>路径下即可 <code v-pre>/etc/init.d update-rc.d wlt.sh defaults 91</code></li>
</ol>
</div></template>


