import { Vue, Component, Prop } from 'vue-property-decorator';
<<<<<<< HEAD
import Events from 'constants/events';
=======
>>>>>>> 76e1b16... feat(resellers):

import { BusinessCard as IBusinessCard } from '@ultimaker/ultimaker.com-model-definitions/dist/molecules/cards/BusinessCard';

@Component({
    name: 'BusinessCard',
    template: require('./business-card.html'),
})

export default class BusinessCard extends Vue implements IBusinessCard {
    @Prop({ type: String, required: true }) title!: IBusinessCard['title'];
<<<<<<< HEAD
    @Prop({ type: Object, required: true }) image!: IBusinessCard['image'];
=======
    @Prop({ type: Object, required: false }) image?: IBusinessCard['image'] | undefined;
>>>>>>> 76e1b16... feat(resellers):
    @Prop({ type: Object, required: true }) contentLink!: IBusinessCard['contentLink'];
    @Prop({ type: Array, required: false }) properties?: IBusinessCard['properties'];

    mapImage(image) {
<<<<<<< HEAD
        const img = {
            mobileWidth: image.mobileUrl,
            desktopWidth: image.desktopUrl,
=======
        const img = {};

        img['desktopWidth'] = {
            url: image.desktopUrl,
        };

        img['desktopHdWidth'] = {
            url: image.desktopUrl,
        };

        img['tabletWidth'] = {
            url: image.desktopUrl,
        };

        img['mobileXlWidth'] = {
            url: image.desktopUrl,
        };

        img['mobileLWidth'] = {
            url: image.desktopUrl,
        };

        img['mobileWidth'] = {
            url: image.desktopUrl,
>>>>>>> 76e1b16... feat(resellers):
        };

        return img;
    }
}
