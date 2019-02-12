import { Vue, Component, Prop } from 'vue-property-decorator';
import { BusinessCard as IBusinessCard } from '@ultimaker/ultimaker.com-model-definitions/dist/molecules/cards/BusinessCard';

@Component({
    name: 'BusinessCard',
    template: require('./business-card.html'),
})

export default class BusinessCard extends Vue implements IBusinessCard {
    @Prop({ type: String, required: true }) title!: IBusinessCard['title'];
    @Prop({ type: Object, required: false }) image?: IBusinessCard['image'] | undefined;
    @Prop({ type: Object, required: true }) contentLink!: IBusinessCard['contentLink'];
    @Prop({ type: Array, required: false }) properties?: IBusinessCard['properties'];

    mapImage(image) {

        const img = {
            mobileWidth: image.mobileUrl,
            desktopWidth: image.desktopUrl,
        };

        return img;
    }
}
