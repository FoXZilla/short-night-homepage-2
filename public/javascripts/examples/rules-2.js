(async function () {
    const timelineData = [
        {
            "date": "-2029",
            "title": "夏朝",
            "description": "禹建立夏朝",
            "endDate": "-1559",
            "endText": "商汤于鸣条之战打败夏桀，夏朝灭亡"
        },
        {
            "date": "-1320",
            "title": "商朝",
            "description": "商王于盘庚时把都城自奄迁殷，甲骨文和金文得到发展",
            "endDate": "-1046",
            "endText": "周武王于牧野之战击败商王帝辛的军队，商朝灭亡"
        },
        {
            "date": "-899",
            "title": "西周",
            "description": "周懿王元年，郑国的天亮了两次(发生了日食)",
            "endDate": "-770",
            "endText": "周平王向东迁都至雒邑"
        },
        {
            "date": "-722",
            "title": "春秋",
            "description": "郑庄公平定共叔段之乱。时为鲁隐公元年，史书《春秋》编年始于此",
            "endDate": "-473",
            "endText": "越王勾践消灭吴国，夫差自杀。勾践与齐晋会盟于徐，为春秋最后一个霸主"
        },
        {
            "date": "-453",
            "title": "战国",
            "description": "晋国氏族韩、赵、魏三家尽灭智氏，瓜分其地",
            "endDate": "-221"
        },
        {
            "date": "-219",
            "title": "秦朝",
            "endDate": "-207"
        },
        {
            "date": "-206",
            "title": "楚汉相争（西楚）",
            "description": '项羽自封为西楚霸王，分封十八路诸侯。刘邦被封为汉王。',
            "endDate": "-202"
        },
        {
            "date": "-200",
            "title": "西汉",
            "endDate": "-8",
            "endText": "王莽篡位孺子婴禅让后自立为帝，改国号为新"
        },
        {
            "date": "17",
            "title": "新朝",
            "endDate": "25",
        },
        {
            "date": "35",
            "title": "东汉",
            "endDate": "220",
            "endText": "汉献帝被迫禅位，曹丕篡汉自立，改国号“魏”，史称“曹魏”，东汉亡"
        },
        {
            "date": "221",
            "title": "三国",
            "description": "刘备于成都称帝，国号仍为“汉”，史称“蜀汉”",
            "endDate": "280",
            "endText": "晋灭吴，统一中国。三国时期结束"
        },
        {
            "date": "279",
            "title": "西晋",
            "endDate": "316",
            "endText": "晋愍帝投降被杀，西晋灭亡"
        },
        {
            "date": "317",
            "title": "东晋／十六国",
            "description": "琅邪王司马睿在建康称晋王",
            "endDate": "420",
            "endText": "刘裕废晋恭帝自立，建国号宋，史称“刘宋”或“水宋”"
        },
        {
            "date": "431",
            "title": "南北朝",
            "endDate": "589",
            "endText": "隋军攻入建康，陈叔宝被俘，南陈亡"
        },
        {
            "date": "581",
            "title": "隋朝",
            "endDate": "619",
            "endText": "王世充自立为帝，建国号“郑”"
        },
        {
            "date": "620",
            "title": "唐朝",
            "endDate": "907",
            "endText": "朱温逼迫唐哀宗禅让，建国号“梁”，史称“后梁”。唐亡，进入五代十国时期"
        },
        {
            "date": "916",
            "title": "五代十国／契丹（辽）",
            "description": "耶律阿保机登基称“大圣大明天皇帝”，定国号为“契丹”",
            "endDate": "960",
            "endText": "赵匡胤桥驿发动兵变，夺取后周帝位，建国号“宋”"
        },
        {
            "date": "962",
            "title": "北宋／辽／西夏",
            "description": "周行逢死，子周保权继位，部将张文表起兵反叛，兵败被杀。宋发兵攻占潭州",
            "endDate": "1127",
            "endText": "靖康之变"
        },
        {
            "date": "1129",
            "title": "南宋／金／西夏",
            "endDate": "1279",
            "endText": "宋军于厓山海域败于元军，丞相陆秀夫负幼主赵昺跳海殉国，宋流亡政府亡"
        },
        {
            "date": "1281",
            "title": "元朝",
            "endDate": "1368",
            "endText": "朱元璋于南京称帝，国号“大明”"
        },
        {
            "date": "1369",
            "title": "明朝",
            "endDate": "1644",
            "endText": "李自成建国号“大顺”，攻陷北京，明亡"
        },
        {
            "date": "1645",
            "title": "清朝",
            "endDate": "1912",
            "endText": "在袁世凯软硬兼施的逼迫下，清帝宣布退位，清朝正式灭亡"
        }
    ];

    EXAMPLE.setEvents(timelineData);
    EXAMPLE.setTimeline(await Rules.draw(EXAMPLE.el, timelineData))
})();
