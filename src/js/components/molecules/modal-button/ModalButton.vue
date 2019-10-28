<template>
    <div class="modal-button__container">
        <button class="button" type="button" @click="triggerClick">
            {{label}}
        </button>
        <portal to="modals">
            <modal class="modal--wizard" v-if="modalVisible" @close="toggleModalVisible">
                <component :is="modal.type" v-bind="modal" />
            </modal>
        </portal>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.component('ModalButton', {
        props: {
            clickEvent: {
                type: Object,
                required: false,
            },
            label: {
                type: String,
                required: true,
            },
            modal: {
                type: Object,
                required: true,
            }
        },
        data() {
            return {
                modalVisible: false,
            }
        },
        methods: {
            toggleModalVisible(): void {
                this.modalVisible = !this.modalVisible;
            },
            triggerClick(): void {
                this.toggleModalVisible();
            }
        },
    });
</script>
