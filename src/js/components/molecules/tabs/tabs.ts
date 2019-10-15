import BrowserCapabilities from 'utils/browser-capabilities';
import Defaults from 'constants/defaults';
import ViewportUtil from 'utils/viewport';
import WithRender from './tabs.vue.html';
import { TabsProps } from './tabs.models';
import { TweenLite, Power3, Power2 } from 'gsap';
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';

@WithRender
@Component({
    name: 'Tabs',
})
export class Tabs extends Vue implements TabsProps {
    @Prop({ type: Array, required: true }) public tabs!: TabsProps['tabs'];
    @Prop({ type: Number, default: 0 }) public defaultTab!: TabsProps['defaultTab'];
    @Prop({ type: Boolean, required: true }) public sequenced!: TabsProps['sequenced'];

    private activeTab: number = 0;
    private correction: number = 0;
    private viewportUtil = new ViewportUtil();

    public $refs: any;

    @Watch('activeTab')
    private setActiveTab(): void {
        const tabs = this.$refs.tab;

        if (!tabs) {
            return;
        }

        tabs[this.activeTab].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });

        setTimeout((): void => this.positionIndicator(), 50);
    }

    private getLinkClassList = (index): object => ({
        'tabs__list_link--active': index === this.activeTab,
    });

    private positionIndicator(): void {
        const tabs = this.$refs.tab;

        if (!tabs) {
            return;
        }

        const { offsetLeft, offsetWidth } = tabs[this.activeTab];

        TweenLite.to(this.$refs.indicator, Defaults.defaultDuration, {
            x: offsetLeft - this.correction,
            width: offsetWidth,
            ease: Power3.easeOut,
        });
    }

    private scrollCorrection(): void {
        const { tabList } = this.$refs;
        const tabs = this.$refs.tab;

        this.correction = tabList.scrollLeft;

        if (!tabs) {
            return;
        }

        const { offsetLeft, offsetWidth } = tabs[this.activeTab];

        TweenLite.to(this.$refs.indicator, 0, {
            x: offsetLeft - this.correction,
            width: offsetWidth,
            ease: Power2.easeOut,
        });
    }

    private mounted(): void {
        this.activeTab = this.defaultTab;
        this.viewportUtil.addResizeHandler(this.positionIndicator);
        this.$refs.tabList.addEventListener('scroll', this.scrollCorrection);
        this.setActiveTab();

        if (BrowserCapabilities.supportsTouch) {
            this.$refs.tabList.addEventListener('touchmove', this.scrollCorrection);
        }
    }

    private beforeDestroy = (): void => this.viewportUtil.removeResizeHandler(this.positionIndicator);
}
