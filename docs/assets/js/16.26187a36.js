(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{564:function(s,t,a){s.exports=a.p+"assets/img/Pasted-7.d82185fc.png"},616:function(s,t,a){"use strict";a.r(t);var n=a(17),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"安装"}},[s._v("安装")]),s._v(" "),n("p",[n("code",[s._v("sudo apt install mariadb-server")])]),s._v(" "),n("h2",{attrs:{id:"配置"}},[s._v("配置")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动 状态 重启")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" mysql start\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" mysql status\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" mysql restart\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 初始化配置")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" mysql_secure_installation\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改配置")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" mariadb.cnf\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 端口号")]),s._v("\nPort "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1234")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 允许远程连接登录")]),s._v("\nbind-address "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("h2",{attrs:{id:"修改用户"}},[s._v("修改用户")]),s._v(" "),n("div",{staticClass:"language-sql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改用户host")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" host "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 允许密码登录")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" plugin"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'mysql\\_native\\_password'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" password"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("password"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'password'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改密码")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'localhost'")]),s._v(" IDENTIFIED "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'passward'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 用户授权")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("grant")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("all")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("privileges")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" \\"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\\"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("to")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'user'")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'host'")]),s._v(" identified "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'password'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("with")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("grant")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("option")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加权限（和已有权限合并，不会覆盖已有权限）")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GRANT")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Insert")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'your database'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\\"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'user'")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'host'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除权限")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("REVOKE")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Delete")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'your database'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\\"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'user'")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'host'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看权限")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" grants "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'user'")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'localhost'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 回收权限")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("revoke")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" \\"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\\"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'user@localhost'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除用户")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("drop")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'user'")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'localhost'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重命名用户")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("rename")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'user'")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'%'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("to")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'user1'")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'%'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br")])]),n("p",[s._v("权限列表：\n"),n("img",{attrs:{src:a(564),alt:""}})]),s._v(" "),n("h2",{attrs:{id:"解决error-1698-28000"}},[s._v("解决ERROR 1698 (28000)")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" mysqld.cnf\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("加入以下字段")]),s._v(" "),n("div",{staticClass:"language-ini line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-ini"}},[n("code",[n("span",{pre:!0,attrs:{class:"token section"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token section-name selector"}},[s._v("mysqld")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")])]),s._v("\nskip-grant-tables\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启mysql服务")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" mysql restart\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 直接enter进mysql")]),s._v("\nmysql -u root -p\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("Ubuntu的日志在"),n("code",[s._v("/var/log/mysql")])]),s._v(" "),n("div",{staticClass:"language-sql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("use")]),s._v(" mysql\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" authentication_string"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("password"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"password"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("plugin"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'mysql_native_password'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nflush "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("privileges")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nquit\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);