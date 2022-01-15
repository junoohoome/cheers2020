module.exports = {
    title: 'cheers2020',
    description: '个人收藏夹 beta',
    head: [
        ['link', {rel: 'icon', href: '/favicon.ico'}],
    ],
    base: '/cheers2020/',
    themeConfig: {
        nav: [
            {
                text: 'Home',
                link: '/'
            },
            {
                text: 'Bookmarks',
                link: '/bookmarks/'
            },
            {
                text: 'Shell',
                link: '/command/'
            },
            {
                text: 'Java',
                link: '/java/'
            },
            {
                text: 'Project',
                link: '/project/'
            },
            {
                text: 'Notebook',
                ariaLabel: 'Notebook',
                items: [
                    { text: '2020', link: '/notebook/2020/' },
                    { text: '2021', link: '/notebook/2021/' }
                ]
            },
            {
                text: 'Favorite',
                ariaLabel: 'Favorite',
                items: [
                    { text: '2020', link: '/favorite/2020/' },
                    { text: '2021', link: '/favorite/2021/' }
                ]
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