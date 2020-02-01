function debounce  ({ fn, idle = 10, context = null, run = false}){
    let timer = null;
    const wrapper =function(){
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fn.apply(context,arguments);
        } ,idle);
    };
    if(run) wrapper();
    return wrapper;
};

Object.assign(EXAMPLE, {
    _scaleFlask: null,
    _timeline: null,
    _alertEl: document.getElementById('alert'),
    _alert(msg) {
        if (msg) {
            this._alertEl.innerHTML = msg;
            this._alertEl.style.display = 'block';
        } else {
            this._alertEl.style.display = 'none';
        }
    },

    async setEvents(data) {
        if (this._scaleFlask) throw new Error();

        this._scaleFlask = new CodeFlask('#code-editor', {
            language: 'js',
            lineNumbers: true,
            defaultTheme: false,
        });
        this._scaleFlask.updateCode(JSON.stringify(data, null, '    '));

        await new Promise(r => setTimeout(r, 0)); // prevent the onUpdate fire

        this._scaleFlask.onUpdate(debounce({
            async fn(code) {
                try {
                    this._timeline.drawInfo.events = JSON.parse(code);
                    await this._timeline.apply();
                    this._timeline.draw();
                    this._alert(false);
                } catch (e) {
                    this._alert(e);
                }
            },
            idle: 500,
            context: this,
        }));
    },
    setTimeline(timeline) {
        if (this._timeline) throw new Error();
        this._timeline = timeline;
    },
});


(async function () {
    const overlay = {
        el: document.getElementById('overlay'),
        show() {
            this.el.style.display = 'block';
            document.documentElement.style.overflow = 'hidden';
            document.body.style.overflow = 'hidden';
        },
        hide() {
            this.el.style.display = 'none';
            document.documentElement.style.overflow = '';
            document.body.style.overflow = '';
        },
    };

    document.getElementById('save-timeline').addEventListener(
        'click',
        () => EXAMPLE.timeline.downloadImage(),
    );


    new Vue({
        el: '#readme-view',
        data() {return {
            mdHtml: '',
            expand: false,
        }},
        methods: {
            async fetchMarkdownHtml() {
                const response = await fetch(EXAMPLE.docMarkdown.source);
                const mdContent = await response.text();

                const gfmResult = await async function (text) {
                    const xhr = new XMLHttpRequest();
                    xhr.open('POST', 'https://api.github.com/markdown');
                    xhr.send(JSON.stringify({
                        text,
                        "mode": "gfm",
                        "context": EXAMPLE.docMarkdown.context,
                    }));

                    return new Promise(r => {
                        xhr.onload = function () {
                            r(xhr.responseText);
                        }
                    });
                }(mdContent);

                return gfmResult;
            },
        },
        async created() {
            this.mdHtml = await this.fetchMarkdownHtml();
        },
        mounted() {
            this.$watch('expand', value => {
                if (value) {
                    overlay.show();
                    overlay.el.addEventListener(
                        'click',
                        () => this.expand = false,
                        { once: true,
                        });
                    this.$refs.port.focus();
                } else {
                    overlay.hide();
                }
            });
        }
    });

})();
