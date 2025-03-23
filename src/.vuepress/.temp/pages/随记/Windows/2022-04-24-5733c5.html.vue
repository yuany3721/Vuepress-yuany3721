<template><div><h1 id="生成-jre" tabindex="-1"><a class="header-anchor" href="#生成-jre"><span>生成 jre</span></a></h1>
<p>打开管理员权限的 cmd</p>
<div class="language-powershell line-numbers-mode" data-highlighter="shiki" data-ext="powershell" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">bin\</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">jlink.exe</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> --</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">module</span><span style="--shiki-light:#999999;--shiki-dark:#666666">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">path jmods </span><span style="--shiki-light:#999999;--shiki-dark:#666666">--</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">add-modules</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> java.desktop </span><span style="--shiki-light:#999999;--shiki-dark:#666666">--</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">output jre</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="配置路径" tabindex="-1"><a class="header-anchor" href="#配置路径"><span>配置路径</span></a></h2>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>JAVA_HOME   :   %JAVA11_HOME%</span></span>
<span class="line"><span>JAVA8_HOME  :   C:\Program Files\Java\jdk-8</span></span>
<span class="line"><span>JAVA11_HOME :   C:\Program Files\Java\jdk-11</span></span>
<span class="line"><span>JAVA17_HOME :   C:\Program Files\Java\jdk-17</span></span>
<span class="line"><span>CLASSPATH   :   .;%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar;</span></span>
<span class="line"><span>PATH        :   .;%JAVA_HOME%\bin;%JAVA_HOME%\jre\bin;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>切换版本时只需改<code v-pre>JAVA_HOME</code>后面的指向即可</p>
</div></template>


