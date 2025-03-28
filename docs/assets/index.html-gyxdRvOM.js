import{_ as n,c as l,a,b as t,e as i,d as h,w as p,r,o as d}from"./app-YaGH6_b-.js";const k={};function c(o,s){const e=r("RouteLink");return d(),l("div",null,[s[2]||(s[2]=a(`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><p>包括上位机状态监控、通过上位机进行的设备状态监控。</p><h2 id="上位机状态监控" tabindex="-1"><a class="header-anchor" href="#上位机状态监控"><span>上位机状态监控</span></a></h2><p>使用<code>homepage</code>作为监控面板，结合<code>glances</code>等状态监控工具，可以实现对系统各环节可用性、可达性等状态的实时监控。</p><h3 id="homepage" tabindex="-1"><a class="header-anchor" href="#homepage"><span>homepage</span></a></h3><p><a href="https://github.com/gethomepage/homepage" target="_blank" rel="noopener noreferrer">homepage</a> 是一个现代化、完全静态且高度可定制的应用仪表盘，支持超过 100 种服务的集成和多语言翻译，可以轻松通过 YAML 文件或 Docker 标签进行配置。通过它对上位机的系统信息、资源使用情况和运行状态进行实时显示和监控。</p><p>使用 docker compose 安装：</p><div class="language-yml line-numbers-mode" data-highlighter="shiki" data-ext="yml" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">services</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    homepage</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">        image</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ghcr.io/gethomepage/homepage:latest</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">        container_name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> homepage</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">        restart</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> always</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">        ports</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">            -</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 7001:3000</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">        volumes</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">            -</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> //c/Users/Administrator/Documents/homepage/config:/app/config</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">            -</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /var/run/docker.sock:/var/run/docker.sock</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">        environment</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">            -</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> HOMEPAGE_ALLOWED_HOSTS=*</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">            -</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> TZ=Asia/Shanghai</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="glances" tabindex="-1"><a class="header-anchor" href="#glances"><span>glances</span></a></h3><p><a href="https://github.com/nicolargo/glances" target="_blank" rel="noopener noreferrer">glances</a> 是一个跨平台的系统监控工具，支持在命令行界面中显示系统的实时状态信息。它可以监控 CPU、内存、磁盘、网络、进程等多种系统资源，并提供多种数据导出选项和 Grafana 仪表盘集成。<code>glances</code> 可以通过 Web 界面、API 或命令行进行访问，适用于多种使用场景。</p>`,10)),t("p",null,[s[1]||(s[1]=i("参考")),h(e,{to:"/%E9%9A%8F%E8%AE%B0/Windows/2025-03-14-ca1117.html"},{default:p(()=>s[0]||(s[0]=[i("使用 nssm 注册 glances 为服务运行")])),_:1})]),s[3]||(s[3]=a('<h2 id="设备状态监控" tabindex="-1"><a class="header-anchor" href="#设备状态监控"><span>设备状态监控</span></a></h2><h3 id="dc-电源" tabindex="-1"><a class="header-anchor" href="#dc-电源"><span>DC 电源</span></a></h3><p>DC 电源型号为 DH1766-2，每端使用两台该型号电源对实验设备进行供电，分别配置 IP 为 172.20.2x.3 和 172.20.2x.4。通过上位机，可以实时监控 DC 电源的工作状态、电压、电流等参数。</p><h3 id="ustc-awg" tabindex="-1"><a class="header-anchor" href="#ustc-awg"><span>USTC AWG</span></a></h3><p>USTC AWG 是超导量子计算团队开发的高速任意波形发生器开发板，配置 IP 为 172.20.2x.201 和 172.20.2x.202。通过上位机，可以监控 AWG 的工作状态、输出波形等参数。</p>',5))])}const m=n(k,[["render",c]]),u=JSON.parse('{"path":"/tf/%E7%8A%B6%E6%80%81%E7%9B%91%E6%8E%A7/","title":"状态监控","lang":"zh-CN","frontmatter":{"title":"状态监控","createTime":"2025/03/21 19:38:31","tags":["TF"],"categories":["blog"],"permalink":"/tf/状态监控/"},"headers":[],"git":{"updatedTime":1742828953000,"contributors":[{"name":"yuany3721","username":"yuany3721","email":"li1116@mail.ustc.edu.cn","commits":1,"avatar":"https://avatars.githubusercontent.com/yuany3721?v=4","url":"https://github.com/yuany3721"}]},"filePathRelative":"博客/TF软件/基础环境配置/状态监控.md","categoryList":[{"id":"c50d13","sort":10000,"name":"博客"},{"id":"4f68c0","sort":10001,"name":"TF软件"},{"id":"dc1229","sort":10002,"name":"基础环境配置"}]}');export{m as comp,u as data};
