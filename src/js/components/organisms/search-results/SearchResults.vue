<template>
    <section class="search-results">
        <search-bar-page
            @[eventSubmitSearch]="submitSearch"
            :eventSubmitSearch="eventSubmitSearch"
            :isLoading="isLoading"
            :label="label"
            :placeholder="placeholder"
            :terms="terms"
        />
        <h1 class="search-results__title" v-if="terms.length && !isLoading">
            {{ computedTitle }}
        </h1>
        <ul
            class="search-results__list"
            v-if="searchResults.length"
        >
            <li
                v-for="(searchResult, key) in searchResults"
                :key="key"
                class="search-results__list-item"
            >
                <search-result
                    v-bind="searchResult"
                    :terms="terms"
                />
            </li>
        </ul>
        <footer
            v-if="showLoadMore"
            class="search-results__footer"
        >
            <button
                @click="loadMore"
                :disabled="isLoading"
                class="button button--secondary"
            >
                Load more
            </button>
        </footer>
    </section>

</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.component('SearchResults', {
        props: {
            eventLoadMore: {
                type: String,
                required: true
            },
            eventSubmitSearch: {
                type: String,
                required: true,
            },
            isLoading: {
                type: Boolean,
                required: true,
            },
            label: {
                type: String,
            },
            placeholder: {
                type: String,
            },
            searchResults: {
                type: Array,
                required: true,
            },
            showLoadMore: {
                type: Boolean,
                required: true,
            },
            terms: {
                type: String,
                required: true,
            },
        },
        computed: {
            computedTitle(): string {
                return this.searchResults.length ? `Search results for: “${this.terms}”` : `No results for “${this.terms}”`;
            }
        },
        methods: {
            loadMore(): void {
                this.$emit(this.eventLoadMore);
            },
            submitSearch(payload): void {
                this.$emit(this.eventSubmitSearch, payload);
            }
        }
    });
</script>
