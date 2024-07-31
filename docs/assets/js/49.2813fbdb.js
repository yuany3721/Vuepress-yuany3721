<<<<<<<< HEAD:docs/assets/js/49.2813fbdb.js
(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{617:function(t,v,_){"use strict";_.r(v);var s=_(17),n=Object(s.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("p",[_("strong",[t._v("通常，Ubuntu Server安装完成后已经自动配置了swap分区，使用"),_("code",[t._v("sudo swapon --show")]),t._v("或者"),_("code",[t._v("free -m")]),t._v("查看")])]),t._v(" "),_("div",{staticClass:"language-bash line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-bash"}},[_("code",[_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 建立swapfile")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" fallocate -l 4G /swap.img\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置权限")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("600")]),t._v(" /swap.img\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 配置分区生效")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkswap")]),t._v(" /swap.img\n"),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("swapon")]),t._v(" /swap.img\n\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# sudo cp /etc/fstab /etc/fstab.bak")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/swap.img none swap sw 0 0'")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("tee")]),t._v(" -a /etc/fstab\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看分区生效情况")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# sudo swapon --show")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# free -m")]),t._v("\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br"),_("span",{staticClass:"line-number"},[t._v("3")]),_("br"),_("span",{staticClass:"line-number"},[t._v("4")]),_("br"),_("span",{staticClass:"line-number"},[t._v("5")]),_("br"),_("span",{staticClass:"line-number"},[t._v("6")]),_("br"),_("span",{staticClass:"line-number"},[t._v("7")]),_("br"),_("span",{staticClass:"line-number"},[t._v("8")]),_("br"),_("span",{staticClass:"line-number"},[t._v("9")]),_("br"),_("span",{staticClass:"line-number"},[t._v("10")]),_("br"),_("span",{staticClass:"line-number"},[t._v("11")]),_("br"),_("span",{staticClass:"line-number"},[t._v("12")]),_("br"),_("span",{staticClass:"line-number"},[t._v("13")]),_("br")])]),_("p",[t._v("分区大小参考：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("RAM(GB)")]),t._v(" "),_("th",[t._v("No hibernation")]),t._v(" "),_("th",[t._v("With Hibernation")]),t._v(" "),_("th",[t._v("Maximum")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("1")]),t._v(" "),_("td",[t._v("1")]),t._v(" "),_("td",[t._v("2")]),t._v(" "),_("td",[t._v("2")])]),t._v(" "),_("tr",[_("td",[t._v("2")]),t._v(" "),_("td",[t._v("1")]),t._v(" "),_("td",[t._v("3")]),t._v(" "),_("td",[t._v("4")])]),t._v(" "),_("tr",[_("td",[t._v("3")]),t._v(" "),_("td",[t._v("2")]),t._v(" "),_("td",[t._v("5")]),t._v(" "),_("td",[t._v("6")])]),t._v(" "),_("tr",[_("td",[t._v("4")]),t._v(" "),_("td",[t._v("2")]),t._v(" "),_("td",[t._v("6")]),t._v(" "),_("td",[t._v("8")])]),t._v(" "),_("tr",[_("td",[t._v("5")]),t._v(" "),_("td",[t._v("2")]),t._v(" "),_("td",[t._v("7")]),t._v(" "),_("td",[t._v("10")])]),t._v(" "),_("tr",[_("td",[t._v("6")]),t._v(" "),_("td",[t._v("2")]),t._v(" "),_("td",[t._v("8")]),t._v(" "),_("td",[t._v("12")])]),t._v(" "),_("tr",[_("td",[t._v("8")]),t._v(" "),_("td",[t._v("3")]),t._v(" "),_("td",[t._v("11")]),t._v(" "),_("td",[t._v("16")])]),t._v(" "),_("tr",[_("td",[t._v("12")]),t._v(" "),_("td",[t._v("3")]),t._v(" "),_("td",[t._v("15")]),t._v(" "),_("td",[t._v("24")])]),t._v(" "),_("tr",[_("td",[t._v("16")]),t._v(" "),_("td",[t._v("4")]),t._v(" "),_("td",[t._v("20")]),t._v(" "),_("td",[t._v("32")])]),t._v(" "),_("tr",[_("td",[t._v("24")]),t._v(" "),_("td",[t._v("5")]),t._v(" "),_("td",[t._v("29")]),t._v(" "),_("td",[t._v("48")])]),t._v(" "),_("tr",[_("td",[t._v("32")]),t._v(" "),_("td",[t._v("6")]),t._v(" "),_("td",[t._v("38")]),t._v(" "),_("td",[t._v("64")])]),t._v(" "),_("tr",[_("td",[t._v("64")]),t._v(" "),_("td",[t._v("8")]),t._v(" "),_("td",[t._v("72")]),t._v(" "),_("td",[t._v("128")])]),t._v(" "),_("tr",[_("td",[t._v("128")]),t._v(" "),_("td",[t._v("11")]),t._v(" "),_("td",[t._v("139")]),t._v(" "),_("td",[t._v("256")])]),t._v(" "),_("tr",[_("td",[t._v("256")]),t._v(" "),_("td",[t._v("256")]),t._v(" "),_("td",[t._v("512")]),t._v(" "),_("td",[t._v("512")])]),t._v(" "),_("tr",[_("td",[t._v("512")]),t._v(" "),_("td",[t._v("512")]),t._v(" "),_("td",[t._v("1024")]),t._v(" "),_("td",[t._v("1024")])]),t._v(" "),_("tr",[_("td",[t._v("1024")]),t._v(" "),_("td",[t._v("1024")]),t._v(" "),_("td",[t._v("2048")]),t._v(" "),_("td",[t._v("2048")])])])])])}),[],!1,null,null,null);v.default=n.exports}}]);
========
(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{619:function(t,v,_){"use strict";_.r(v);var s=_(17),n=Object(s.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("p",[_("strong",[t._v("通常，Ubuntu Server安装完成后已经自动配置了swap分区，使用"),_("code",[t._v("sudo swapon --show")]),t._v("或者"),_("code",[t._v("free -m")]),t._v("查看")])]),t._v(" "),_("div",{staticClass:"language-bash line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-bash"}},[_("code",[_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 建立swapfile")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" fallocate -l 4G /swap.img\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置权限")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("600")]),t._v(" /swap.img\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 配置分区生效")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkswap")]),t._v(" /swap.img\n"),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("swapon")]),t._v(" /swap.img\n\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# sudo cp /etc/fstab /etc/fstab.bak")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/swap.img none swap sw 0 0'")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("tee")]),t._v(" -a /etc/fstab\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看分区生效情况")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# sudo swapon --show")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# free -m")]),t._v("\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br"),_("span",{staticClass:"line-number"},[t._v("3")]),_("br"),_("span",{staticClass:"line-number"},[t._v("4")]),_("br"),_("span",{staticClass:"line-number"},[t._v("5")]),_("br"),_("span",{staticClass:"line-number"},[t._v("6")]),_("br"),_("span",{staticClass:"line-number"},[t._v("7")]),_("br"),_("span",{staticClass:"line-number"},[t._v("8")]),_("br"),_("span",{staticClass:"line-number"},[t._v("9")]),_("br"),_("span",{staticClass:"line-number"},[t._v("10")]),_("br"),_("span",{staticClass:"line-number"},[t._v("11")]),_("br"),_("span",{staticClass:"line-number"},[t._v("12")]),_("br"),_("span",{staticClass:"line-number"},[t._v("13")]),_("br")])]),_("p",[t._v("分区大小参考：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("RAM(GB)")]),t._v(" "),_("th",[t._v("No hibernation")]),t._v(" "),_("th",[t._v("With Hibernation")]),t._v(" "),_("th",[t._v("Maximum")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("1")]),t._v(" "),_("td",[t._v("1")]),t._v(" "),_("td",[t._v("2")]),t._v(" "),_("td",[t._v("2")])]),t._v(" "),_("tr",[_("td",[t._v("2")]),t._v(" "),_("td",[t._v("1")]),t._v(" "),_("td",[t._v("3")]),t._v(" "),_("td",[t._v("4")])]),t._v(" "),_("tr",[_("td",[t._v("3")]),t._v(" "),_("td",[t._v("2")]),t._v(" "),_("td",[t._v("5")]),t._v(" "),_("td",[t._v("6")])]),t._v(" "),_("tr",[_("td",[t._v("4")]),t._v(" "),_("td",[t._v("2")]),t._v(" "),_("td",[t._v("6")]),t._v(" "),_("td",[t._v("8")])]),t._v(" "),_("tr",[_("td",[t._v("5")]),t._v(" "),_("td",[t._v("2")]),t._v(" "),_("td",[t._v("7")]),t._v(" "),_("td",[t._v("10")])]),t._v(" "),_("tr",[_("td",[t._v("6")]),t._v(" "),_("td",[t._v("2")]),t._v(" "),_("td",[t._v("8")]),t._v(" "),_("td",[t._v("12")])]),t._v(" "),_("tr",[_("td",[t._v("8")]),t._v(" "),_("td",[t._v("3")]),t._v(" "),_("td",[t._v("11")]),t._v(" "),_("td",[t._v("16")])]),t._v(" "),_("tr",[_("td",[t._v("12")]),t._v(" "),_("td",[t._v("3")]),t._v(" "),_("td",[t._v("15")]),t._v(" "),_("td",[t._v("24")])]),t._v(" "),_("tr",[_("td",[t._v("16")]),t._v(" "),_("td",[t._v("4")]),t._v(" "),_("td",[t._v("20")]),t._v(" "),_("td",[t._v("32")])]),t._v(" "),_("tr",[_("td",[t._v("24")]),t._v(" "),_("td",[t._v("5")]),t._v(" "),_("td",[t._v("29")]),t._v(" "),_("td",[t._v("48")])]),t._v(" "),_("tr",[_("td",[t._v("32")]),t._v(" "),_("td",[t._v("6")]),t._v(" "),_("td",[t._v("38")]),t._v(" "),_("td",[t._v("64")])]),t._v(" "),_("tr",[_("td",[t._v("64")]),t._v(" "),_("td",[t._v("8")]),t._v(" "),_("td",[t._v("72")]),t._v(" "),_("td",[t._v("128")])]),t._v(" "),_("tr",[_("td",[t._v("128")]),t._v(" "),_("td",[t._v("11")]),t._v(" "),_("td",[t._v("139")]),t._v(" "),_("td",[t._v("256")])]),t._v(" "),_("tr",[_("td",[t._v("256")]),t._v(" "),_("td",[t._v("256")]),t._v(" "),_("td",[t._v("512")]),t._v(" "),_("td",[t._v("512")])]),t._v(" "),_("tr",[_("td",[t._v("512")]),t._v(" "),_("td",[t._v("512")]),t._v(" "),_("td",[t._v("1024")]),t._v(" "),_("td",[t._v("1024")])]),t._v(" "),_("tr",[_("td",[t._v("1024")]),t._v(" "),_("td",[t._v("1024")]),t._v(" "),_("td",[t._v("2048")]),t._v(" "),_("td",[t._v("2048")])])])])])}),[],!1,null,null,null);v.default=n.exports}}]);
>>>>>>>> 33bc930b7b3e070a50ffd3b0ff7d63d66282ea62:docs/assets/js/52.c45607f0.js
