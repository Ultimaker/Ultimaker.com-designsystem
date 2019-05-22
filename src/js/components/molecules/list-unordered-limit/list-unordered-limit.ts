import { Component, Mixins, Prop } from 'vue-property-decorator';
import { default as Events } from 'constants/events';
import { ListUnorderedLimitProps } from './list-unordered-limit.models';
import { StepRowAnimation } from 'js/mixins/step-row-animation/step-row-animation';
import { default as ViewportUtil } from 'utils/viewport';
import WithRender from './list-unordered-limit.vue.html';

@WithRender
@Component({
    name: 'ListUnorderedLimit',
})

export class ListUnorderedLimit extends Mixins(StepRowAnimation) implements ListUnorderedLimitProps {
    @Prop({ type: Object, required: true }) listItems!: { items: [string[] | object[]], type: string };
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

        if (this.listItems.items.length <= limit) {
            return -1;
        }

        return limit;
    }

    mounted() {
        this.componentMounted = true;
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
