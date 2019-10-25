<template>
    <footer class="footer" :lang="language">
        <div class="footer__container">
            <div class="footer__primary">
                <router-link to="/" class="branded-logo footer__branded-logo" aria-label="Ultimaker homepage">
                    <icon class="branded-logo__u" icon-name="ultimaker-u"/>
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
                <social-nav/>
                <div class="footer__locales">
                    <icon
                        icon-name="geo"
                        class="footer__locales-icon"
                    />
                    <locale-selector
                        class="footer__country-selector"
                        type="countrySelector"
                        :eventLocaleChanged="eventCountryChanged"
                        :initialIsoCode="countryCode"
                        v-bind="countrySelector"
                        v-if="showCountrySelector"
                        @is-editing="toggleSelector"
                        @[eventCountryChanged]="countryChangedHandler"
                    />
                    <span class="footer__dash" v-if="!currentlyEditing && showLanguageSelector">–</span>
                    <locale-selector
                        class="footer__language-selector"
                        type="languageSelector"
                        showSuggestions
                        :eventLocaleChanged="eventLanguageChanged"
                        :initialIsoCode="languageCode"
                        :minChar="1"
                        v-bind="localeSelector"
                        v-if="showLanguageSelector"
                        @is-editing="toggleSelector"
                        @[eventLanguageChanged]="languageChangedHandler"
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

    export default Vue.component('PageFooter', {
        props: {
            copyrightLabel: {
                type: String,
                required: true
            },
            countryCode: {
                type: String,
                required: false,
            },
            countrySelector: {
                type: Object,
                required: true,
            },
            eventCountryChanged: {
                type: String,
                required: true,
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
        data(): { currentlyEditing: string | null; } {
            return {
                currentlyEditing: null,
            };
        },
        computed: {
            showCountrySelector(): boolean {
                return !this.currentlyEditing || this.currentlyEditing === 'countrySelector';
            },
            showLanguageSelector(): boolean {
                // hacky solution
                // datasource will have the type, the default language, plus any other languages available
                if (Object.keys(this.localeSelector.datasource).length < 3) {
                    return false;
                }

                return !this.currentlyEditing || this.currentlyEditing === 'languageSelector';
            }
        },
        methods: {
            toggleSelector(type: string): void {
                this.currentlyEditing = type;
            },
            countryChangedHandler(code: string): void {
                this.$emit(this.eventCountryChanged, code);
            },
            languageChangedHandler(code: string): void {
                this.$emit(this.eventLanguageChanged, code);
            }
        }
    });
</script>
