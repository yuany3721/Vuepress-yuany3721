<template><div><p>通常会出现在远端仓库有文件、本地仓库也有文件的时候，是因为这两个仓库在 sync 之前根本没有建立起来联系</p>
<h2 id="解决方法-1" tabindex="-1"><a class="header-anchor" href="#解决方法-1"><span>解决方法 1</span></a></h2>
<p>先<code v-pre>git clone</code>远端仓库，然后把本地文件移动到下载的远端仓库中，再提交上去，相当于进行了一次对远端仓库的 commit</p>
<h2 id="解决方法-2" tabindex="-1"><a class="header-anchor" href="#解决方法-2"><span>解决方法 2</span></a></h2>
<p>强制合并：<code v-pre>git pull origin master --allow-unrelated-histories</code></p>
<p>然后解决 conflict 再 push 回去，<code v-pre>git push origin local_main:remote_main</code></p>
</div></template>


