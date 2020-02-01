(async function main () {
    const data = [{
        date: '2010-3-9',
        endDate: '2012-3-9',
        title: 'Event A',
    }, {
        date: '2011-3-9',
        title: 'Event B',
    }];
    const timeline = new Rules.Timeline(Rules.Timeline.mount('#main-timeline', 'rules'));
    const mainFlask = new CodeFlask('#main-code-editor', {
        language: 'js',
        readonly: true,
        defaultTheme: false
    });

    mainFlask.updateCode(JSON.stringify(data, null, '    '));

    timeline.drawInfo.events = data;

    await timeline.apply({
        axisLength: 300,
        startDate: '2009-6',
        endDate: '2012-10',
        milestoneBy: 'year',
    });

    timeline.draw();
})();

(async function scale () {
    const data = [{
        date: '2010-3-9',
        endDate: '2011-3-9',
        endText: 'at 3.9',
        title: 'Event A',
    }, {
        date: '2010-12-27',
        endDate: '2011-3-9',
        title: 'Event B',
    }, {
        date: '2011-3-9',
        title: 'Event C',
    }];
    const timeline = new Rules.Timeline(Rules.Timeline.mount('#scale-timeline', 'rules'));
    const mainFlask = new CodeFlask('#scale-code-editor', {
        language: 'js',
        readonly: true,
        defaultTheme: false
    });

    mainFlask.updateCode(JSON.stringify(data, null, '    '));

    timeline.drawInfo.events = data;

    await timeline.apply({
        axisLength: 500,
        startDate: '2009-6',
        endDate: '2011-10',
        milestoneBy: 'year',
    });

    timeline.draw();
})();

(async function conflict () {
    const data = [{
        date: '2009-10-1',
        title: 'Event A',
    }, {
        date: '2009-12-10',
        endDate: '2011-3-9',
        endText: 'End of A',
        title: 'Event A',
    }, {
        date: '2010-11',
        endText: 'End of B',
        endDate: '2011-8-31',
        title: 'Event B',
    }, {
        date: '2010-12-27',
        title: 'Event C',
        description: 'Event C '.repeat(3),
    }, {
        date: '2011-3-9',
        title: 'Event D',
    }];
    const applyData = {
        axisLength: 500,
        startDate: '2009-6',
        endDate: '2011-10',
        milestoneBy: 'year',
    };

    (async function has() {
        const timeline = new Rules.Timeline(Rules.Timeline.mount('#has-conflict-timeline', 'rules'));

        timeline.ext.disableAll = true;
        timeline.drawInfo.events = data;

        await timeline.apply(applyData);

        timeline.draw();

    }());

    (async function has() {
        const timeline = new Rules.Timeline(Rules.Timeline.mount('#no-conflict-timeline', 'rules'));

        timeline.drawInfo.events = data;

        await timeline.apply(applyData);

        timeline.draw();

    }());
})();
