import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Glimmer docs",
  description: "Glimmer docs",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/api-references' }
    ],

    sidebar: [
      {
        text: 'Getting started',
        link: '/getting-started',
        items: [
          { text: 'Installation', link: '/installation.md' },
          { text: 'Tutorial', link: '/tutorial.md' },
          { text: 'How to do x', link: '/howto.md' },
        ]
      },
      {
        text: 'API References',
        link: '/api-references',
        items: [
          { text: 'glimmer-core', link: '/glimmer-core.md' },
          { text: 'GWGL', link: '/gwgl.md' },
          { text: 'GVK', link: '/gvk.md' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
