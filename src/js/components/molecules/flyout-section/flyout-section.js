import Vue from 'vue';

export default Vue.component('flyout-section', {
    name: 'flyout-section',
    template: require('./flyout-section.html'),

    data() {
        return {
            columnClassDouble: 'flyout__section--2-columns',
            columnClassTriple: 'flyout__section--3-columns'
        };
    },
    props: {
        isCompact: {
            type: Boolean
        },
        isExpanded: {
            type: Boolean,
            default: false
        },
        maxVisible: {
            type: Number,
            default: 3
        },
        maxItemsCol: {
            type: Number,
            default: 6
        },
        title: {
            type: String,
            required: true
        },
        itemId: {
            type: String,
            default: () => `flyout_title_${ ~~(Math.random() * 10000) }`
        },
        links: {
            type: Array,
            required: true
        },
        bottomLinks: {
            type: Array
        }
    },
    computed: {
        hasItems() {
            return this.links;
        },
        moreThanMaxItems() {
            return this.links.length > this.maxItemsCol;
        },
        lessThanDoubleMaxItems() {
            return this.links.length <= this.maxItemsCol * 2;
        },
        moreThanDoubleMaxItems() {
            return this.links.length > this.maxItemsCol * 2;
        },
        sectionClass() {
            if (this.hasItems && this.moreThanMaxItems && this.lessThanDoubleMaxItems) {
                return this.columnClassDouble;
            } else if (this.hasItems && this.moreThanDoubleMaxItems) {
                return this.columnClassTriple;
            }

            return '';
        }
    }
});
