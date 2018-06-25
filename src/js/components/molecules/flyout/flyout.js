import FlyoutSection from 'molecules/flyout-section';

export default {
    name: 'flyout',
    template: require('./flyout.html'),
    components: {
        FlyoutSection
    },
    data() {
        return {
            linkIndex: 0,
            sectionIndex: 0,
            calc: 0
        };
    },
    props: {
        sections: {
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
    methods: {
        clearIndexes() {
            this.linkIndex = 0;
            this.calc = 0;
            this.sectionIndex = 0;
        },
        checkIndexes(links, sections) {
            if (this.sectionIndex === 0) {
                this.clearIndexes();
            } else if (this.sectionIndex === sections.length - 1) {
                this.calc = links.length - sections[this.sectionIndex].querySelectorAll('a').length;
            }
            this.linkIndex = this.calc;
        },
        open() {
            this.$emit('open');
        },
        close() {
            this.clearIndexes();
            this.$emit('close');
        },
        backToParent() {
            this.$emit('main');
            this.close();
        },
        selectNextFlyoutLink(e) {
            if (this.disableKeyboardEvents) {
                return;
            }

            const flyoutLinks = this.$el.querySelectorAll('a'),
                flyoutSections = this.$el.querySelectorAll('.flyout__section'),
                sectionLength = flyoutSections[this.sectionIndex].querySelectorAll('a').length;

            e.preventDefault();
            this.linkIndex++;

            if (flyoutLinks[this.linkIndex]) {
                flyoutLinks[this.linkIndex].focus();
            } else {
                this.backToParent();
            }

            if (this.linkIndex === sectionLength + this.calc) {
                this.sectionIndex++;
                this.calc += sectionLength;
            }
        },
        selectPrevFlyoutLink(e) {
            if (this.disableKeyboardEvents) {
                return;
            }

            const flyoutLinks = this.$el.querySelectorAll('a'),
                flyoutSections = this.$el.querySelectorAll('.flyout__section');

            e.preventDefault();
            this.linkIndex--;

            if (flyoutLinks[this.linkIndex]) {
                flyoutLinks[this.linkIndex].focus();
            } else {
                this.backToParent();
            }

            if (this.linkIndex === this.calc - 1) {
                this.sectionIndex--;
                this.calc -= flyoutSections[this.sectionIndex].querySelectorAll('a').length;
            }
        },
        selectNextFlyoutSection(e) {
            if (this.disableKeyboardEvents) {
                return;
            }

            e.preventDefault();

            const flyoutLinks = this.$el.querySelectorAll('a'),
                flyoutSections = this.$el.querySelectorAll('.flyout__section');

            // Set sectionIndex
            if (this.sectionIndex < flyoutSections.length - 1) {
                this.sectionIndex++;
            } else {
                this.sectionIndex = 0;
            }

            // Set calc
            if (this.sectionIndex < flyoutSections.length && this.sectionIndex > 0) {
                this.calc += flyoutSections[this.sectionIndex - 1].querySelectorAll('a').length;
            }

            this.checkIndexes(flyoutLinks, flyoutSections);
            flyoutSections[this.sectionIndex].querySelector('a').focus();
        },
        selectPrevFlyoutSection(e) {
            if (this.disableKeyboardEvents) {
                return;
            }

            e.preventDefault();

            const flyoutLinks = this.$el.querySelectorAll('a'),
                flyoutSections = this.$el.querySelectorAll('.flyout__section');

            // Set sectionIndex
            if (this.sectionIndex > 0) {
                this.sectionIndex--;
            } else {
                this.sectionIndex = flyoutSections.length - 1;
            }

            // Set calc
            if (this.sectionIndex < flyoutSections.length && this.sectionIndex > 0) {
                this.calc -= flyoutSections[this.sectionIndex].querySelectorAll('a').length;
            }

            this.checkIndexes(flyoutLinks, flyoutSections);
            flyoutSections[this.sectionIndex].querySelector('a').focus();
        }
    }
};
