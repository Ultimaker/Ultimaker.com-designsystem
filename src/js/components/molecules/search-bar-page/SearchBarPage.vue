<template>
    <form
        @submit.prevent="handleSubmit"
        accept-charset="utf-8"
        action="/search"
        class="search-bar-page"
        method="get"
    >
        <label>
            <span class="search-bar-page__label">{{ label }}</span>
            <button
                :disabled="isLoading"
                class="search-bar-page__button"
            >
                <icon :icon-name="'search'"/>
            </button
            >
            <input
                :disabled="isLoading"
                :name="searchFieldName"
                :placeholder="placeholder"
                v-model="q"
                autocapitalize="off"
                autocomplete="off"
                autocorrect="off"
                class="search-bar-page__input"
                maxlength="512"
                spellcheck="false"
                type="text"
            >
        </label>
    </form>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.component('SearchBarPage', {
        props: {
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
                required: true,
            },
            placeholder: {
                type: String,
                required: true,
            },
            searchFieldName: {
                type: String,
                default: 'search',
            },
            terms: {
                type: String,
                required: true,
            },
        },
        data() {
            return {
                q: '',
            }
        },
        methods: {
            handleSubmit(): void {
                if (!this.q.length || this.q === this.terms) {
                    return;
                }

                this.$emit(this.eventSubmitSearch, this.q);
            },
        },
        mounted(): void {
            this.q = this.terms;
        },
    });
</script>
