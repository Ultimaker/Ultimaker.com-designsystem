const defaultIconUrl = '/static/icons/iconset.svg';

export default {
    name: 'icon',
    data: () => ({
        ready: false,
        symbolData: null,
        viewBox: null
    }),
    props: {
        iconName: {
            type: String,
            required: true
        }
    },
    computed: {
        iconId() {
            return `icon-${ this.iconName }`;
        },
        iconClass() {
            return `icon--${ this.iconName }`;
        },
        iconUrl() {
            return window.svgIconMap || defaultIconUrl;
        },
        iconRef() {
            return `${ this.iconUrl }#icon-${ this.iconName }`;
        }
    },
    mounted() {
        // Only render in browser
        this.ready = true;

        /* istanbul ignore next */ /* not testing IE polyfill 8-) */
        if ((/Trident\//).test(window.navigator.userAgent)) {
            const requestOptions =  {
                    cache: 'cache',
                    headers: new Headers({
                        'Content-Type': 'image/svg+xml'
                    })
                },
                request = new Request(this.iconUrl, requestOptions);

            fetch(request)
                .then(async(result) => {
                    if (result.status < 200 || result.status >= 300) {
                        console.warn(`icon.js(fetch-icon): ${ result.statusText }`);

                        return;
                    }

                    const data = await result.text(),
                        parser = new DOMParser(),
                        doc = parser.parseFromString(data, 'image/svg+xml'),
                        symbol = doc.querySelector(`#icon-${ this.iconName }`);

                    if (symbol !== null) {
                        const symbolContainer = this.$el.querySelector('#symbol-container'),
                            clone = symbol.cloneNode(true);

                        if (symbol.viewBox && symbol.viewBox.baseVal) {
                            const box = symbol.viewBox.baseVal;

                            this.viewBox = `${ box.x } ${ box.y } ${ box.width } ${ box.height }`;
                        }

                        while (clone.childNodes.length) {
                            symbolContainer.appendChild(clone.firstChild);
                        }
                    }
                })
                .catch((ex) => {
                    console.error(`failed to fetch icon: ${ ex.message }`);
                });
        }
    },
    template: require('./icon.html')
};
