(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{628:function(v,_,l){"use strict";l.r(_);var i=l(17),n=Object(i.a)({},(function(){var v=this,_=v.$createElement,l=v._self._c||_;return l("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[l("h2",{attrs:{id:"网络安全概述"}},[v._v("网络安全概述")]),v._v(" "),l("ul",[l("li",[l("strong",[v._v("网络安全")]),v._v("是指网络系统的硬件、软件及系统中的数据受到保护，不因偶然的或者恶意的原因而遭受到破坏、更改、泄露，系统连续可靠正常地运行，网络服务不中断\n"),l("ul",[l("li",[v._v("目标：保护网络系统中信息的机密性、完整性、可用性，不可抵赖性和可控性等安全属性")]),v._v(" "),l("li",[v._v("信息系统安全、网络边界安全、网络通信安全")])])]),v._v(" "),l("li",[v._v("CIA三元组\n"),l("ul",[l("li",[v._v("Confidentiality：保证信息不能被非授权访问，即使非授权用户得到信息也无法知晓信息内容 访问控制 --\x3e  阻止非授权用户获得机密信息 加密变换 --\x3e  阻止非授权用户获知信息内容")]),v._v(" "),l("li",[v._v("Integrity：维护信息的一致性，在生成、传输、存储和使用过程中不应发生人为或非人为的非授权篡改 访问控制  --\x3e  阻止篡改行为 消息摘要算法  --\x3e  检验信息是否被篡改")]),v._v(" "),l("li",[v._v("Availability：保障信息资源随时可以提供服务的能力特性，即授权用户根据需要可以随时访问所需信息")])])]),v._v(" "),l("li",[v._v("不可抵赖性：信息交互过程中，所有参与者不能否认曾经完成的操作或承诺的特性")]),v._v(" "),l("li",[v._v("真实性：信息的真实行要求信息中心所涉及的事务是客观存在的，信息的各个要素都真实且期权，信息的来源是真实可靠的")]),v._v(" "),l("li",[v._v("可控性：指对信息的传播及内容具有控制能力 信息流向、信息内容审查、对安全问题进行调查追踪")]),v._v(" "),l("li",[v._v("可审查性：出现安全问题时，提供依据与手段，以"),l("strong",[v._v("可控性为基础")])]),v._v(" "),l("li",[v._v("保鲜性（新鲜性）：信息必须在其时效内，不能过时（对物联网安全尤其重要）")]),v._v(" "),l("li",[v._v("四大安全属性：机密性、可认证性、不可抵赖性、完整性")]),v._v(" "),l("li",[v._v("网络安全体系结构：网络协议层次、安全功能和安全技术的集合\n"),l("ul",[l("li",[v._v("安全服务 X.800：为了保证系统或数据传输具有足够安全性，开放系统通信协议所提供的服务 RFC 2828：一种由系统提供的对资源进行特殊保护的进程或通信服务")]),v._v(" "),l("li",[v._v("安全机制：一种措施或者技术，一些软件 或实施一个或更多安全服务的过程 认证机制、访问控制机制、加密机制、数据完整性机制、审计机制")]),v._v(" "),l("li",[v._v("安全策略：在某个安全域内，施加给所有与安全相关活动的一套规则")]),v._v(" "),l("li",[v._v("安全技术：与安全服务和安全机制对应的一系列算法、方法或方案，体现在相应的软件或管理规范等之中 密码技术、数字签名技术、防火墙技术、入侵检测技术、防病毒技术和访问控制技术等")])])]),v._v(" "),l("li",[v._v("网络攻击：采用技术手段，利用目标信息系统的安全缺陷，破坏网络信息系统的保密性、完整性、真实性、可用性、可控性与可审查性等的措施和行为 目的是窃取、修改、伪造或破坏信息，以及降低、破坏网络使用效能")]),v._v(" "),l("li",[v._v("网络防护：为保护己方网络和设备正常工作、信息数据安全而采取的措施和行动 目的是保护己方网络数据的保密性、完整性......")]),v._v(" "),l("li",[v._v("网络面临的主要威胁\n"),l("ul",[l("li",[v._v("自然因素：电磁辐射和电磁干扰、网络硬件设备自然老化、自然灾害")]),v._v(" "),l("li",[v._v("内部窃密和破坏：内部涉密人员有意或无意泄密或更改记录信息、内部人员破坏网络系统、内部非授权人员有意无意偷窃机密信息、更改网络配置和记录信息")]),v._v(" "),l("li",[v._v("信息的截获和重演")]),v._v(" "),l("li",[v._v("非法访问：非法用户进入网络或系统、合法用户以未授权方式操作")]),v._v(" "),l("li",[v._v("破坏信息完整性：改变信息流的时序，更改信息的内容；删除某个消息或消息的某些部分；在消息中插入一些信息，让收方读不懂或接收错误的信息")]),v._v(" "),l("li",[v._v("欺骗")]),v._v(" "),l("li",[v._v("抵赖：发信者事后否认曾经发送过某条消息；发信者事后否认曾经发送过某条消息的内容；发信者事后否认曾经接收过某条消息；发信者事后否认曾经接收过某条消息的内容")]),v._v(" "),l("li",[v._v("破坏系统可用性：使合法用户不能正常访问网络资源；使有严格时间要求的服务不能及时得到响应；摧毁系统")])])]),v._v(" "),l("li",[v._v("网络安全的主要研究内容和主要技术\n"),l("ul",[l("li",[v._v("网络侦察（信息探测）：运用各种技术手段、采用适当的策略对目标网络进行探测扫描，获得有关目标计算机网络系统的拓扑结构、通信体制、加密方式、网络协议与操作系统、系统功能，以及目标地理位置等各方面的有用信息，并进一步判别其主控节点和脆弱节点，为实施网络攻击提供可靠的情报保障\n"),l("ul",[l("li",[v._v("端口探测：nmap")]),v._v(" "),l("li",[v._v("漏洞探测：模拟攻击、信息型漏洞探测     nmap -sV")]),v._v(" "),l("li",[v._v("隐蔽侦察")]),v._v(" "),l("li",[v._v("渗透侦察")])])]),v._v(" "),l("li",[v._v("网络攻击：利用目标计算机网络系统的安全缺陷（漏洞），为窃取、修改、伪造或破坏信息，以及降低、破坏网络使用效能而采取的各种措施和行动。目的是破坏系统的某种安全属性\n"),l("ul",[l("li",[v._v("拒绝服务（Denial of Service, DoS）")]),v._v(" "),l("li",[v._v("入侵攻击")]),v._v(" "),l("li",[v._v("病毒攻击")]),v._v(" "),l("li",[v._v("恶意代码攻击")]),v._v(" "),l("li",[v._v("电子邮件攻击")]),v._v(" "),l("li",[v._v("诱饵攻击")])])]),v._v(" "),l("li",[v._v("网络防护：为保护己方网络和设备正常工作，保护信息数据安全而采取的措施和行动。目的是保护网络信息系统的安全属性\n"),l("ul",[l("li",[v._v("必须管理和技术相结合")]),v._v(" "),l("li",[v._v("“五不”：进不来、拿不走、看不懂、改不了、走不掉")]),v._v(" "),l("li",[v._v("防火墙、入侵检测、计算机病毒及恶意代码防治、密码技术、认证技术、“蜜罐”")])])])])])])])}),[],!1,null,null,null);_.default=n.exports}}]);