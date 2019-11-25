<template>
    <ul class="main-nav__flyout"
        v-if="items && items.length > 0"
        @keydown.down="selectNextLink"
        @keydown.tab.exact="selectNextLink"
        @keydown.up="selectPrevLink"
        @keydown.tab.shift.exact="selectPrevLink"
        @keydown.right="selectNextSection($event, true)"
        @keydown.left="selectPrevSection($event, true)"
        @mouseenter.stop="open">
        <flyout-section ref="items"
                        v-for="(item, key) in items"
                        v-if="item.items && item.items.length"
                        v-bind="item"
                        :is-compact="isCompact"
                        :key="key"
                        :itemId="`flyout_title_${ uniqId }_${ key }`"
                        @content-link-click="$emit('content-link-click')"
        >
        </flyout-section>
    </ul>
</template>

<script lang="ts">
    import Vue from 'vue';
    import ViewportUtility from '../../../utils/viewport';

    export default Vue.component('Flyout', {
        props: {
            items: {
                type: Array,
                required: true,
            },
            isCompact: {
                type: Boolean,
                required: false,
            },
            disableKeyboardEvents: {
                type: Boolean,
                required: false,
                default: false,
            },
        },
        data() {
            return {
                sectionIndex: 0,
                viewportUtil: new ViewportUtility(),
            }
        },
        computed: {
            flyoutSections(): any {
                return Array.isArray(this.$refs.items) ? this.$refs.items : [this.$refs.items];
            },
        },
        methods: {
            open(): void {
                this.$emit('open');
            },
            close(): void {
                this.reset();
                this.$emit('close');
            },
            backToParent(): void {
                this.$emit('main');
                this.close();
            },
            reset(): void {
                this.sectionIndex = 0;
                // @ts-ignore
                this.flyoutSections.forEach(s => s && s.reset && s.reset());
            },
            async selectFirstLink(): Promise<any> {
                this.reset();
                await this.$nextTick();
                // @ts-ignore
                this.flyoutSections[this.sectionIndex].selectFirstLink();
            },
            selectNextLink(e): void {
                if (this.disableKeyboardEvents) {
                    return;
                }

                e.preventDefault();
                // @ts-ignore
                const hasNext = this.flyoutSections[this.sectionIndex].selectNextLink();

                if (!hasNext) {
                    // @ts-ignore
                    this.selectNextSection();
                }
            },
            selectPrevLink(e): void {
                if (this.disableKeyboardEvents) {
                    return;
                }

                if (typeof e !== 'undefined') {
                    e.preventDefault();
                }

                // @ts-ignore
                const hasPrev = this.flyoutSections[this.sectionIndex].selectPrevLink();

                if (!hasPrev) {
                    // @ts-ignore
                    this.selectPrevSection();
                }
            },
            selectNextSection(e, keepIndex): void {
                if (this.disableKeyboardEvents) {
                    return;
                }

                if (typeof e !== 'undefined') {
                    e.preventDefault();
                }

                if (this.sectionIndex >= this.flyoutSections.length - 1) {
                    this.backToParent();
                    return;
                }

                const currentSection = this.sectionIndex;
                // @ts-ignore
                const currentLinkIndex = this.flyoutSections[this.sectionIndex].focusIndex;

                this.sectionIndex = this.sectionIndex + 1;

                if (keepIndex) {
                    // @ts-ignore
                    this.flyoutSections[this.sectionIndex].setFocusIndex(currentLinkIndex);
                } else {
                    // @ts-ignore
                    this.flyoutSections[this.sectionIndex].selectFirstLink();
                }

                // @ts-ignore
                this.flyoutSections[currentSection].reset();
            },
            selectPrevSection(e, keepIndex): void {
                if (this.disableKeyboardEvents) {
                    return;
                }

                if (typeof e !== 'undefined') {
                    e.preventDefault();
                }

                if (this.sectionIndex <= 0) {
                    this.backToParent();
                    return;
                }

                const currentSection = this.sectionIndex;
                // @ts-ignore
                const currentLinkIndex = this.flyoutSections[this.sectionIndex].focusIndex;

                this.sectionIndex = this.sectionIndex - 1;

                if (keepIndex) {
                    // @ts-ignore
                    this.flyoutSections[this.sectionIndex].setFocusIndex(currentLinkIndex);
                } else {
                    // @ts-ignore
                    this.flyoutSections[this.sectionIndex].selectLastLink();
                }

                // @ts-ignore
                this.flyoutSections[currentSection].reset();
            }
        },
    });
</script>
