import IconButton from 'molecules/icon-button';

export default {
    name: 'search-bar',
    template: require('./search-bar.html'),
    components: {
        IconButton
    },
    data: () => ({
        searchValue: ''
    }),
    props: {
        openState: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        close() {
            if (this.openState) {
                this.$emit('close');
            }
        },
        doSearch() {
            if (this.searchValue !== '') {
                // temporary solution until search is implemented
                window.location = `https://ultimaker.com/search?search=${ encodeURIComponent(this.searchValue) }`;
                this.close();
            }
        },
        onBlur() {
            if (this.searchValue === '') {
                this.close();
            }
        },
        focusInput() {
            this.$refs.search__input.focus();
        }
    }
};
