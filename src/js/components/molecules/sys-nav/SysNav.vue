<template>
    <nav class="sys-nav" aria-label="quick access">
        <ul class="sys-nav__list" role="presentation">
            <li class="sys-nav__item">
                <base-link v-if="orderNowLink" :url="orderNowLink" class="sys-nav__link">
                    <icon class="sys-nav__icon" :icon-name="orderNowIcon"></icon>
                    <span class="sys-nav__label">{{ orderNowLabel }}</span>
                </base-link>
            </li>
            <li class="sys-nav__item">
                <a class="sys-nav__link"
                   @click="openSearch"
                   @keyup.enter="openSearch"
                   role="button" tabindex="0">
                    <icon class="sys-nav__icon" :icon-name="searchIcon"></icon>
                    <span class="sys-nav__label">{{ searchLabel }}</span>
                </a>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.component('SysNav', {
        props: {
            orderNowIcon: {
                type: String,
                default: 'store',
            },
            orderNowLink: {
                type: String,
                required: true,
            },
            orderNowLabel: {
                type: String,
                required: true,
            },
            searchIcon: {
                type: String,
                default: 'search',
            },
            searchLabel: {
                type: String,
                required: true,
            },
        },
        methods: {
            openSearch(): void {
                this.$emit('open-search');
            }
        },
    });
</script>
