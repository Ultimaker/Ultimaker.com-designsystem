export default {
    name: 'flyout-section',
    template: require('./flyout-section.html'),

    data() {
        return {
            isExpanded: false,
            focusIndex: null,
            columnClassDouble: 'flyout__section--2-columns',
            columnClassTriple: 'flyout__section--3-columns'
        };
    },
    props: {
        isCompact: {
            type: Boolean
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
        focusableItems() {
            return Array.isArray(this.$refs.focusable) ? this.$refs.focusable : [this.$refs.focusable];
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
        },
        flyoutToggleIsVisible() {
            return this.isCompact && this.links.length > this.maxVisible;
        }
    },
    methods: {
        toggleExpanded() {
            this.isExpanded = !this.isExpanded;
        },
        selectFirstLink() {
            this.focusIndex = 0;
        },
        selectLastLink() {
            this.focusIndex = this.focusableItems.length - 1;
        },
        selectNextLink() {
            if (this.focusIndex >= this.focusableItems.length - 1) {
                return false;
            }

            this.focusIndex++;

            return true;
        },
        selectPrevLink() {
            if (this.focusIndex <= 0) {
                return false;
            }

            this.focusIndex--;

            return true;
        },
        setFocusIndex(index) {
            if (index <= 0) {
                this.focusIndex = 0;
            } else if (index >= this.focusableItems.length) {
                this.focusIndex = this.focusableItems.length - 1;
            } else {
                this.focusIndex = index;
            }
        },
        reset() {
            this.focusIndex = null;
        }
    },
    watch: {
        focusIndex(newVal) {
            const focusComponent = this.focusableItems[newVal];

            if (typeof focusComponent === 'undefined') {
                return;
            }

            const focusElement = focusComponent.$el || focusComponent;

            if (focusElement.focus) {
                focusElement.focus();
            }
        }
    }
};
