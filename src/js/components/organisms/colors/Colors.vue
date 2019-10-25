<template>
    <article class="organism colors">
        <div class="container">
            <header-block :title="title" :subtitle="subtitle" />

            <div class="flexgrid flexgrid--gutter flexgrid--column-reversed flexgrid--mobile-xl-row">

                <div class="flexgrid__cell--xs-6 flexgrid__cell--sm-4">
                    <div class="colors__swatches">
                        <ul class="colors__list">
                            <li class="colors__list-item"
                                v-for="(color, index) in colorList" @click="setActiveColor(index)" @keydown.space.prevent="setActiveColor(index)">
                                <color :rgb-hex="color.rgbHex" :opacity="color.opacity" :class="{'color--selected': color === activeColor }" />
                            </li>
                        </ul>

                        <cta-block :ctas="colorCtas.ctas" v-if="colorCtas.ctas" mod="baseline" />
                    </div>
                </div>

                <div class="flexgrid__cell--sm-8 flexgrid__cell--xs-6" v-if="activeColor.exampleImage">
                    <c-image class="colors__image" v-bind="activeColor.exampleImage" />
                </div>
            </div>

            <footer-block :ctas="ctas" class="footer-block--push-down"/>
        </div>
    </article>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.component('Colors', {
        props: {
            title: {
                type: String,
                required: true,
            },
            subtitle: {
                type: String,
            },
            colorCtas: {
                type: Object,
                required: true,
            },
            colorList: {
                type: Array,
                required: true,
            },
            ctas: {
                type: Object,
            },
        },
        data() {
            return {
                activeColorIndex: 0
            }
        },
        computed: {
            activeColor(): number {
                // @ts-ignore
                return this.colorList[this.activeColorIndex];
            }
        },
        methods: {
            setActiveColor(index: number): void {
                this.activeColorIndex = index;
            }
        }
    });
</script>
