export default {
    name: 'flyout',
    template: require('./flyout.html'),
    data() {
        return {
            sectionIndex: 0
        };
    },
    props: {
        sections: {
            required: true,
            type: Array
        },
        isCompact: {
            type: Boolean
        },
        disableKeyboardEvents: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        flyoutSections() {
            return Array.isArray(this.$refs.sections) ? this.$refs.sections : [this.$refs.sections];
        }
    },
    methods: {
        open() {
            this.$emit('open');
        },
        close() {
            this.reset();
            this.$emit('close');
        },
        backToParent() {
            this.$emit('main');
            this.close();
        },
        reset() {
            this.sectionIndex = 0;
            this.flyoutSections.forEach(s => s && s.reset && s.reset());
        },
        async selectFirstLink() {
            this.reset();
            await this.$nextTick();
            this.flyoutSections[this.sectionIndex].selectFirstLink();
        },
        selectNextLink(e) {
            if (this.disableKeyboardEvents) {
                return;
            }
            e.preventDefault();

            const hasNext = this.flyoutSections[this.sectionIndex].selectNextLink();

            if (!hasNext) {
                this.selectNextSection();
            }
        },
        selectPrevLink(e) {
            if (this.disableKeyboardEvents) {
                return;
            }

            if (typeof e !== 'undefined') {
                e.preventDefault();
            }

            const hasPrev = this.flyoutSections[this.sectionIndex].selectPrevLink();

            if (!hasPrev) {
                this.selectPrevSection();
            }
        },
        selectNextSection(e, keepIndex) {
            if (this.disableKeyboardEvents) {
                return;
            }

            if (typeof e !== 'undefined') {
                e.preventDefault();
            }

            if (this.sectionIndex >= this.flyoutSections.length - 1) {
                return this.backToParent();
            }

            const currentSection = this.sectionIndex,
                currentLinkIndex = this.flyoutSections[this.sectionIndex].focusIndex;

            this.sectionIndex++;
            if (keepIndex) {
                this.flyoutSections[this.sectionIndex].setFocusIndex(currentLinkIndex);
            } else {
                this.flyoutSections[this.sectionIndex].selectFirstLink();
            }

            this.flyoutSections[currentSection].reset();
        },
        selectPrevSection(e, keepIndex) {
            if (this.disableKeyboardEvents) {
                return;
            }

            if (typeof e !== 'undefined') {
                e.preventDefault();
            }

            if (this.sectionIndex <= 0) {
                return this.backToParent();
            }

            const currentSection = this.sectionIndex,
                currentLinkIndex = this.flyoutSections[this.sectionIndex].focusIndex;

            this.sectionIndex--;
            if (keepIndex) {
                this.flyoutSections[this.sectionIndex].setFocusIndex(currentLinkIndex);
            } else {
                this.flyoutSections[this.sectionIndex].selectLastLink();
            }

            this.flyoutSections[currentSection].reset();
        }
    }
};
