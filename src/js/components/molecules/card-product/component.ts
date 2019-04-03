import { Component, Prop, Vue } from 'vue-property-decorator';
import { CardProduct as ICardProduct } from '@ultimaker/ultimaker.com-model-definitions/dist/molecules/cards/CardProduct';

import './styles.scss';

@Component({
    name: 'CardProduct',
    template: require('./template.html'),
})

export default class CardProduct extends Vue implements ICardProduct {
    @Prop({ type: Object, required: false }) clickEvent?: ICardProduct['clickEvent'];
    @Prop({ type: Object, required: false }) image?: ICardProduct['image'] | undefined;
    @Prop({ type: Object, required: false }) listItems?: Object;
    @Prop({ type: String, required: true }) title!: ICardProduct['title'];
    @Prop({ type: String, required: true }) url!: ICardProduct['url'];
}
