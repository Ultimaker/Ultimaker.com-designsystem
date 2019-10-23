/** @format */

import Events from 'constants/events';
import { Vue, Component, Prop } from 'vue-property-decorator';
import { CardBaseProps } from './card-base.models';

@Component({
    name: 'CardBase',
})
export class CardBase extends Vue implements CardBaseProps {
    @Prop({ type: Object }) clickEvent?: CardBaseProps['clickEvent'];
    @Prop({ type: Object }) image?: CardBaseProps['image'];
    @Prop({ type: String, required: true }) title!: CardBaseProps['title'];

    /**
     * @type PublicEventService
     */
    $emitPublic;

    /**
     * requires VueRouter plugin
     */
    $route;

    get clickEventData(): object {
        if (!this.clickEvent) {
            return {};
        }

        return {
            dataType: this.clickEvent.name,
            data: {
                ...this.clickEvent.data,
                pageSlug: this.$route.fullPath,
            },
        };
    }

    triggerEventClick(): void {
        if (!this.clickEvent) {
            return;
        }

        this.$emitPublic(Events.gtm.click, this.clickEventData);
    }
}
