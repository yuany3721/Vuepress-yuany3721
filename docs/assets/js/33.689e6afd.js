(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{589:function(t,e,n){"use strict";n.r(e);var o=n(17),i=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("通常会出现在远端仓库有文件、本地仓库也有文件的时候，是因为这两个仓库在sync之前根本没有建立起来联系")]),t._v(" "),n("h2",{attrs:{id:"解决方法1"}},[t._v("解决方法1")]),t._v(" "),n("p",[t._v("先"),n("code",[t._v("git clone")]),t._v("远端仓库，然后把本地文件移动到下载的远端仓库中，再提交上去，相当于进行了一次对远端仓库的commit")]),t._v(" "),n("h2",{attrs:{id:"解决方法2"}},[t._v("解决方法2")]),t._v(" "),n("p",[t._v("强制合并："),n("code",[t._v("git pull origin master --allow-unrelated-histories")])]),t._v(" "),n("p",[t._v("然后解决conflict再push回去，"),n("code",[t._v("git push origin local_main:remote_main")])])])}),[],!1,null,null,null);e.default=i.exports}}]);