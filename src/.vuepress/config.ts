import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',
  title: 'vuepress-yuany3721',
  description: '',
  dest: 'docs',

  head: [
    // 配置站点图标
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],
  ],

  bundler: viteBundler(),
  shouldPrefetch: false, // 站点较大，页面数量较多时，不建议启用

  theme: plumeTheme({
    /* 添加您的部署域名, 有助于 SEO, 生成 sitemap */
    // hostname: 'https://your_site_url',

    /* 文档仓库配置，用于 editLink */
    // docsRepo: '',
    // docsDir: 'docs',
    // docsBranch: '',

    /* 页内信息 */
    // editLink: true,
    // lastUpdated: true,
    // contributors: true,
    // changelog: false,

    /**
     * 博客
     * @see https://theme-plume.vuejs.press/config/basic/#blog
     */
    // blog: false, // 禁用博客
    blog: {
      postList: true, // 是否启用文章列表页
      tags: true, // 是否启用标签页
      archives: true, // 是否启用归档页
      categories: true, // 是否启用分类页
      postCover: 'left', // 文章封面位置
      pagination: 15, // 每页显示文章数量
    },

    /* 博客文章页面链接前缀 */
    article: '/a/',

    /**
     * 编译缓存，加快编译速度
     * @see https://theme-plume.vuejs.press/config/basic/#cache
     */
    cache: 'filesystem',

    /**
     * 为 markdown 文件自动添加 frontmatter 配置
     * @see https://theme-plume.vuejs.press/config/basic/#autofrontmatter
     */
    autoFrontmatter: false,
    // autoFrontmatter: {
    //   permalink: true,  // 是否生成永久链接
    //   createTime: true, // 是否生成创建时间
    // title: true,      // 是否生成标题
    // },

    /* 本地搜索, 默认启用 */
    search: { provider: 'local' },

    /**
     * Algolia DocSearch
     * 启用此搜索需要将 本地搜索 search 设置为 false
     * @see https://theme-plume.vuejs.press/config/plugins/search/#algolia-docsearch
     */
    // search: {
    //   provider: 'algolia',
    //   appId: '',
    //   apiKey: '',
    //   indexName: '',
    // },

    /**
     * Shiki 代码高亮
     * @see https://theme-plume.vuejs.press/config/plugins/code-highlight/
     */
    codeHighlighter: {
      //   twoslash: true, // 启用 twoslash
      //   whitespace: true, // 启用 空格/Tab 高亮
      lineNumbers: true, // 启用行号
      themes: { light: 'vitesse-light', dark: 'vitesse-dark' },
      notationDiff: true,
      notationErrorLevel: true,
      notationFocus: true,
      notationHighlight: true,
      notationWordHighlight: true,
      highlightLines: true,
      collapsedLines: false,
    },

    /* 文章字数统计、阅读时间，设置为 false 则禁用 */
    readingTime: false,

    /**
      * markdown
      * @see https://theme-plume.vuejs.press/config/markdown/
      */
    markdown: {
      hint: true,
      alert: true,
      fileTree: true,
      plot: true,
      icons: true,
      math: {             // 启用数学公式
        type: 'katex',
      },
      //   chartjs: true,      // 启用 chart.js
      //   echarts: true,      // 启用 ECharts
      //   mermaid: true,      // 启用 mermaid
      //   flowchart: true,    // 启用 flowchart
      image: {
        figure: true,     // 启用 figure
        lazyload: true,   // 启用图片懒加载
        //     mark: true,       // 启用图片标记
        //     size: true,       // 启用图片大小
      },
      //   include: true,      // 在 Markdown 文件中导入其他 markdown 文件内容
      imageSize: 'local', // 启用 自动填充 图片宽高属性，避免页面抖动
    },

    /**
     * 水印
     * @see https://theme-plume.vuejs.press/guide/features/watermark/
     */
    // watermark: true,

    /**
     * 评论 comments
     * @see https://theme-plume.vuejs.press/guide/features/comments/
     */
    // comment: {
    //   provider: '', // "Artalk" | "Giscus" | "Twikoo" | "Waline"
    //   comment: true,
    //   repo: '',
    //   repoId: '',
    //   category: '',
    //   categoryId: '',
    //   mapping: 'pathname',
    //   reactionsEnabled: true,
    //   inputPosition: 'top',
    // },

    /**
     * 加密功能
     * @see https://theme-plume.vuejs.press/guide/features/encryption/
     */
    encrypt: {
      rules: {
        // 可以是 md 文件的相对路径，对该文件加密
        // '前端/基础.md': '123456',
        // 可以是 文件夹的路径，对该目录下所有文章加密
        // '/notes/vuepress-theme-plume/': '123456',
        // 可以是 访问地址的请求路径，对该访问路径下所有文章加密
        '/tf/': 'qpqiqpqi',
        // 可以是 具体的某个页面的请求路径，对该页面加密
        // '/article/f8dnci3/': '123456',
        // 如果是 `^` 开头，则匹配该正则表达式的页面也会加密
        // '^/(a|b)/': '123456',
      }
    },
    sidebar: {
      "/tf/": [
        {
          text: "TF环境",
          prefix: "/tf",
          items: [
            { text: "网络配置", link: "网络配置/" },
            { text: "系统环境1", link: "系统环境1/" },
            { text: "系统环境2", link: "系统环境2/" },
            { text: "状态监控", link: "状态监控/" },
          ]
        }
      ]
    }
  }),
})
