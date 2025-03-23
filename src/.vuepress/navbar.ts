import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: '主页', link: '/blog/', icon: 'material-symbols:home-outline-rounded' },
  { text: '归档', link: '/blog/archives/', icon: 'material-symbols:category-outline-rounded' },
  { text: '文档', link: '/notes/文档/', icon: 'material-symbols:docs-outline-rounded' },
  {
    text: '更新日志',
    // icon: 'material-symbols:autorenew-rounded',
    items: [
      { text: 'Web', link: '/更新日志/Web/', icon: 'material-symbols:computer-outline-rounded' },
      { text: 'Bot', link: '/更新日志/Bot/', icon: "material-symbols:robot-2-outline-rounded" },
    ]

  },
])
