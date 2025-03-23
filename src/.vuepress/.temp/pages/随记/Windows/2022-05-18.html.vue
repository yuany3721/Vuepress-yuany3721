<template><div><p>参考<a href="https://stackoverflow.com/questions/52107170/hiding-the-full-file-path-in-a-powershell-command-prompt-in-vscode" target="_blank" rel="noopener noreferrer">hiding-the-full-file-path-in-a-powershell-command-prompt-in-vscode</a></p>
<ol>
<li><code v-pre>test-path $profile</code> (is there a profile set up?)</li>
<li><code v-pre>new-item -path $profile -itemtype file -force</code> (assuming the answer to the above is false)</li>
<li><code v-pre>notepad $profile</code> (opens notepad)</li>
<li>paste in (from the SuperUser answer above)</li>
</ol>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>function prompt {</span></span>
<span class="line"><span>  $p = Split-Path -leaf -path (Get-Location)</span></span>
<span class="line"><span>  "$p> "</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5">
<li>save (you shouldn't have to chose a location, it is already done for you)
<blockquote>
<p>这里其实直接新开一个 powershell 窗口就可以了</p>
</blockquote>
</li>
<li>reload vscode - you will probably get an error message about running scripts (or just do next step before reload)</li>
<li><code v-pre>Set-ExecutionPolicy RemoteSigned -Scope CurrentUser</code> (at your integrated terminal PS prompt, also from the SuperUser answer)</li>
<li>reload vscode</li>
</ol>
</div></template>


