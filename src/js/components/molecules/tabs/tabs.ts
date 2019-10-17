import { Vue, Component, Prop, Watch } from 'vue-property-decorator';

import BrowserCapabilities from 'utils/browser-capabilities';
import ViewportUtil from 'utils/viewport';
import { TweenLite, Power3, Power2 } from 'gsap';
import Defaults from 'constants/defaults';

import { TabsProps } from './tabs.models';
import WithRender from './tabs.vue.html';

@WithRender
@Component({
    name: 'Tabs',
})

export class Tabs extends Vue implements TabsProps {
    @Prop({ type: Array, required: true }) tabs!: TabsProps['tabs'];
    @Prop({ type: Number, default: 0 }) defaultTab!: TabsProps['defaultTab'];
    @Prop({ type: Boolean, required: true }) sequenced!: TabsProps['sequenced'];

    private activeTab: number = 0;
    private viewportUtil = new ViewportUtil();

    private correction: number = 0;

    $refs: any;

    @Watch('activeTab')
    setActiveTab() {
        const tabs = this.$refs.tab;

        if (!tabs) { return; }

        setTimeout(() => this.positionIndicator(), 50);
    }

    getLinkClassList(index) {
        return {
            'tabs__list_link--active': index === this.activeTab,
        };
    }

    async positionIndicator() {
        const tabs = this.$refs.tab;

        if (!tabs) { return; }
        const { offsetLeft, offsetWidth } = tabs[this.activeTab];

        TweenLite.to(this.$refs.indicator, Defaults.defaultDuration, {
            x: offsetLeft - this.correction,
            width: offsetWidth,
            ease: Power3.easeOut,
        });
    }

    scrollCorrection() {
        const { tabList } = this.$refs;

        const tabs = this.$refs.tab;
        this.correction = tabList.scrollLeft;

        if (!tabs) { return; }
        const { offsetLeft, offsetWidth } = tabs[this.activeTab];

        TweenLite.to(this.$refs.indicator, 0, {
            x: offsetLeft - this.correction,
            width: offsetWidth,
            ease: Power2.easeOut,
        });
    }

    mounted() {
        this.activeTab = this.defaultTab;
        this.viewportUtil.addResizeHandler(this.positionIndicator);

        this.$refs.tabList.addEventListener('scroll', this.scrollCorrection);
        this.setActiveTab();

        if (BrowserCapabilities.supportsTouch) {
            this.$refs.tabList.addEventListener('touchmove', this.scrollCorrection);
        }
    }

    beforeDestroy() {
        this.viewportUtil.removeResizeHandler(this.positionIndicator);
    }
}
