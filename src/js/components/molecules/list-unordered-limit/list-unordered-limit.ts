import { Component, Prop } from 'vue-property-decorator';
import Events from 'constants/events';
import { ListUnorderedLimitProps } from './list-unordered-limit.models';
import ViewportUtil from 'utils/viewport';
import WithRender from './list-unordered-limit.vue.html';
import Vue from 'vue';

@WithRender
@Component({
    name: 'ListUnorderedLimit',
})

export class ListUnorderedLimit extends Vue implements ListUnorderedLimitProps {
    @Prop({ type: Array, required: true }) listItems!: [];
    @Prop({ type: Object }) limit?: ListUnorderedLimitProps['limit'];

    $emitPublic; // requires a global plugin
    $route; // requires a global plugin
    componentMounted: boolean = false;
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

    /**
     * -1 means no limit
     *
     * @param {number|undefined} limit
     * @returns {number}
     */
    determineLimit(limit): number {
        if (limit === undefined) {
            return -1;
        }

        if (this.listItems.length <= limit) {
            return -1;
        }

        return limit;
    }

    mounted() {
        this.componentMounted = true;
    }

    showButtonLabel() {
        const { label } = this.limit && this.limit.expand ? this.limit.expand : { label: '' };

        return `${label} (${this.listItems.length})`;
    }

    showHidden() {
        this.showAll = true;
        this.$emitPublic(Events.gtm.click, this.getClickEventData());
    }

    /**
     * -1 means no limit
     *
     * @returns {number}
     */
    showLimit(): number {
        if (this.limit === undefined || !this.componentMounted) {
            return -1;
        }

        if (this.viewportUtil.isMobile) {
            return this.determineLimit(this.limit.smallScreen);
        }

        return this.determineLimit(this.limit.largeScreen);
    }
}
