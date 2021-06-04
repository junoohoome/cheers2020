module.exports = {
  title: 'cheers2020',  
  description : '个人收藏夹 beta',
   head: [ 
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  base: '/cheers2020/',
  themeConfig: {
    nav:[ 
      {
        text: '首页',
        link: '/'
      },
      {
        text: '书签',
        link: '/bookmarks/'
      },
      {
        text: '命令',
        link: '/command/'
      },
      {
        text: 'Java',
        link: '/java/'
      },
      {
        text: '项目',
        link: '/project/'
      }              
    ],
    sidebar: 'auto',
    sidebarDepth: 2,
	lastUpdated: '上次更新',
	repo: 'junoohoome/cheers2020',
	docsDir: 'docs'
  },
  markdown: {
    config: md => {
      // use more markdown-it plugins!
      md.use(require('markdown-it-include'))
    }
  }
};