<template>
    <component :class="classObject"
               @click="triggerEventClick"
               v-bind="linkProps">
        <icon v-if="icon" :icon-name="icon" />
        <span v-if="!slots" class="link__underline">
            {{label}}
        </span>
        <slot v-else ></slot>
    </component>
</template>

<script lang="ts">
import Vue from 'vue';
import Events from '../../../constants/events';

const absoluteUrlRegex = /^(http(s)?):\/\//;
const domainRegex = /(http(s)?):\/\/(www.)?ultimaker\.com/;

export default Vue.component('BaseLink', {
    props: {
        type: {
            type: String,
            required: false,
        },
        block: {
            type: String,
            required: false,
        },
        mod: {
            type: String,
            required: false,
        },
        icon: {
            type: String,
            required: false,
        },
        url: {
            type: String,
            required: false,
        },
        label: {
            type: String,
            required: false,
        },
        clickEvent: {
            type: Object,
            required: false,
        },
    },
    computed: {
        urlTarget: function(): string {
            if (this.url) {
                return this.url.match(domainRegex) ? '_self' : '_blank';
            }
            return '';
        },
        slots: function(): any {
            return this.$slots &&
                this.$slots.default &&
                this.$slots.default.length;
        },
        classObject: function(): object {
            const classes = {};

            if (this.block !== '' && typeof this.block === 'string') {
                classes[`${this.block}__link`] = true;
            }
            if (this.mod !== '' && typeof this.mod === 'string') {
                this.mod.split(' ').forEach((mod) => {
                    classes[`link--${mod}`] = true;
                });
            }
            if (this.icon !== '' && typeof this.icon === 'string') {
                classes['link--icon'] = true;
            }

            return classes;
        },
        linkProps: function(): object {
            return {
                is: 'a',
                href: this.url,
                target: this.urlTarget,
                rel: 'noopener',
            };
        },
        clickEventData: function(): object | null {
            if (this.clickEvent) {
                return {
                    dataType: this.clickEvent.name,
                    data: {
                        ...this.clickEvent.data,
                        pageSlug: this.$route.fullPath,
                        ctaUrlTarget: this.urlTarget,
                    },
                };
            }
            return null;
        },
    },
    methods: {
        triggerEventClick: function(): void {
            if (this.clickEvent) {
                this.$emitPublic(Events.gtm.click, this.clickEventData);
            }
        }
    }
})

</script>
