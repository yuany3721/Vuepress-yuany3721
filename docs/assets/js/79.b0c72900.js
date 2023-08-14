(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{649:function(v,_,p){"use strict";p.r(_);var t=p(17),e=Object(t.a)({},(function(){var v=this,_=v.$createElement,p=v._self._c||_;return p("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[p("p",[v._v("计算机的整个启动过程分成四个阶段。")]),v._v(" "),p("p",[v._v("一、第一阶段：BIOS")]),v._v(" "),p("p",[v._v("上个世纪70年代初，“只读内存”（read-only memory，缩写为ROM）发明，开机程序被写入ROM芯片，计算机通电后，第一件事就是读取它。")]),v._v(" "),p("p",[v._v("这块芯片里的程序叫做”基本输出输入系统”（Basic Input/Output System），简称为BIOS。")]),v._v(" "),p("p",[v._v("BIOS中主要存放的程序包括：自诊断程序、CMOS设置程序、系统自动装载程序和主要I/O驱动程序和中断。")]),v._v(" "),p("p",[v._v("BIOS程序首先检查，计算机硬件能否满足运行的基本条件，这叫做”硬件自检”（Power-On Self-Test），缩写为POST。")]),v._v(" "),p("p",[v._v("如果硬件出现问题，主板会发出不同含义的蜂鸣，启动中止。如果没有问题，屏幕就会显示出CPU、内存、硬盘等信息。")]),v._v(" "),p("p",[v._v("硬件自检完成后，BIOS把控制权转交给下一阶段的启动程序。")]),v._v(" "),p("p",[v._v("这时，BIOS需要知道“下一阶段的启动程序”具体存放在哪一个设备。也就是说，BIOS需要有一个外部储存设备的排序，排在前面的设备就是优先转交控制权的设备。这种排序叫做“启动顺序”（Boot Sequence）。")]),v._v(" "),p("p",[v._v("二、第二阶段：主引导记录")]),v._v(" "),p("p",[v._v("BIOS按照“启动顺序”，把控制权转交给排在第一位的储存设备。这时，计算机读取该设备的第一个扇区，也就是读取最前面的512个字节。如果这512个字节的最后两个字节是0x55和0xAA，表明这个设备可以用于启动；如果不是，表明设备不能用于启动，控制权于是被转交给”启动顺序”中的下一个设备。")]),v._v(" "),p("p",[v._v("这最前面的512个字节，就叫做“主引导记录”（Master boot record，缩写为MBR）。")]),v._v(" "),p("p",[v._v("主引导记录由三个部分组成：调用操作系统的机器码、分区表（Partition table）和主引导记录签名（0x55和0xAA）。它的主要作用是，告诉计算机到硬盘的哪一个位置去找操作系统。")]),v._v(" "),p("p",[v._v("其中，分区表的作用是将硬盘分成若干个区。考虑到每个区可以安装不同的操作系统，“主引导记录”必须知道将控制权转交给哪个区。")]),v._v(" "),p("p",[v._v("分区表的长度只有64个字节，里面又分成四项，每项16个字节。所以，一个硬盘最多只能分四个一级分区，又叫做“主分区”。")]),v._v(" "),p("p",[v._v("每个主分区的16个字节，由6个部分组成：")]),v._v(" "),p("p",[v._v("（1） 第1个字节：如果为0x80，就表示该主分区是激活分区，控制权要转交给这个分区。四个主分区里面只能有一个是激活的。")]),v._v(" "),p("p",[v._v("（2） 第2-4个字节：主分区第一个扇区的物理位置（柱面、磁头、扇区号等等）。")]),v._v(" "),p("p",[v._v("（3） 第5个字节：主分区类型。")]),v._v(" "),p("p",[v._v("（4） 第6-8个字节：主分区最后一个扇区的物理位置。")]),v._v(" "),p("p",[v._v("（5） 第9-12字节：该主分区第一个扇区的逻辑地址。")]),v._v(" "),p("p",[v._v("（6） 第13-16字节：主分区的扇区总数。决定了这个主分区的长度。")]),v._v(" "),p("p",[v._v("三、第三阶段：硬盘启动")]),v._v(" "),p("p",[v._v("这时，计算机的控制权就要转交给硬盘了，这里又分成三种情况。")]),v._v(" "),p("p",[v._v("情况A：卷引导记录")]),v._v(" "),p("p",[v._v("计算机会读取激活分区的第一个扇区，叫做“卷引导记录”（Volume boot record，VBR）。“卷引导记录”的主要作用是，告诉计算机操作系统在这个分区里的位置。然后，计算机就会加载操作系统了。")]),v._v(" "),p("p",[v._v("情况B：扩展分区和逻辑分区")]),v._v(" "),p("p",[v._v("随着硬盘越来越大，四个主分区已经不够了，需要更多的分区。但是，分区表只有四项，因此规定有且仅有一个区可以被定义成”扩展分区”（Extended partition）。")]),v._v(" "),p("p",[v._v("所谓”扩展分区”，就是指这个区里面又分成多个区。这种分区里面的分区，就叫做”逻辑分区”（logical partition）。")]),v._v(" "),p("p",[v._v("计算机先读取扩展分区的第一个扇区，叫做“扩展引导记录”（Extended boot record，缩写为EBR）。它里面也包含一张64字节的分区表，但是最多只有两项（也就是两个逻辑分区）。")]),v._v(" "),p("p",[v._v("计算机接着读取第二个逻辑分区的第一个扇区，再从里面的分区表中找到第三个逻辑分区的位置，以此类推，直到某个逻辑分区的分区表只包含它自身为止（即只有一个分区项）。因此，扩展分区可以包含无数个逻辑分区。")]),v._v(" "),p("p",[v._v("因其繁复性，很少通过这种方式启动操作系统。如果操作系统确实安装在扩展分区，一般采用下一种方式启动。")]),v._v(" "),p("p",[v._v("情况C：启动管理器")]),v._v(" "),p("p",[v._v("在这种情况下，不再把控制权转交给某一个分区，而是运行事先安装的“启动管理器”（boot loader），由用户选择启动哪一个操作系统。")]),v._v(" "),p("p",[v._v("四、第四阶段：操作系统")]),v._v(" "),p("p",[v._v("控制权转交给操作系统后，操作系统的内核首先被载入内存，接着是一系列的模块，比如窗口程序和网络程序等，最后跳出登陆界面。")]),v._v(" "),p("p",[v._v("至此，全部启动过程完成。")])])}),[],!1,null,null,null);_.default=e.exports}}]);