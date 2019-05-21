import Events from 'constants/events';
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
    @Prop({ type: Object }) limit?: ListUnorderedLimitProps['limit'];

    $emitPublic; // requires a global plugin
    $route; // requires a global plugin
    showAll: boolean = false;
    viewportUtil: ViewportUtil = new ViewportUtil();

    getClickEventData() {
        if (!this.limit || !this.limit.expand || !this.limit.expand.clickEvent) {
            return null;
        }

        const { clickEvent } = this.limit.expand;

        return {
            dataType: clickEvent.name,
            data: {
                ...clickEvent.data,
                pageSlug: this.$route.fullPath,
            },
        };
    }

    showButtonLabel() {
        let label = '';

        if (this.limit !== undefined && this.limit.expand !== undefined) {
            label = this.limit.expand.label;
        }

        return `${label} (${this.listItems.items.length})`;
    }

    showHidden() {
        this.showAll = true;
        this.$emitPublic(Events.click, this.getClickEventData());
    }

    showLimit() {
        if (this.limit === undefined) {
            this.showAll = true;
            return;
        }

        return this.viewportUtil.isMobile ? this.limit.smallScreen : this.limit.largeScreen;
    }
}
