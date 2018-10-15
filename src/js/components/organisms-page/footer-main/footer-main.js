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
        countryInput: null
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
        country: {
            type: Object,
            required: true
        }
    },
    computed: {
        currentCountryLabel() {
            if (this.country && this.country.currency && this.country.currency.symbol) {
                return `${ this.country.name } - ${ this.country.currency.symbol }`;
            } else if (this.country) {
                return `${ this.country.name }`;
            }

            return `Please select your country`;
        },
        currentCountryAriaLabel() {
            return `Change your country, currently: ${ this.country.name }`;
        }
    },
    methods: {
        init() {
            this.countryInput = this.country;
        },
        toggleCountrySelector() {
            this.countrySelectorOpen = !this.countrySelectorOpen;
            if (this.countrySelectorOpen) {
                Vue.nextTick(() => {
                    this.$refs.countryselector.focus();
                });
            }
        },
        setCountry() {
            this.$store.dispatch('PUSH_COUNTRY', this.countryInput);
            this.toggleCountrySelector();
        },
        mapLinks: (linkList) => linkList.map(link => ({
            title: link.title,
            href: getLink(link.links) || '#'
        }))
    },
    beforeMount() {
        this.init();
    }
});
