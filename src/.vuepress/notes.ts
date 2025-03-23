import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [
    {
      dir: '更新日志',

      link: '/更新日志',
      sidebar: "auto",
    },
    {
      dir: '文档',
      link: '/文档',
      sidebar: "auto",
    },
  ],
})
