import { Vue, Component, Prop } from 'vue-property-decorator';
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
    private correction: number = 0;

    $refs: any;

    getLinkClassList(index) {
        return {
            'tabs__list_link--active': index === this.activeTab,
        };
    }

    mounted() {
        this.activeTab = this.defaultTab;
    }
}
