import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import { ITabs } from './tabs-models';
import { ITab } from '../tab/tab-models';

@Component({
    name: 'tabs',
    template: require('./tabs.html'),
})

export default class Tabs extends Vue implements ITabs {
    @Prop({ type: Number, default: 0 })
    defaultTab!: Number;

    private tabs: ITab[] = [];
    private activeTab: Number = 0;

    @Watch('activeTab')
    setActiveTab() {
        this.tabs.forEach((tab, index) => {
            tab.setVisible(this.activeTab === index);
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
    }
}
