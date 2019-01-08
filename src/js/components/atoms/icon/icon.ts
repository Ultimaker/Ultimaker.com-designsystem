import { Vue, Component, Prop } from 'vue-property-decorator';

const defaultIconUrl = '/static/icons/iconset.svg';

@Component({
    name: 'icon',
    template: require('./icon.html'),
})
export default class Icon extends Vue {
    @Prop({ type: String, required: true }) iconName!: string;

    ready:boolean = false;
    symbolData?:string|null = null;
    viewBox?:string|null = null;

    get iconId() {
        return `icon-${ this.iconName }`;
    }

    get iconClass() {
        return `icon--${ this.iconName }`;
    }

    get iconUrl() {
        return window['svgIconMap'] || defaultIconUrl;
    }

    get iconRef() {
        return `${ this.iconUrl }#icon-${ this.iconName }`;
    }

    mounted() {
        // Only render in browser
        this.ready = true;

        /* istanbul ignore next */ /* not testing IE polyfill 8-) */
        if ((/Trident\//).test(window.navigator.userAgent)) {
            const requestOptions =  <RequestInit> {
                cache: 'default',
                headers: new Headers({
                    'Content-Type': 'image/svg+xml',
                }),
            };
            const request = new Request(this.iconUrl, requestOptions);

            fetch(request)
                .then(async(result) => {
                    if (result.status < 200 || result.status >= 300) {
                        console.warn(`icon.js(fetch-icon): ${ result.statusText }`);

                        return;
                    }

                    const data = await result.text();
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(data, 'image/svg+xml');
                    const symbol = <SVGSVGElement> doc.querySelector(`#icon-${ this.iconName }`);

                    if (symbol !== null) {
                        const symbolContainer = this.$el.querySelector('#symbol-container');
                        const clone = symbol.cloneNode(true);

                        if (symbol.viewBox && symbol.viewBox.baseVal) {
                            const box = symbol.viewBox.baseVal;

                            this.viewBox = `${ box.x } ${ box.y } ${ box.width } ${ box.height }`;
                        }

                        if (symbolContainer) {
                            while (clone.firstChild && clone.childNodes.length) {
                                symbolContainer.appendChild(clone.firstChild);
                            }
                        }
                    }
                })
                .catch((ex) => {
                    console.error(`failed to fetch icon: ${ ex.message }`);
                });
        }
    }
}
