module.exports = [
    {
        route: 'rules',
        themeName: 'Rules',
        bannerImage: '/images/example/rule-1.png',
        title: 'Rules Simple',
        description: {
            en: 'A simple timeline drawn by the Rules',
            zh: '使用 Rules 绘制的简易时间线',
        },
        usageUrl: 'https://github.com/FoXZilla/Rules',
        docMarkdown: {
            source: 'https://raw.githubusercontent.com/FoXZilla/Rules/master/README.md',
            context: 'FoXZilla/Rules',
        },
        jsFiles: [
            '/lib/rules/rules.js',
            '/javascripts/examples/rules-1.js'
        ],
    },
    {
        route: 'rules-china-history',
        themeName: 'Rules',
        bannerImage: '/images/example/rule-1.png',
        title: {
            en: 'China History',
            zh: '中国编年史',
        },
        description: {
            en: 'A simple timeline drawn by the Rules',
            zh: '使用 Rules 绘制的中国编年史',
        },
        usageUrl: 'https://github.com/FoXZilla/Rules',
        docMarkdown: {
            source: 'https://raw.githubusercontent.com/FoXZilla/Rules/master/README.md',
            context: 'FoXZilla/Rules',
        },
        jsFiles: [
            '/lib/rules/rules.js',
            '/javascripts/examples/rules-2.js'
        ],
    },
    {
        route: 'polar-day',
        themeName: 'Polar Day',
        bannerImage: '/images/example/polar-day-1.png',
        title: 'Polar-Day Simple',
        description: {
            en: 'A simple timeline drawn by the Polar-Day',
            zh: '使用 Polar-Day 绘制的简易时间线'
        },
        usageUrl: 'https://github.com/FoXZilla/polar-day',
        docMarkdown: {
            source: 'https://raw.githubusercontent.com/FoXZilla/polar-day/master/README.md',
            context: 'FoXZilla/polar-day',
        },
        jsFiles: [
            '/lib/polar-day/polar-day.js',
            '/javascripts/examples/polar-day-1.js'
        ],
    },
];
