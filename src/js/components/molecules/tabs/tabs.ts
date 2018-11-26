import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import { ITabs } from './tabs-models';
import { ITab } from '../tab/tab-models';
import viewportUtil from 'utils/viewport';
import { TweenLite, Power3, Power0 } from 'gsap';
import Defaults from 'constants/defaults';

@Component({
    name: 'tabs',
    template: require('./tabs.html'),
})

export default class Tabs extends Vue implements ITabs {
    @Prop({ type: Number, default: 0 })
    defaultTab!: number;

    private tabs: ITab[] = [];
    private activeTab: number = 0;
    private viewportUtil = new viewportUtil();

    @Watch('activeTab')
    setActiveTab() {
        this.tabs.forEach((tab, index) => {
            tab.setVisible(this.activeTab === index);
        });
        this.positionIndicator();
    }

    getLinkClassList(index) {
        return {
            'tabs__list_link--active': index === this.activeTab,
        };
    }

    positionIndicator() {
        const tabs = this.$refs.tab;

        if (!tabs) { return; }
        const { offsetLeft, offsetWidth } = tabs[this.activeTab];

        TweenLite.to(this.$refs.indicator, Defaults.defaultDuration, {
            x: offsetLeft,
            width: offsetWidth,
            ease: Power3.easeOut,
        });

    }

    populateTabs() {
        this.tabs = this.$children.reduce(
            (acc: ITab[], child: Vue) => {
                if (child && child.$options && child.$options.propsData) {
                    acc.push(child as unknown as ITab);
                }

                return acc;
            },
            []);
    }

    mounted() {
        this.populateTabs();
        this.activeTab = this.defaultTab;
        this.setActiveTab();
        this.viewportUtil.addResizeHandler(this.positionIndicator);
    }

    beforeDestroy() {
        this.viewportUtil.removeResizeHandler(this.positionIndicator);
    }
}
