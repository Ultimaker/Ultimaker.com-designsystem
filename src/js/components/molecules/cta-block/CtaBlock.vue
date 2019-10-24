<template>
    <div v-if="ctas.length" class="cta-block" :class="classMod">
        <component
            :is="cta.type"
            v-for="(cta, index) in ctas"
            v-bind="cta"
            :key="index"
            :class="classObject(cta.type)"
            :label="cta.label"
            :mod="modifier(cta.type)"
        />
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.component('CtaBlock', {
        props: {
            ctas: {
                type: Array,
                required: true,
            },
            mod: {
                type: String,
            },
            styleContentButton: {
                type: String,
            },
            styleContentLink: {
                type: String,
            },
            modContentLink: {
                type: String,
            },
            modContentButton: {
                type: String,
            },
        },
        data() {
            return {
                modifiers: {
                    ContentButton: this.modContentButton || 'primary',
                    ContentLink: this.modContentLink || 'large',
                },
                classes: {
                    ContentButton: this.styleContentButton || 'button',
                    ContentLink: this.styleContentLink || 'link',
                }
            }
        },
        computed: {
            classMod() {
                const classes = {};

                if (this.mod !== '' && typeof this.mod === 'string') {
                    this.mod.split(' ').forEach((mod) => {
                        classes[`cta-block--${mod}`] = true;
                    });
                }

                return classes;
            }
        },
        methods: {
            modifier(type: string) {
                return this.modifiers[type];
            },
            classObject(type: string) {
                return `${this.classes[type]} cta-link`;
            },
        },
    });
</script>
