import { Vue, Component, Prop } from 'vue-property-decorator';

import BrowserCapabilities from 'utils/browser-capabilities';
import WithRender from './subnavigation.vue.html';

import { SubnavigationProps } from './subnavigation.models';

@WithRender
@Component({
    name: 'Subnavigation',
})

export class Subnavigation extends Vue implements SubnavigationProps {
    @Prop({ type: Array, required: true }) items!: SubnavigationProps['items'];

    $nextTick;
    $refs: any;

    activeSelector: string = '.exact-active';
    scrollTimeout: number = 300;
    isTouch: boolean = false;

    mounted() {
        const subnav = this.$refs.subNav;
        this.isTouch = BrowserCapabilities.supportsTouch;

        if (subnav) {
            const activeItem = subnav.querySelector(this.activeSelector);

            if (activeItem && this.isTouch) {
                setTimeout(() => activeItem.scrollIntoView({ inline: 'center' }), this.scrollTimeout);
            }
        }
    }
}
