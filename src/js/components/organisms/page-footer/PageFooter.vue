<template>
    <footer class="footer" :lang="language">
        <div class="footer__container">
            <div class="footer__primary">
                <router-link
                    to="/"
                    class="branded-logo footer__branded-logo"
                    aria-label="Ultimaker homepage"
                >
                    <icon class="branded-logo__u" icon-name="ultimaker-u" />
                </router-link>
                <nav class="footer__navigation" v-if="navigation && navigation.length">
                    <footer-navigation-category
                        :key="index"
                        v-bind="navigationItem"
                        v-for="(navigationItem, index) in navigation"
                    />
                </nav>
            </div>

            <div class="footer__secondary">
                <social-nav />
                <div class="footer__locales">
                    <icon icon-name="geo" class="footer__locales-icon" />
                    <select-box
                        :disable-select-box="disableLanguageSelector"
                        :initialItemValue="languageCode"
                        :openDirectionUp="true"
                        v-bind="localeSelector"
                        name="language-selector"
                    />
                </div>
            </div>

            <div class="footer__tertiary">
                <nav class="footer__legal" v-if="legalNavigation && legalNavigation.length">
                    <footer-navigation-category
                        :items="legalNavigation"
                        :label="copyrightLabel"
                        class="footer__legal__column"
                    />
                </nav>
            </div>
        </div>
    </footer>
</template>

<script lang="ts">
import Vue from 'vue';
import { SelectBoxEventPayloadInterface } from 'components/molecules/select-box/select-box-event-payload-interface';

export default Vue.component('PageFooter', {
    props: {
        copyrightLabel: {
            type: String,
            required: true
        },

        disableLanguageSelector: {
            default: false,
            required: false,
            type: Boolean,
        },

        eventLanguageChanged: {
            type: String,
            required: true
        },

        languageCode: {
            type: String,
            required: true,
        },

        localeSelector: {
            type: Object,
            required: true,
        },

        legalNavigation: {
            type: Array,
            required: true,
        },

        language: {
            type: String,
            required: false,
        },

        navigation: {
            type: Array,
            required: true,
        },
    },

    beforeDestroy() {
        this.$offPublic('select-box-input');
    },

    mounted() {
        this.$onPublic('select-box-input', (payload: SelectBoxEventPayloadInterface): void => {
            if(payload.name !== 'language-selector') {
                return;
            }

            this.languageChangedHandler(payload.value);
        })
    },

    methods: {
        languageChangedHandler(code: string): void {
            this.$emit(this.eventLanguageChanged, code);
        }
    }
});
</script>
