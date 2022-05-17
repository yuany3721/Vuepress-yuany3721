(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{589:function(s,n,t){"use strict";t.r(n);var a=t(17),e=Object(a.a)({},(function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("ol",[t("li",[t("p",[s._v("生成阿里云access key "),t("strong",[s._v("注意：不能使用ram子用户")])])]),s._v(" "),t("li",[t("p",[s._v("下载并配置ddns")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" https://github.com/NewFuture/DDNS/releases/download/v2.10.2/ddns -"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#SLo ddns && chmod 777 ddns")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 自动生成config.json")]),s._v("\n./ddns -h\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置config.json")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" config.json\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("使用ddns配置")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("./ddns -c config.json\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("s",[s._v("我自己在配置时发现，如果同时解析ipv4和ipv6时，阿里云的ipv6优先级要高于ipv4，但是截至CST+8 21.09.30 ipv6连接体验仍然不尽如人意，所以可以只解析ipv4")])])]),s._v(" "),t("li",[t("p",[s._v("用crontab设置每小时自动更新ddns")])])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("crontab")]),s._v(" -e\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置每小时的30min自动更新")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("* "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("* "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("* "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("* "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" path/to/ddns.log\n    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("* "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("* "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("* "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("* path/to/./ddns -c path/to/config.json "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" path/to/ddns.log\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看crontab设置")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("crontab")]),s._v(" -l\n        ```")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);