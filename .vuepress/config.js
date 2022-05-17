module.exports = {
    title: "Vuepress-reco-yuany3721",
    description: " ",
    dest: "dist",
    head: [
        [
            "link",
            {
                rel: "icon",
                href: "/favicon.ico",
            },
        ],
        [
            "meta",
            {
                name: "viewport",
                content: "width=device-width,initial-scale=1,user-scalable=no",
            },
        ],
    ],
    theme: "reco-yuany3721",
    locales: {
        "/": {
            lang: "zh-CN",
        },
    },
    themeConfig: {
        nav: [
            {
                text: "主页",
                link: "/",
                icon: "reco-home",
            },
            {
                text: "时间轴",
                link: "/timeline/",
                icon: "reco-date",
            },
            // {
            //     text: "杂谈",
            //     icon: "reco-message",
            //     items: [
            //         {
            //             text: "杂谈",
            //             link: "/docs/",
            //         },
            //     ],
            // },
        ],
        sidebar: {
            "/docs/": ["", "sort"],
        },
        type: "blog",
        blogConfig: {
            category: {
                location: 2,
                text: "分类",
            },
            tag: {
                location: 3,
                text: "标签",
            },
        },
        // friendLink: [
        //     {
        //         title: "CSDN",
        //         desc: "我的CSDN博客地址",
        //         email: "zuxian_fu@163.com",
        //         link: "https://blog.csdn.net/image_fzx",
        //     },
        //     {
        //         title: "github",
        //         desc: "我的github地址",
        //         avatar: "./avatar.png",
        //         link: "https://github.com/zuxian",
        //     },
        // ],
        logo: "/logo.png",
        search: true,
        searchMaxSuggestions: 10,
        // "lastUpdated": "Last Updated",
        author: "yuany3721",
        authorAvatar: "/avatar.png",
        // "record": "xxxx",
        // startYear: "2020",
        modePicker: false,
    },
    markdown: {
        lineNumbers: true,
    },
};
