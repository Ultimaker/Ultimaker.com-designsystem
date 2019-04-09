import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import debounce from 'lodash/debounce';

import BrowserCapabilities from 'utils/browser-capabilities';
import viewportUtil from 'utils/viewport';
import { TweenLite, Power3, Power2 } from 'gsap';
import Defaults from 'constants/defaults';

import { Tab as TabInterface } from '@ultimaker/ultimaker.com-model-definitions/dist/molecules/tab/Tab';

@Component({
    name: 'Tabs',
    template: require('./tabs.html'),
})

export default class Tabs extends Vue {
    @Prop({ type: Array, required: true }) tabs!: TabInterface[];
    @Prop({ type: Number, default: 0 }) defaultTab!: number;

    private activeTab: number = 0;
    private viewportUtil = new viewportUtil();

    private correction: number = 0;

    $refs: any;

    @Watch('activeTab')
    setActiveTab() {
        this.positionIndicator();
    }

    getLinkClassList(index) {
        return {
            'tabs__list_link--active': index === this.activeTab,
        };
    }

    positionIndicator(): void {
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
        const tabList = this.$refs.tabList;

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
        this.setActiveTab();
        this.viewportUtil.addResizeHandler(this.positionIndicator);

        this.$refs.tabList.addEventListener('scroll', this.scrollCorrection);

        if (BrowserCapabilities.supportsTouch) {
            this.$refs.tabList.addEventListener('touchmove', this.scrollCorrection);
        }
    }

    beforeDestroy() {
        this.viewportUtil.removeResizeHandler(this.positionIndicator);

        const { tabsList } = this.$refs;

        tabsList.removeEventListener('scroll', this.scrollCorrection());

        if (BrowserCapabilities.supportsTouch) {
            tabsList.removeEventListener('scroll', this.scrollCorrection());
        }
    }
}
