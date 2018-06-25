const defaultIconUrl = '/static/icons/iconset.svg';

export default {
    name: 'icon',
    data: () => ({
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
        iconId: function() {
            return `icon-${ this.iconName }`;
        },
        iconClass: function() {
            return `icon--${ this.iconName }`;
        },
        iconUrl: function() {
            let iconUrl = defaultIconUrl;

            if (process.BROWSER && window.svgIconMap) {
                iconUrl = window.svgIconMap;
            }

            return iconUrl;
        },
        iconRef: function() {
            return `${ this.iconUrl }#icon-${ this.iconName }`;
        }
    },
    mounted() {
        /* istanbul ignore next */ /* not testing IE polyfill 8-) */
        if ((/Trident\//).test(window.navigator.userAgent)) {
            const requestOptions =  {
                    cache: 'cache',
                    headers: new Headers()
                },
                request = new Request(this.iconUrl, requestOptions);

            fetch(request)
                .then((result) => {
                    const parser = new DOMParser(),
                        doc = parser.parseFromString(result.data, 'image/svg+xml'),
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
                });
        }
    },
    template: require('./icon.html')
};
