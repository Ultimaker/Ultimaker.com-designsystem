<template>
    <form class="wizard-step-download-list" target="_blank" method="get" :action="file" @submit="handleSubmit">
        <header-block class="header-block--wizard" :title="title" :subtitle="subtitle" />
        <p class="wizard-step-download-list__description" v-if="description">{{ description }}</p>
        <ul class="wizard-step-download-list__items flexgrid flexgrid--justify-space-between flexgrid--mobile-xl-row" v-if="items">
            <li class="wizard-step-download-list__item flexgrid__cell--sm-4" v-for="(item, index) in items">
                <card-download key="index"
                               v-bind="item"
                               :index="index"
                               :selected="selectedItem === index"
                               :name="name"
                               :setSelectedItem="setSelectedItem" />
            </li>
        </ul>
        <button class="wizard-step-download-list__button button" v-if="submitButton">
            {{ submitButton.label }}
        </button>
    </form>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.component('WizardStepDownloadList', {
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
                required: false,
            },
            items: {
                type: Array,
                required: true,
            },
            submitButton: {
                type: Object,
                required: true,
            },
        },
        data() {
            return {
                selected: 0,
                name: 'download',
            }
        },
        computed: {
            selectedItem(): number {
                return this.selected;
            },
            file(): string {
                // @ts-ignore
                return this.items[this.selectedItem].file;
            },
        },
        methods: {
            setSelectedItem(index): void {
                this.selected = index;
            },
            handleSubmit(): void {
                // @ts-ignore
                if (window.$u && window.$u.store && window.$u.store.pushSetting) {
                    // @ts-ignore
                    window.$u.store.pushSetting('robot', true);
                }

                // REMARK: prevents form submission canceled because the form is not connected
                setTimeout(() => {
                    this.afterSubmit();
                });
            },
            afterSubmit(): void {
                this.$emit('step-complete');
            }
        }
    });
</script>
