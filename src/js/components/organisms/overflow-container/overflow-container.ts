import { Vue, Component, Prop } from 'vue-property-decorator';

import BrowserCapabilities from 'utils/browser-capabilities';
import WithRender from './overflow-container.vue.html';

@WithRender
@Component({
    name: 'OverflowContainer',
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
                setTimeout(() => activeItem.scrollIntoView({ inline: 'center' }), this.scrollTimeout);
            }
        }
    }
}
