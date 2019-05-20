import { Vue, Component, Prop } from 'vue-property-decorator';
import { ListUnorderedLimitProps } from './list-unordered-limit.models';
import WithRender from './list-unordered-limit.vue.html';
import ViewportUtil from 'utils/viewport';

@WithRender
@Component({
    name: 'ListUnorderedLimit',
})

export class ListUnorderedLimit extends Vue implements ListUnorderedLimitProps {
    @Prop({ type: Object, required: true }) listItems!: { items: [string[] | object[]], type: string };
    @Prop({ type: Object }) expand?: ListUnorderedLimitProps['expand'];
    @Prop({ type: Object }) limit?: ListUnorderedLimitProps['limit'];

    showAll: boolean = false;
    viewportUtil: ViewportUtil = new ViewportUtil();

    showButtonLabel() {
        let label = '';

        if (this.expand !== undefined) {
            label = this.expand.label;
        }

        return `${label} (${this.listItems.items.length})`;
    }

    showHidden() {
        this.showAll = true;
    }

    showLimit() {
        if (this.limit === undefined) {
            return false;
        }

        if (this.showAll) {
            return false;
        }

        return this.viewportUtil.isMobile ? this.limit.smallScreen : this.limit.largeScreen;
    }
}
