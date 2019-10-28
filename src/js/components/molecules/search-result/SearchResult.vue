<template>
    <div class="search-result" :class="{ 'search-result--focus': focused }">
        <h3 class="search-result__title">
            <a
                :href="link"
                v-html="computedTitle"
                @focus="focused = !focused"
                @blur="focused = !focused"
                class="search-result__link"
            />
        </h3>
        <p
            v-html="computedSnippet"
            class="search-result__snippet"
        />
        <p class="search-result__url">
            {{ formattedUrl }}
        </p>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import mark from './helpers/mark';

    export default Vue.component('SearchResult', {
        props: {
            terms: {
                type: String,
                required: true,
            },
            title: {
                type: String,
                required: true,
            },
            link: {
                type: String,
                required: true,
            },
            snippet: {
                type: String,
                required: true,
            },
            formattedUrl: {
                type: String,
                required: true,
            },
        },
        data() {
            return {
                focused: false,
            }
        },
        computed: {
            computedTitle(): string {
                return mark(this.title, this.terms);
            },
            computedSnippet(): string {
                return mark(this.snippet, this.terms);
            }
        },
    });
</script>
