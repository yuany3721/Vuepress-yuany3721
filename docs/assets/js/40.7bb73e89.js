<<<<<<<< HEAD:docs/assets/js/40.7bb73e89.js
(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{609:function(s,n,a){"use strict";a.r(n);var e=a(17),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("blockquote",[a("p",[s._v("Version: Ubuntu 18.04.6 LTS")])]),s._v(" "),a("ol",[a("li",[a("p",[s._v("使用"),a("code",[s._v("xrandr")]),s._v("查看屏幕信息")]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v("Screen 0: minimum 320 x 200, current 1920 x 1080, maximum 8192 x 8192\nVGA-0 connected primary 1920x1080+0+0 inverted (normal left inverted right x axis y axis) 0mm x 0mm\n    1024x768      60.00  \n    800x600       60.32    56.25  \n    848x480       60.00  \n    640x480       59.94  \n    1920x1080_60.00  59.96* \nHDMI-0 disconnected (normal left inverted right x axis y axis)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("这里的信息是修改后的内容，主要注意当前显示器名称，例如我的是VGA-0")])]),s._v(" "),a("li",[a("p",[s._v("获得分辨率详情")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("cvt "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1920")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1080")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1920x1080 59.96 Hz (CVT 2.07M9) hsync: 67.16 kHz; pclk: 173.00 MHz")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# Modeline "1920x1080_60.00"  173.00  1920 2048 2248 2576  1080 1083 1088 1120 -hsync +vsync')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v('注意输出中Modeline后的内容："1920x1080_60.00"是resolution的名称，整个Modeline后所有信息是newmode所需信息')])]),s._v(" "),a("li",[a("p",[s._v("设置并应用分辨率")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("xrandr --newmode "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1920x1080_60.00"')]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("173.00")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1920")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2048")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2248")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2576")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1080")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1083")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1088")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1120")]),s._v(" -hsync +vsync\nxrandr --addmode VGA-0 "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1920x1080_60.00"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("设置屏幕翻转")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("xrandr -o inverted\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# left向左旋转90° right向右旋转90° normal正常显示")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("设置开机自动配置")]),s._v(" "),a("p",[s._v("向"),a("code",[s._v("~/.profile")]),s._v("中添加以上步骤中的命令")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# set display resolution")]),s._v("\ncvt "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1920")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1080")]),s._v("\nxrandr --newmode "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1920x1080_60.00"')]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("173.00")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1920")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2048")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2248")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2576")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1080")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1083")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1088")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1120")]),s._v(" -hsync +vsync\nxrandr --addmode VGA-0 "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1920x1080_60.00"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# set display rotation")]),s._v("\nxrandr -o inverted\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])])])])])}),[],!1,null,null,null);n.default=t.exports}}]);
========
(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{610:function(s,n,a){"use strict";a.r(n);var e=a(17),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("blockquote",[a("p",[s._v("Version: Ubuntu 18.04.6 LTS")])]),s._v(" "),a("ol",[a("li",[a("p",[s._v("使用"),a("code",[s._v("xrandr")]),s._v("查看屏幕信息")]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v("Screen 0: minimum 320 x 200, current 1920 x 1080, maximum 8192 x 8192\nVGA-0 connected primary 1920x1080+0+0 inverted (normal left inverted right x axis y axis) 0mm x 0mm\n    1024x768      60.00  \n    800x600       60.32    56.25  \n    848x480       60.00  \n    640x480       59.94  \n    1920x1080_60.00  59.96* \nHDMI-0 disconnected (normal left inverted right x axis y axis)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("这里的信息是修改后的内容，主要注意当前显示器名称，例如我的是VGA-0")])]),s._v(" "),a("li",[a("p",[s._v("获得分辨率详情")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("cvt "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1920")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1080")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1920x1080 59.96 Hz (CVT 2.07M9) hsync: 67.16 kHz; pclk: 173.00 MHz")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# Modeline "1920x1080_60.00"  173.00  1920 2048 2248 2576  1080 1083 1088 1120 -hsync +vsync')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v('注意输出中Modeline后的内容："1920x1080_60.00"是resolution的名称，整个Modeline后所有信息是newmode所需信息')])]),s._v(" "),a("li",[a("p",[s._v("设置并应用分辨率")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("xrandr --newmode "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1920x1080_60.00"')]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("173.00")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1920")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2048")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2248")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2576")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1080")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1083")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1088")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1120")]),s._v(" -hsync +vsync\nxrandr --addmode VGA-0 "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1920x1080_60.00"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("设置屏幕翻转")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("xrandr -o inverted\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# left向左旋转90° right向右旋转90° normal正常显示")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("设置开机自动配置")]),s._v(" "),a("p",[s._v("向"),a("code",[s._v("~/.profile")]),s._v("中添加以上步骤中的命令")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# set display resolution")]),s._v("\ncvt "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1920")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1080")]),s._v("\nxrandr --newmode "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1920x1080_60.00"')]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("173.00")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1920")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2048")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2248")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2576")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1080")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1083")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1088")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1120")]),s._v(" -hsync +vsync\nxrandr --addmode VGA-0 "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1920x1080_60.00"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# set display rotation")]),s._v("\nxrandr -o inverted\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])])])])])}),[],!1,null,null,null);n.default=t.exports}}]);
>>>>>>>> 33bc930b7b3e070a50ffd3b0ff7d63d66282ea62:docs/assets/js/43.741bb813.js
