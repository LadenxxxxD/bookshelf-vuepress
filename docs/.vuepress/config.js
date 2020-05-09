const navConfig = require("./nav-config");
const sideBarConfig = require("./sidebar-config");
const archiveConfig = require("./archive-config");

module.exports = {
    /*
     * 网站基础配置
     */
    title: '今天也甄蔡',
    description: "网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中。",
    base: '/', // 设置站点根路径
    head: [
        ['link', { rel: 'icon', href: '/32x32.ico' }],
    ],
    plugins: [
        '@vuepress/active-header-links',
        '@vuepress/back-to-top'
    ],




    /*
     * 主题配置
     */
    themeConfig: {
        logo: '/logo.jpg',
        navbar: true,
        nav: navConfig,
        sidebar: sideBarConfig,
        sidebarDepth: 1,
        displayAllHeaders: true,
        activeHeaderLinks: false,
        smoothScroll: true,
        // sidebar: "auto",
        archive: archiveConfig
    },
    markdown: {
        lineNumbers: true,
        toc: {
            includeLevel: [1, 2]
        },
    },


    /*
     * 服务配置
     */
    dest: './dist',    // 设置输出目录
    host: "0.0.0.0",    //dev server主机名
    port: "8866",
    // repo: 'https://github.com/txs1992/mt-blog' //github链接
    extraWatchFiles: [
        "./.vuepress/config.js",
        "../README.md"
    ]
}
