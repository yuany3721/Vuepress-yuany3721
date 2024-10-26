<<<<<<<< HEAD:docs/assets/js/90.4a3f484c.js
(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{666:function(v,_,l){"use strict";l.r(_);var i=l(17),t=Object(i.a)({},(function(){var v=this,_=v.$createElement,l=v._self._c||_;return l("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[l("h2",{attrs:{id:"tcsec"}},[v._v("TCSEC")]),v._v(" "),l("p",[v._v('Trusted Computer System Evaluation Criteria 美国可信计算机系统评价标准 published in 1985; commonly called the "Orange Book"')]),v._v(" "),l("h2",{attrs:{id:"分级"}},[v._v("分级")]),v._v(" "),l("h3",{attrs:{id:"d类安全等级"}},[v._v("D类安全等级")]),v._v(" "),l("p",[v._v("D类安全等级只包括D1一个级别。 D1系统只为文件和用户提供安全保护。D1系统最普通的形式是本地操作系统，或者是一个完全没有保护的网络。")]),v._v(" "),l("h3",{attrs:{id:"c类安全等级"}},[v._v("C类安全等级")]),v._v(" "),l("p",[v._v("C类安全等级能够提供审计的保护，并为用户的行动和责任提供审计能力。")]),v._v(" "),l("ul",[l("li",[v._v("C1系统的可信任运算基础体制（Trusted Computing Base，TCB）通过将用户和数据分开来达到安全的目的。在C1系统中，所有的用户以同样的灵敏度来处理数据，即用户认为C1系统中的所有文档都具有相同的机密性。")]),v._v(" "),l("li",[v._v("C2系统比C1系统加强了可调的审慎控制。在连接到网络上时，C2系统的用户分别对各自的行为负责。C2系统通过登陆过程、安全事件和资源隔离来增强这种控制。C2系统具有C1系统中所有的安全性特征。")])]),v._v(" "),l("h3",{attrs:{id:"b类安全等级"}},[v._v("B类安全等级")]),v._v(" "),l("p",[v._v("B类系统具有强制性保护功能。强制性保护意味着如果用户没有与安全等级相连，系统就不会让用户存取对象。")]),v._v(" "),l("ul",[l("li",[v._v("B1系统\n"),l("ul",[l("li",[v._v("系统对网络控制下的每个对象都进行灵敏度标记")]),v._v(" "),l("li",[v._v("系统使用灵敏度标记作为所有强迫访问控制的基础")]),v._v(" "),l("li",[v._v("系统在把导入的、非标记的对象放入系统前标记它们")]),v._v(" "),l("li",[v._v("灵敏度标记必须准确地表示其所联系的对象的安全级别")]),v._v(" "),l("li",[v._v("当系统管理员创建系统或者增加新的通信通道或I/O设备时，管理员必须指定每个通信通道和I/O设备是单级还是多级，并且管理员只能手工改变指定")]),v._v(" "),l("li",[v._v("单级设备并不保持传输信息的灵敏度级别")]),v._v(" "),l("li",[v._v("所有直接面向用户位置的输出（无论是虚拟的还是物理的）都必须产生标记来指示关于输出对象的灵敏度")]),v._v(" "),l("li",[v._v("系统必须使用用户的口令或证明来决定用户的安全访问级别")]),v._v(" "),l("li",[v._v("系统必须通过审计来记录未授权访问的企图")])])]),v._v(" "),l("li",[v._v("B2系统必须满足B1系统的所有要求。B2系统的管理员必须使用一个明确的、文档化的安全策略模式作为系统的可信任运算基础体制。另外需要满足下列要求：\n"),l("ul",[l("li",[v._v("系统必须立即通知系统中的每一个用户所有与之相关的网络连接的改变")]),v._v(" "),l("li",[v._v("只有用户能够在可信任通信路径中进行初始化通信")]),v._v(" "),l("li",[v._v("可信任运算基础体制能够支持独立的操作者和管理员")])])]),v._v(" "),l("li",[v._v("B3系统必须符合B2系统的所有安全需求。B3系统具有很强的监视委托管理访问能力和抗干扰能力，必须设有安全管理员。另需满足以下要求：\n"),l("ul",[l("li",[v._v("除了控制对个别对象的访问外，B3必须产生一个可读的安全列表")]),v._v(" "),l("li",[v._v("每个被命名的对象提供对该对象没有访问权的用户列表说明")]),v._v(" "),l("li",[v._v("B3系统在进行任何操作前，要求用户进行身份验证")]),v._v(" "),l("li",[v._v("B3系统验证每个用户，同时还会发送一个取消访问的审计跟踪消息")]),v._v(" "),l("li",[v._v("设计者必须正确区分可信任的通信路径和其他路径")]),v._v(" "),l("li",[v._v("可信任的通信基础体制为每一个被命名的对象建立安全审计跟踪")]),v._v(" "),l("li",[v._v("可信任的运算基础体制支持独立的安全管理")])])])]),v._v(" "),l("h3",{attrs:{id:"a类安全等级"}},[v._v("A类安全等级")]),v._v(" "),l("p",[v._v("A系统的安全级别最高。A类安全等级只包含A1一个安全类别。 A1类与B3类相似，对系统的结构和策略不作特别要求。A1系统的显著特征是，系统的设计者必须按照一个正式的设计规范来分析系统。对系统分析后，设计者必须运用核对技术来确保系统符合设计规范。 A1系统必须满足下列要求：")]),v._v(" "),l("ul",[l("li",[v._v("系统管理员必须从开发者那里接收到一个安全策略的正式模型")]),v._v(" "),l("li",[v._v("所有的安装操作都必须由系统管理员进行")]),v._v(" "),l("li",[v._v("系统管理员进行的每一步安装操作都必须有正式文档")])]),v._v(" "),l("h2",{attrs:{id:"其他"}},[v._v("其他")]),v._v(" "),l("p",[v._v("基于信息安全保障阶段，欧洲四国（英、法、德、荷）提出了评价满足保密性、完整性、可用性要求的信息技术安全评价准则（ITSEC）后，美国又联合以上诸国和加拿大，并会同ISO共同提出信息技术安全评价的通用准则（CC for ITSEC），CC已经被五技术发达的国家承认为代替TCSEC的评价安全信息系统的标准。CC已经被采纳为国家标准ISO 15408。")])])}),[],!1,null,null,null);_.default=t.exports}}]);
========
(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{663:function(v,_,l){"use strict";l.r(_);var i=l(17),t=Object(i.a)({},(function(){var v=this,_=v.$createElement,l=v._self._c||_;return l("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[l("h2",{attrs:{id:"tcsec"}},[v._v("TCSEC")]),v._v(" "),l("p",[v._v('Trusted Computer System Evaluation Criteria 美国可信计算机系统评价标准 published in 1985; commonly called the "Orange Book"')]),v._v(" "),l("h2",{attrs:{id:"分级"}},[v._v("分级")]),v._v(" "),l("h3",{attrs:{id:"d类安全等级"}},[v._v("D类安全等级")]),v._v(" "),l("p",[v._v("D类安全等级只包括D1一个级别。 D1系统只为文件和用户提供安全保护。D1系统最普通的形式是本地操作系统，或者是一个完全没有保护的网络。")]),v._v(" "),l("h3",{attrs:{id:"c类安全等级"}},[v._v("C类安全等级")]),v._v(" "),l("p",[v._v("C类安全等级能够提供审计的保护，并为用户的行动和责任提供审计能力。")]),v._v(" "),l("ul",[l("li",[v._v("C1系统的可信任运算基础体制（Trusted Computing Base，TCB）通过将用户和数据分开来达到安全的目的。在C1系统中，所有的用户以同样的灵敏度来处理数据，即用户认为C1系统中的所有文档都具有相同的机密性。")]),v._v(" "),l("li",[v._v("C2系统比C1系统加强了可调的审慎控制。在连接到网络上时，C2系统的用户分别对各自的行为负责。C2系统通过登陆过程、安全事件和资源隔离来增强这种控制。C2系统具有C1系统中所有的安全性特征。")])]),v._v(" "),l("h3",{attrs:{id:"b类安全等级"}},[v._v("B类安全等级")]),v._v(" "),l("p",[v._v("B类系统具有强制性保护功能。强制性保护意味着如果用户没有与安全等级相连，系统就不会让用户存取对象。")]),v._v(" "),l("ul",[l("li",[v._v("B1系统\n"),l("ul",[l("li",[v._v("系统对网络控制下的每个对象都进行灵敏度标记")]),v._v(" "),l("li",[v._v("系统使用灵敏度标记作为所有强迫访问控制的基础")]),v._v(" "),l("li",[v._v("系统在把导入的、非标记的对象放入系统前标记它们")]),v._v(" "),l("li",[v._v("灵敏度标记必须准确地表示其所联系的对象的安全级别")]),v._v(" "),l("li",[v._v("当系统管理员创建系统或者增加新的通信通道或I/O设备时，管理员必须指定每个通信通道和I/O设备是单级还是多级，并且管理员只能手工改变指定")]),v._v(" "),l("li",[v._v("单级设备并不保持传输信息的灵敏度级别")]),v._v(" "),l("li",[v._v("所有直接面向用户位置的输出（无论是虚拟的还是物理的）都必须产生标记来指示关于输出对象的灵敏度")]),v._v(" "),l("li",[v._v("系统必须使用用户的口令或证明来决定用户的安全访问级别")]),v._v(" "),l("li",[v._v("系统必须通过审计来记录未授权访问的企图")])])]),v._v(" "),l("li",[v._v("B2系统必须满足B1系统的所有要求。B2系统的管理员必须使用一个明确的、文档化的安全策略模式作为系统的可信任运算基础体制。另外需要满足下列要求：\n"),l("ul",[l("li",[v._v("系统必须立即通知系统中的每一个用户所有与之相关的网络连接的改变")]),v._v(" "),l("li",[v._v("只有用户能够在可信任通信路径中进行初始化通信")]),v._v(" "),l("li",[v._v("可信任运算基础体制能够支持独立的操作者和管理员")])])]),v._v(" "),l("li",[v._v("B3系统必须符合B2系统的所有安全需求。B3系统具有很强的监视委托管理访问能力和抗干扰能力，必须设有安全管理员。另需满足以下要求：\n"),l("ul",[l("li",[v._v("除了控制对个别对象的访问外，B3必须产生一个可读的安全列表")]),v._v(" "),l("li",[v._v("每个被命名的对象提供对该对象没有访问权的用户列表说明")]),v._v(" "),l("li",[v._v("B3系统在进行任何操作前，要求用户进行身份验证")]),v._v(" "),l("li",[v._v("B3系统验证每个用户，同时还会发送一个取消访问的审计跟踪消息")]),v._v(" "),l("li",[v._v("设计者必须正确区分可信任的通信路径和其他路径")]),v._v(" "),l("li",[v._v("可信任的通信基础体制为每一个被命名的对象建立安全审计跟踪")]),v._v(" "),l("li",[v._v("可信任的运算基础体制支持独立的安全管理")])])])]),v._v(" "),l("h3",{attrs:{id:"a类安全等级"}},[v._v("A类安全等级")]),v._v(" "),l("p",[v._v("A系统的安全级别最高。A类安全等级只包含A1一个安全类别。 A1类与B3类相似，对系统的结构和策略不作特别要求。A1系统的显著特征是，系统的设计者必须按照一个正式的设计规范来分析系统。对系统分析后，设计者必须运用核对技术来确保系统符合设计规范。 A1系统必须满足下列要求：")]),v._v(" "),l("ul",[l("li",[v._v("系统管理员必须从开发者那里接收到一个安全策略的正式模型")]),v._v(" "),l("li",[v._v("所有的安装操作都必须由系统管理员进行")]),v._v(" "),l("li",[v._v("系统管理员进行的每一步安装操作都必须有正式文档")])]),v._v(" "),l("h2",{attrs:{id:"其他"}},[v._v("其他")]),v._v(" "),l("p",[v._v("基于信息安全保障阶段，欧洲四国（英、法、德、荷）提出了评价满足保密性、完整性、可用性要求的信息技术安全评价准则（ITSEC）后，美国又联合以上诸国和加拿大，并会同ISO共同提出信息技术安全评价的通用准则（CC for ITSEC），CC已经被五技术发达的国家承认为代替TCSEC的评价安全信息系统的标准。CC已经被采纳为国家标准ISO 15408。")])])}),[],!1,null,null,null);_.default=t.exports}}]);
>>>>>>>> 130802e8005f378f3646a20772408923483a89b7:docs/assets/js/90.31e07c52.js
