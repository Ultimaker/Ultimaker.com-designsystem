import { Vue, Component, Prop, Watch } from 'vue-property-decorator';

import viewportUtil from 'utils/viewport';
import { TweenLite, Power3, Power0 } from 'gsap';
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

    @Watch('activeTab')
    setActiveTab() {
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

    mounted() {
        this.activeTab = this.defaultTab;
        this.setActiveTab();
        this.viewportUtil.addResizeHandler(this.positionIndicator);
    }

    beforeDestroy() {
        this.viewportUtil.removeResizeHandler(this.positionIndicator);
    }
}
