import { Vue, Component, Prop } from 'vue-property-decorator';
import { IImageVariant } from './responsive-picture.models';

@Component({
    name: 'responsive-picture-source',
    template: '<source :media="media" :srcset="srcset">',
})

export default class ResponsivePictureSource extends Vue {
    @Prop({ type: [String, Object], required: true }) image!: IImageVariant | string;
    @Prop({ type: String, required: true }) media!: string;

    get srcset() {
        if (typeof this.image === 'string') {
            return this.image;
        }

        return this.image.retinaUrl ? `${ this.image.url }, ${ this.image.retinaUrl } 2x` : this.image.url;
    }
}
