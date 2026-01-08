export default {
  title: "ANYUJIA",
  description: "Security / Pentest / Engineering",

  // 主题配置
  themeConfig: {
    // 网站 Logo
    logo: '/cyber-logo.svg',
    siteTitle: 'ANYUJIA',

    // 顶部导航栏
    nav: [
      { text: "⚡ 首页", link: "/" },
      { text: "📦 项目", link: "/projects/" },
      { text: "📡 博客", link: "/blog/" },
      { text: "📷 日常", link: "/daily/" },
    ],

    // 侧边栏
    sidebar: {
      "/projects/": [
        {
          text: "项目",
          items: [
            { text: "项目总览", link: "/projects/" },
            { text: "AutoRecon 信息收集工具", link: "/projects/autorecon" },
          ],
        },
      ],
      "/blog/": [
        {
          text: "博客",
          items: [
            { text: "文章列表", link: "/blog/" },
            { text: "SQL 注入漏洞挖掘实战", link: "/blog/sql-injection-guide" },
          ],
        },
      ],
      "/daily/": [
        {
          text: "日常记录",
          items: [
            { text: "全部动态", link: "/daily/" },
            { text: "2024 新年计划", link: "/daily/new-year-plan-2024" },
          ],
        },
      ],
    },

    // 社交链接
    socialLinks: [
      { icon: "github", link: "https://github.com/anYuJia" },
    ],

    // 页脚
    footer: {
      message: '⚡ SECURITY / PENTEST / ENGINEERING ⚡',
      copyright: '© 2024-present ANYUJIA'
    },

    // 搜索
    search: {
      provider: 'local'
    },

    // 文档页脚导航
    docFooter: {
      prev: '◀ 上一篇',
      next: '下一篇 ▶'
    },

    // 外链图标
    externalLinkIcon: true,

    // 最后更新时间
    lastUpdated: {
      text: '🕐 最后更新',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    },

    // 目录标题
    outline: {
      label: '📑 目录',
      level: [2, 3]
    },

    // 返回顶部
    returnToTopLabel: '↑ 返回顶部',
  },

  // 最后更新时间
  lastUpdated: true,

  // 语言
  lang: 'zh-CN',

  // Head 配置
  head: [
    ['meta', { name: 'author', content: 'anyujia' }],
    ['meta', { name: 'keywords', content: '安全, 渗透测试, Web安全, 工具开发, anyujia, cyberpunk, hacker' }],
    ['meta', { property: 'og:title', content: 'ANYUJIA - Security Engineer' }],
    ['meta', { property: 'og:description', content: 'Security / Pentest / Engineering' }],
    ['meta', { name: 'theme-color', content: '#0a0a0f' }],
    // 加载 Google Fonts
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700;900&family=Rajdhani:wght@300;400;500;600;700&display=swap', rel: 'stylesheet' }],
  ],

  // Markdown 配置
  markdown: {
    lineNumbers: true,
    theme: {
      light: 'github-dark',
      dark: 'github-dark'
    }
  },

  // 黑暗模式 - true 表示支持切换
  appearance: true
};
