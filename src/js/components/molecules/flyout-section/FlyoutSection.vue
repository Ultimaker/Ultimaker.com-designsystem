<template>
    <li class="flyout__section" :class="sectionClass">
        <strong v-if="label" class="flyout__title" :id="itemId">{{ label }}</strong>
        <ul class="flyout__list"
            :aria-labelledby="itemId"
            :aria-haspopup="items.length > maxVisible"
            :aria-expanded="!isCompact || isExpanded">

            <li class="flyout__list-item"  v-for="(item, index) in items" v-if="index < maxVisible">
                <content-link ref="firstFocusableLinks" @click.native="$emit('content-link-click')" :url="item.url" class="flyout__link link" :label="item.label"></content-link>
            </li>

            <!-- items using v-show so spiders can index the entire menu -->
            <li class="flyout__list-item" v-for="(item, index) in items" v-if="index >= maxVisible" v-show="!isCompact || isExpanded">
                <content-link ref="focusable"  @click.native="$emit('content-link-click')" :url="item.url" class="flyout__link link" :label="item.label"></content-link>
            </li>

            <li class="flyout__list-item" v-if="flyoutToggleIsVisible">
                <content-toggle
                    aria-hidden="true"
                    class="flyout__toggle"
                    @content-toggle="toggleExpanded"
                ></content-toggle>
            </li>
        </ul>

        <template v-if="bottomItem">
            <content-link ref="bottomLink" @click.native="$emit('content-link-click')" :url="bottomItem.url" class="link flyout__link--cta-mini" :label="bottomItem.label"></content-link>
        </template>
    </li>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { NavigationItem } from '@ultimaker/ultimaker.com-model-definitions/dist/molecules/navigation/NavigationItem';

    export default Vue.component('FlyoutSection', {
        props: {
            label: {
                type: String,
                required: true,
            },
            items: {
                type: Array,
                required: false,
            },
            bottomItem: {
                type: Object,
                required: false,
            },
            isCompact: {
                type: Boolean,
                required: false,
            },
            maxVisible: {
                type: Number,
                required: false,
                default: 3,
            },
            maxItemsCol: {
                type: Number,
                required: false,
                default: 6,
            },
            itemId: {
                type: String,
                required: false,
                default: `flyout_title_${Math.floor((Math.random() * 10000))}`,
            },
        },
        data(): any {
            return {
                isExpanded: false,
                focusIndex: null,
                columnClassDouble: 'flyout__section--2-columns',
                columnClassTriple: 'flyout__section--3-columns',
            }
        },
        computed: {
            hasItems(): NavigationItem[] | undefined {
                return this.items;
            },
            focusableItems(): HTMLElement[] {
                const links = Array.isArray(this.$refs.firstFocusableLinks) ? this.$refs.firstFocusableLinks : [this.$refs.firstFocusableLinks];
                const otherFocusable = this.$refs.focusable;

                if (otherFocusable) {
                    if (Array.isArray(otherFocusable)) {
                        links.push(...otherFocusable);
                    } else {
                        links.push(otherFocusable);
                    }
                }

                if (this.$refs.bottomLink) {
                    links.push(this.$refs.bottomLink);
                }

                return links;
            },
            moreThanMaxItems(): boolean {
                if (!this.items || !this.maxItemsCol) return false;
                return this.items.length > this.maxItemsCol;
            },
            lessThanDoubleMaxItems(): boolean {
                if (!this.items || !this.maxItemsCol) return false;
                return this.items.length <= this.maxItemsCol * 2;
            },
            moreThanDoubleMaxItems(): boolean {
                if (!this.items || !this.maxItemsCol) return false;
                return this.items.length > this.maxItemsCol * 2;
            },
            sectionClass(): string {
                if (this.hasItems && this.moreThanMaxItems && this.lessThanDoubleMaxItems) {
                    return this.columnClassDouble;
                }

                if (this.hasItems && this.moreThanDoubleMaxItems) {
                    return this.columnClassTriple;
                }

                return '';
            },
            flyoutToggleIsVisible(): boolean {
                if (!this.items || !this.maxVisible) return false;
                return this.isCompact && this.items.length > this.maxVisible;
            }
        },
        watch: {
            focusIndex(newVal): void {
                const focusComponent = this.focusableItems[newVal];

                if (typeof focusComponent === 'undefined') {
                    return;
                }

                // @ts-ignore
                const focusElement = focusComponent.$el || focusComponent;

                if (focusElement.focus) {
                    focusElement.focus();
                }
            }
        },
        methods: {
            toggleExpanded(): void {
                this.isExpanded = !this.isExpanded;
            },
            selectFirstLink(): void {
                this.focusIndex = 0;
            },
            selectLastLink(): void {
                this.focusIndex = this.focusIndex === null ? this.focusableItems.length - 1 : this.focusIndex - 1;
            },
            selectNextLink(): boolean {
                if (this.focusIndex === null) return false;
                if (this.focusIndex >= this.focusableItems.length - 1) {
                    return false;
                }
                this.focusIndex = this.focusIndex + 1;

                return true;
            },
            selectPrevLink(): boolean {
                if (this.focusIndex === null) return false;
                if (this.focusIndex <= 0) {
                    return false;
                }
                this.focusIndex = this.focusIndex - 1;

                return true;
            },
            setFocusIndex(index): void {
                if (index <= 0) {
                    this.focusIndex = 0;
                } else if (index >= this.focusableItems.length) {
                    this.focusIndex = this.focusableItems.length - 1;
                } else {
                    this.focusIndex = index;
                }
            },
            reset(): void {
                this.focusIndex = null;
            }
        }
    })

</script>
