import { Vue, Component } from 'vue-property-decorator';
import { TweenLite, TimelineLite, Power2 } from 'gsap';
import WithRender from './modal.vue.html';

@WithRender
@Component({
    name: 'modal',
})

export default class Modal extends Vue {
    iframeLoaded: boolean = false;
    $refs!: {
        modal: HTMLElement,
        overlay: HTMLElement,
        close: HTMLElement,
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
    showContent() {
        this.iframeLoaded = true;
        TweenLite.to(this.$refs.modal, 0.1, { css: { opacity: 1 }, ease: Power2.easeOut });
        TweenLite.to(this.$refs.modal, 0.3, { css: { scale: 1 }, ease: Power2.easeOut });
    }

    enter(el, done) {
        const iframe = this.$refs.modal.querySelector('iframe');
        const timeLine = new TimelineLite();

        TweenLite.set(this.$refs.modal, { css: { opacity: 0, scale: 0.6 } });
        timeLine.fromTo(this.$refs.overlay, 0.2, { css: { opacity: 0 } }, { css: { opacity: 0.8 } });
        timeLine.fromTo(this.$refs.close, 0.2, { css: { opacity: 0 } }, { css: { opacity: 1 } }, 0);

        if (iframe) {
            const loadTimeout = setTimeout(
                () => {
                    this.showContent();
                },
                1500,
            );

            iframe.addEventListener('load', () => {
                if (!this.iframeLoaded) {
                    clearTimeout(loadTimeout);
                    this.showContent();
                }
            });
        } else {
            timeLine.to(this.$refs.modal, 0.1, { opacity: 1, ease: Power2.easeOut }, 0.2);
            timeLine.to(this.$refs.modal, 0.3, { scale: 1, ease: Power2.easeOut }, 0.2);
        }

        timeLine.call(done);
    }

    leave(el, done) {
        const timeLine = new TimelineLite();

        timeLine.to(this.$refs.modal, 0.2, { opacity: 0, scale: 0.6, ease: Power2.easeIn });
        timeLine.fromTo([this.$refs.overlay, this.$refs.close], 0.4, { opacity: 1 }, { opacity: 0 }, 0);
        timeLine.call(done);
    }
}
