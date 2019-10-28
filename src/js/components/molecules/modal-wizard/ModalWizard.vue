<template>
    <section class="modal-wizard">
        <template v-if="steps">
            <div class="modal-wizard__step" v-for="(step, index) in steps">
                <component :is="step.type" v-bind="step" v-if="index === activeStep" @step-complete="showNextStep" />
            </div>
        </template>
    </section>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.component('ModalWizard', {
        props: {
            title: {
                type: String,
                required: true,
            },
            steps: {
                type: Array,
                required: true,
            },
        },
        data() {
            return {
                activeStep: 0,
            }
        },
        methods: {
            showNextStep() {
                if (this.steps && this.steps.length > this.activeStep + 1) {
                    this.activeStep += 1;
                }
            },
        },
    });
</script>
