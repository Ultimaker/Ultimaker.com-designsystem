import { Vue, Component, Prop } from 'vue-property-decorator';

import BrowserCapabilities from 'utils/browser-capabilities';

@Component({
    name: 'OverflowContainer',
    template: require('./overflow-container.html'),
})

export default class OverflowContainer extends Vue {
    @Prop({ type: Array, required: true }) items!: object[];

    $nextTick;
    $refs: any;

    activeSelector: string = '.exact-active';
    scrollTimeout: number = 300;
    isTouch: boolean = false;

    mounted() {
        const subnav  = this.$refs.subNav;
        this.isTouch = BrowserCapabilities.supportsTouch;

        if (subnav) {
            const activeItem = subnav.querySelector(this.activeSelector);

            if (activeItem && this.isTouch) {
                setTimeout(() => {
                    activeItem.scrollIntoView({ behavior: 'smooth', inline: 'center' });
                }, this.scrollTimeout);
            }
        }
    }
}
