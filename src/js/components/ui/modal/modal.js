import Vue from 'vue';
import {TweenLite, TimelineLite} from 'gsap';
import {Power2} from 'gsap';

/* eslint-disable no-invalid-this */

export default Vue.component('modal', {
    name: 'modal',
    template: require('./modal.html'),
    data: () => ({
        iframeLoaded: false
    }),
    created() {
        window.addEventListener('keyup', this.closeModal);
    },
    beforeDestroy() {
        window.removeEventListener('keyup', this.closeModal);
    },
    methods: {
        closeModal(e) {
            if (e.type === 'keyup' && e.key !== 'Esc' && e.key !== 'Escape') {
                return;
            }
            this.$emit('close');
        },
        showContent() {
            this.iframeLoaded = true;
            TweenLite.to(this.$refs.modal, 0.1, {opacity: 1, ease: Power2.easeOut});
            TweenLite.to(this.$refs.modal, 0.3, {scale: 1, ease: Power2.easeOut});
        },
        enter(el, done) {
            const iframe = this.$refs.modal.querySelector('iframe'),
                timeLine = new TimelineLite();

            TweenLite.set(this.$refs.modal, {opacity: 0, scale: 0.6});
            timeLine.fromTo(this.$refs.overlay, 0.2, {opacity: 0}, {opacity: 0.8});
            timeLine.fromTo(this.$refs.close, 0.2, {opacity: 0}, {opacity: 1}, 0);

            if (iframe) {
                const loadTimeout = setTimeout(() => {
                    this.showContent();
                }, 1500);

                iframe.addEventListener('load', () => {
                    if (!this.iframeLoaded) {
                        clearTimeout(loadTimeout);
                        this.showContent();
                    }
                });
            } else {
                timeLine.to(this.$refs.modal, 0.1, {opacity: 1, ease: Power2.easeOut}, 0.2);
                timeLine.to(this.$refs.modal, 0.3, {scale: 1, ease: Power2.easeOut}, 0.2);
            }

            timeLine.call(done);
        },
        leave(el, done) {
            const timeLine = new TimelineLite();

            timeLine.to(this.$refs.modal, 0.2, {opacity: 0, scale: 0.6, ease: Power2.easeIn});
            timeLine.fromTo([this.$refs.overlay, this.$refs.close], 0.4, {opacity: 1}, {opacity: 0}, 0);
            timeLine.call(done);
        }
    }
});
