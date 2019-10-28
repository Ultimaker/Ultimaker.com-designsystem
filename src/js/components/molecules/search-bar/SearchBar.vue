<template>
    <form :action="action" class="search-bar" ref="search-form" method="get" @submit.prevent="handleSubmit">
        <div role="search">
            <div class="search-bar__inputholder">
                <label for="search-bar__input" class="search-bar__label">{{ label }}</label>
                <input
                    :placeholder="placeholder"
                    @blur="onBlur"
                    @keyup.esc="close"
                    v-model="searchValue"
                    autocapitalize="off"
                    autocomplete="off"
                    autocorrect="off"
                    class="search-bar__input"
                    id="search-bar__input"
                    name="search"
                    ref="search-bar__input"
                >
            </div>
            <icon-button
                @click="handleSubmit"
                button-class="icon-button icon-button--large search-bar__button"
                button-aria-label="Search"
                icon-name="search"
            ></icon-button>
            <icon-button
                @click="close"
                button-class="icon-button icon-button--large search-bar__close-button"
                button-aria-label="Close search"
                icon-name="close"
            ></icon-button>
        </div>
    </form>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.component('SearchBar', {
        props: {
            label: {
                type: String,
                required: true,
            },
            languageCode: {
                type: String,
                required: false,
            },
            placeholder: {
                type: String,
                required: true,
            },
            openState: {
                type: Boolean,
                required: false,
                default: false,
            },
        },
        data() {
            return {
                searchValue: '',
            }
        },
        computed: {
            action(): string {
                let prefix = '';

                if (this.languageCode && this.languageCode !== 'en') {
                    prefix = `/${this.languageCode}`;
                }

                return `${prefix}/search`;
            }
        },
        methods: {
            close(): void {
                if (this.openState) {
                    this.$emit('close');
                }
            },
            handleSubmit(): void {
                if (!this.searchValue.length) {
                    return;
                }

                this.close();
                window.location.href = `${this.action}?search=${encodeURIComponent(this.searchValue)}`;
            },
            onBlur(): void {
                if (this.searchValue === '') {
                    this.close();
                }
            },
            focusInput(): void {
                (this.$refs['search-bar__input'] as HTMLInputElement).focus();
            }
        },
    });
</script>
