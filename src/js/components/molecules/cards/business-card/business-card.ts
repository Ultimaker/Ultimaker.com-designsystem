import { Component, Prop, Vue } from 'vue-property-decorator';
import { BusinessCard as IBusinessCard } from '@ultimaker/ultimaker.com-model-definitions/dist/molecules/cards/BusinessCard';
import Events from 'src/js/constants/events';
import WithRender from './business-card.vue.html';

@WithRender
@Component({
    name: 'BusinessCard',
})

export default class BusinessCard extends Vue implements IBusinessCard {
    @Prop({ type: String, required: true }) title!: IBusinessCard['title'];
    @Prop({ type: Object, required: false }) image?: IBusinessCard['image'] | undefined;
    @Prop({ type: Object, required: true }) contentLink!: IBusinessCard['contentLink'];
    @Prop({ type: Array, required: false }) properties?: IBusinessCard['properties'];
    @Prop({ type: Object, required: false }) clickEvent?: IBusinessCard['clickEvent'];

    mapImage(image) {

        const img = {
            mobileWidth: image.mobileUrl,
            desktopWidth: image.desktopUrl,
        };

        return img;
    }

    get clickEventType() {
        return Events.click;
    }

    get clickEventData() {
        if (this.clickEvent) {
            return {
                dataType: this.clickEvent.name,
                data: this.clickEvent.data,
            };
        }

        return null;
    }
}
