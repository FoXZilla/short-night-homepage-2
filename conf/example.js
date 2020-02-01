module.exports = [
    {
        route: 'rules',
        themeName: 'Rules',
        bannerImage: '/images/example/rule-1.png',
        title: 'Simple Example of Rules',
        description: 'A simple timeline drawn by the Rules',
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
];
