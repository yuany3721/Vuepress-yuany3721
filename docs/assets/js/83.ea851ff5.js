(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{659:function(s,a,e){"use strict";e.r(a);var t=e(17),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"配置path"}},[s._v("配置PATH")]),s._v(" "),e("h2",{attrs:{id:"修改默认缓存目录"}},[s._v("修改默认缓存目录")]),s._v(" "),e("div",{staticClass:"language-powershell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-powershell"}},[e("code",[s._v("gradle "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("g C:\\Program Files\\Gradle\\"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("gradle\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("这个错误 "),e("code",[s._v("Failed to load native library 'native-platform.dll' for Windows 10 amd64.")]),s._v(" 是因为权限不够")]),s._v(" "),e("h2",{attrs:{id:"配置国内源"}},[s._v("配置国内源")]),s._v(" "),e("p",[s._v("在默认缓存目录下新建 init.gradle 文件")]),s._v(" "),e("div",{staticClass:"language-ini line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-ini"}},[e("code",[s._v("allprojects {\n    repositories {\n        "),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("def ALIYUN_REPOSITORY_URL")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("'"),e("span",{pre:!0,attrs:{class:"token inner-value"}},[s._v("https://maven.aliyun.com/repository/public")]),s._v("'")]),s._v("\n        all { ArtifactRepository repo ->\n            if(repo instanceof MavenArtifactRepository){\n                "),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("def url")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("repo.url.toString()")]),s._v("\n                if (url.startsWith('https://repo1.maven.org/maven2')) {\n                    project.logger.lifecycle \"Repository replaced by ALIYUN_REPOSITORY_URL.\"\n                    remove repo\n                }\n            }\n        }\n        maven { url ALIYUN_REPOSITORY_URL }\n    }\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);