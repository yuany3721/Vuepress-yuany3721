module.exports = {
    title: "Vuepress-reco-yuany3721",
    description: " ",
    dest: "docs",
    head: [
        ["link", { rel: "icon", href: "/favicon.ico" }],
        ["meta", { name: "viewport", content: "width=device-width,initial-scale=1,user-scalable=no" }],
        ["link", { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.css" }],
        [
            "link",
            {
                rel: "stylesheet",
                href: "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css",
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
        subSidebar: "auto",
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
            //     text: "友情链接",
            //     link: "https://increcrazer.github.io/",
            //     icon: "reco-blog",
            // },
            {
                text: "更新日志",
                icon: "reco-suggestion",
                link: "/updatelog/",
                items: [
                    {
                        text: "Web",
                        link: "/updatelog/Web/",
                    },
                    {
                        text: "Bot",
                        link: "/updatelog/Bot/",
                    },
                ],
            },
            {
                text: "API文档",
                icon: "reco-document",
                link: "/readdoc/",
                items: [
                    {
                        text: "GLM3",
                        link: "/readdoc/glm3/",
                    },
                    {
                        text: "AD9910",
                        link: "/readdoc/AD9910/",
                    },
                ],
            },
        ],
        sidebar: {
            "/updatelog/": [
                "/updatelog/",
                {
                    title: "Bot",
                    collapsable: true,
                    children: ["/updatelog/Bot/", "/updatelog/Bot/21.08.20前累积更新日志"],
                },
                {
                    title: "Web",
                    collapsable: true,
                    children: [
                        "/updatelog/Web/",
                        "/updatelog/Web/23.05.01前累积更新日志",
                        "/updatelog/Web/22.05.16前累积更新日志",
                        "/updatelog/Web/21.08.16前累积更新日志",
                    ],
                },
            ],
            // "/updatelog/Bot/": ["", "21.08.20前累积更新日志"],
            // "/updatelog/Web/": ["", "23.05.01前累积更新日志", "22.05.16前累积更新日志", "21.08.16前累积更新日志"],
            "/readdoc/": [
                "/readdoc/",
                {
                    title: "GLM3",
                    collapsable: false,
                },
                {
                    title: "AD9910",
                    collapsable: false,
                },
            ],
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
        friendLink: [
            {
                title: "Caeser Wang",
                desc: "光芯片、QKD大拿！",
                avatar: "https://increcrazer.github.io/medias/wyafavicon.png",
                link: "https://increcrazer.github.io/",
            },
        ],
        logo: "/logo.png",
        search: true,
        searchMaxSuggestions: 10,
        // "lastUpdated": "Last Updated",
        author: "yuany3721",
        authorAvatar: "/avatar.png",
        // "record": "xxxx",
        startYear: "2022",
        modePicker: false,
        smoothScroll: true,
    },
    markdown: {
        lineNumbers: true,
        anchor: { permalink: false },
        toc: { includeLevel: [1, 2] },
        extendMarkdown: (md) => {
            // katex公式
            md.use(require("markdown-it-katex"));
            md.set({ html: true });
        },
    },
};
