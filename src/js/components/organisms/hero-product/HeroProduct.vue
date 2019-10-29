<template>
    <article class="hero hero--product organism">
        <section class="container hero__container">
            <div class="flexgrid flexgrid--gutter flexgrid--column-reversed flexgrid--mobile-xl-row">

                <div class="flexgrid__cell--xs-6">
                    <div class="hero__description">
                        <header-block class="hero__header header-block--hero">
                            <HeroHeading :title="title" :subtitle="subtitle" />
                        </header-block>
                        <p class="hero__intro copy--intro">{{ description }}</p>

                        <div class="hero__products" v-if="products">
                            <template v-for="product in products">
                                <product :class="productsClass" v-bind="product" />
                            </template>
                        </div>

                        <cta-block mod="hero" :ctas="ctas.ctas" v-if="ctas" styleContentButton="button button--primary" block="hero" />

                        <ul class="hero__linklist" v-if="linkList">
                            <template v-for="link in linkList">
                                <li class="hero__linklist-item">
                                    <ContentLink class="link hero__linklist-link" v-bind="link" :label="link.label" />
                                </li>
                            </template>
                        </ul>
                    </div>
                </div>

                <div class="flexgrid__cell--xs-6">
                    <div class="hero__image">
                        <template v-if="image">
                            <c-image v-bind="image" keep-in-view></c-image>
                        </template>
                    </div>
                </div>
            </div>
        </section>
    </article>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.component('HeroProduct', {
        props: {
            title: {
                type: String,
                required: true,
            },
            subtitle: {
                type: String,
                required: false,
            },
            description: {
                type: String,
                required: true,
            },
            image: {
                type: Object,
                required: false,
            },
            ctas: {
                type: Object,
                required: false,
            },
            products: {
                type: Array,
                required: false,
            },
            linkList: {
                type: Array,
                required: false,
            }
        },
        computed: {
            productsClass(): string {
                return `hero__products-item hero__products-item--${this.products.length > 1 ? 'multiple' : 'single'}`;
            }
        }
    });
</script>
