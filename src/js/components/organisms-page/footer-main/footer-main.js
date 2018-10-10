import Vue from 'vue';

const getLink = (links) => {
    if (!links || !links.item || !links.item.length) {
        return null;
    }

    return links.item[0].href;
};

export default Vue.component('footer-main', {
    name: 'footer-main',
    template: require('./footer-main.html'),
    data: () => ({
        countrySelectorOpen: false,
        country: null
    }),
    props: {
        minorNav: {
            type: Object,
            required: true
        },
        globalLabels: {
            type: Object,
            required: true
        },
        legalNav: {
            type: Object,
            required: true
        },
        settings: {
            type: Object,
            required: true
        },
        detectedCountry: {
            type: Object,
            required: true
        }
    },
    computed: {
        currentCountry() {
            let country = null;

            if (this.settings && this.settings.country) {
                country = this.settings.country;
            } else if (this.detectedCountry) {
                country = this.detectedCountry;
            }

            return country;
        },
        currentCountryLabel() {
            if (this.currentCountry && this.currentCountry.currency && this.currentCountry.currency.symbol) {
                return `${ this.currentCountry.name } - ${ this.currentCountry.currency.symbol }`;
            } else if (this.currentCountry) {
                return `${ this.currentCountry.name }`;
            }

            return `Please select your country`;
        },
        currentCountryAriaLabel() {
            let label = 'Change your country';

            if (this.currentCountry) {
                label += `, currently: ${ this.currentCountry.name }`;
            }

            return label;
        }
    },
    methods: {
        toggleCountrySelector() {
            this.countrySelectorOpen = !this.countrySelectorOpen;
            if (this.countrySelectorOpen) {
                Vue.nextTick(() => {
                    this.$refs.countryselector.focus();
                });
            }
        },
        setCountry() {
            this.$store.dispatch('PUSH_COUNTRY', this.country);
            this.toggleCountrySelector();
        },
        mapLinks: (linkList) => linkList.map(link => ({
            title: link.title,
            href: getLink(link.links) || '#'
        }))
    }
});
