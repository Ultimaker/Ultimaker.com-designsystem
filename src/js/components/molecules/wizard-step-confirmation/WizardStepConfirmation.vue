<template>
    <article class="organism wizard-step-confirmation">
        <section class="container wizard-step-confirmation__container">
            <header-block :title="title" :subtitle="subtitle" />
            <div class="flexgrid">
                <div class="flexgrid__cell--xs-6 wizard-step-confirmation__grid-cell wizard-step-confirmation__image">
                    <div class="wizard-step-confirmation__image-wrapper">
                        <c-image v-if="image" v-bind="image"></c-image>
                    </div>
                </div>
                <div class="flexgrid__cell--xs-6 wizard-step-confirmation__grid-cell wizard-step-confirmation__content">
                    <h3>{{ contentTitle }}</h3>
                    <div class="content-manageble wizard-step-confirmation__body" v-html="content" />
                    <cta-block mod-content-link="wizard-step-confirmation" :ctas="ctas.ctas" v-if="ctas" />
                </div>
            </div>
        </section>
    </article>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.component('WizardStepConfirmation', {
        props: {
            title: {
                type: String,
                required: true,
            },
            subtitle: {
                type: String,
                required: false,
            },
            contentTitle: {
                type: String,
                required: true,
            },
            content: {
                type: String,
                required: true,
            },
            image: {
                type: Object,
                required: true,
            },
            ctas: {
                type: Object,
                required: false,
            },
        },
    });
</script>
