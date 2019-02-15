export default {
    name: 'footer-content',
    template: require('./footer-content.html'),
    data() {
        return {
            localeSelector: {
                country: this.country,
                datasource: {
                    nl: 'Netherlands',
                    be: 'Belgium'
                },
                countryInputPlaceholderLabel: this.globalLabels.countryInputPlaceholder,
                countryDetectedLabel: this.globalLabels.countryDetected,
                countrySuggestionsLabel: this.globalLabels.countrySuggestions
            }
        };
    },
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
    }
};
