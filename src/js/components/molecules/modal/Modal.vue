<template>
    <div class="modal" @click.prevent.stop="closeModal">
        <div ref="overlay" class="modal__overlay"></div>
        <icon-button ref="close" icon-name="close" class="modal__close"/>
        <div ref="modal" class="modal__content" @click.stop>
            <div class="modal__header">
                <slot name="header" />
            </div>
            <slot />
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.component('Modal', {
        methods: {
            closeModal(e) {
                if (e.type === 'keyup' && e.key !== 'Esc' && e.key !== 'Escape') {
                    return;
                }
                this.$emit('close');
            }
        },
        created() {
            document.body.classList.add('disable-scroll');
            window.addEventListener('keyup', this.closeModal);
        },
        beforeDestroy() {
            document.body.classList.remove('disable-scroll');
            window.removeEventListener('keyup', this.closeModal);
        }
    });
</script>
