const SmoothScrolling = {
    timer: 0,

    stop: function () {
        clearTimeout(this.timer);
    },

    scrollTo: function (id: string, callback: () => void) {
        const settings = {
            duration: 1000,
            easing: {
                outQuint: function (x: number, t: number, b: number, c: number, d: number) {
                    return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
                },
            },
        };
        let percentage = 0;
        const startTime = Date.now();
        const node = document.getElementById(id);
        const nodeTop = node ? node.offsetTop : 0;
        const nodeHeight = node ? node.offsetHeight : 0;
        const body = document.body;
        const html = document.documentElement;
        const height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        const windowHeight = window.innerHeight;
        const offset = window.pageYOffset;
        const delta = nodeTop - offset;
        const bottomScrollableY = height - windowHeight;
        const targetY = bottomScrollableY < delta ? bottomScrollableY - (height - nodeTop - nodeHeight + offset) : delta;

        if (this.timer) {
            clearInterval(this.timer);
        }
        const step = () => {
            var yScroll;
            var elapsed = Date.now() - startTime;

            if (elapsed > settings.duration) {
                clearTimeout(this.timer);
            }

            percentage = elapsed / settings.duration;

            if (percentage > 1) {
                clearTimeout(this.timer);

                if (callback) {
                    callback();
                }
            } else {
                yScroll = settings.easing.outQuint(0, elapsed, offset, targetY, settings.duration);
                window.scrollTo(0, yScroll);
                this.timer = setTimeout(step, 10);
            }
        };

        this.timer = setTimeout(step, 10);
    },
};

export default SmoothScrolling;
