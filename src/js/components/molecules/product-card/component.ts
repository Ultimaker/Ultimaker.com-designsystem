import { Component, Prop, Vue } from 'vue-property-decorator';
import { CardProduct as IProductCard } from '@ultimaker/ultimaker.com-model-definitions/dist/molecules/cards/CardProduct';

import './styles.scss';

@Component({
    name: 'ProductCard',
    template: require('./template.html'),
})

export default class ProductCard extends Vue implements IProductCard {
    @Prop({ type: Object, required: false }) clickEvent?: IProductCard['clickEvent'];
    @Prop({ type: Object, required: false }) image?: IProductCard['image'] | undefined;
    @Prop({ type: Object, required: false }) list?: Object;
    @Prop({ type: String, required: true }) title!: IProductCard['title'];
    @Prop({ type: String, required: true }) url!: IProductCard['url'];
}
