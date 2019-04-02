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

    activeSelector: string = '.active';

    get isTouch() {
        return BrowserCapabilities.supportsTouch;
    }

    mounted() {
        const subnav  = this.$refs.subNav;
        if (subnav) {
            const activeItem = subnav.querySelector(this.activeSelector);

            if (activeItem) {
                activeItem.scrollIntoView({ inline: 'center' });
            }
        }
    }
}
