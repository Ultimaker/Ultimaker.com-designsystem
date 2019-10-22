import { Vue, Component } from 'vue-property-decorator';
import WithRender from './modal.vue.html';

@WithRender
@Component({
    name: 'Modal',
})

export class Modal extends Vue {
    $refs!: {
        modal: HTMLElement;
        overlay: HTMLElement;
        close: HTMLElement;
    };

    created() {
        document.body.classList.add('disable-scroll');
        window.addEventListener('keyup', this.closeModal);
    }

    beforeDestroy() {
        document.body.classList.remove('disable-scroll');
        window.removeEventListener('keyup', this.closeModal);
    }

    closeModal(e) {
        if (e.type === 'keyup' && e.key !== 'Esc' && e.key !== 'Escape') {
            return;
        }
        this.$emit('close');
    }
}
