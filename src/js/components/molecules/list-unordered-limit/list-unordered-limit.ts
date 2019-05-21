import Events from 'constants/events';
import { Vue, Component, Prop } from 'vue-property-decorator';
import { ListUnorderedLimitProps } from './list-unordered-limit.models';
import WithRender from './list-unordered-limit.vue.html';
import ViewportUtil from 'utils/viewport';
import BrowserCapabilities from 'utils/browser-capabilities';

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
    limitField: string = 'smallScreen';

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

    get hasExpand() {
        if (!this.hasLimit) {
            return false;
        }

        if (this.listItems.items.length <= this.showLimit) {
            return false;
        }

        return this.limit && this.limit.expand;
    }

    get hasLimit() {
        if (this.showAll) {
            return false;
        }

        if (!this.limit) {
            return false;
        }

        if (!this.limit[this.limitField]) {
            return false;
        }

        return typeof this.limit[this.limitField] === 'number';
    }

    get showLimit() {
        if (!this.hasLimit) {
            return false;
        }

        return this.limit && this.limit[this.limitField] ? this.limit[this.limitField] : false;
    }

    showHidden() {
        this.showAll = true;
        this.$emitPublic(Events.click, this.getClickEventData());
    }

    mounted() {
        if (!BrowserCapabilities.isBrowser) {
            return;
        }

        if (this.viewportUtil.isMobile) {
            this.limitField = 'smallScreen';
            return;
        }

        this.limitField = 'largeScreen';
        return;
    }
}
