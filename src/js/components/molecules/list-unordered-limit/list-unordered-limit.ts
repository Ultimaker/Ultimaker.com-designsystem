import Events from 'constants/events';
import { Vue, Component, Prop } from 'vue-property-decorator';
import { ListUnorderedLimitProps } from './list-unordered-limit.models';
import ViewportUtil from 'utils/viewport';
import WithRender from './list-unordered-limit.vue.html';

interface RowLimitsInterface {
    mobile: number;
    tablet: number;
    desktop: number;
}

@WithRender
@Component({
    name: 'ListUnorderedLimit',
})

export class ListUnorderedLimit extends Vue implements ListUnorderedLimitProps {
    @Prop({ type: Object, required: true }) items!: [];
    @Prop({ type: Object }) limit?: ListUnorderedLimitProps['limit'];

    $emitPublic; // requires a global plugin
    $route; // requires a global plugin
    componentMounted: boolean = false;
    showAll: boolean = false;
    viewportUtil: ViewportUtil = new ViewportUtil();
    chunks: any = [];

    chunkSize: number = 2;
    rowLimits: RowLimitsInterface = {
        mobile: 2,
        tablet: 3,
        desktop: 4,
    };

    get visibleRows() {
        if (!this.limitValue) {
            return Infinity;
        }

        if (typeof this.limitValue !== 'number') {
            return Infinity;
        }

        return Math.ceil(Number(this.limitValue) / this.chunkSize);
    }

    get limitValue() {
        if (!this.limit) {
            return -1;
        }
        if (!this.viewportUtil.isMobile) {
            return this.limit['largeScreen'];
        }

        return this.limit['smallScreen'];
    }

    setRowLimit() {
        if (this.viewportUtil.isMobile) {
            this.chunkSize = this.rowLimits.mobile;
        }

        if (this.viewportUtil.isTablet) {
            this.chunkSize = this.rowLimits.tablet;
        }

        this.chunkSize = this.rowLimits.desktop;
    }

    chunkItems() {
        const items = this.items;
        const length = items.length;

        for (let i = 0;  i < length;  i += this.chunkSize) {
            const chunk: string[] | object[] = items.slice(i, i + this.chunkSize);
            if (chunk) {
                this.chunks.push(chunk);
            }
        }
    }

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

    mounted() {
        this.componentMounted = true;
        this.setRowLimit();
        this.chunkItems();
    }

    showButtonLabel() {
        let label = '';

        if (this.limit !== undefined && this.limit.expand !== undefined) {
            label = this.limit.expand.label;
        }

        return `${label} (${this.items.length})`;
    }
}
