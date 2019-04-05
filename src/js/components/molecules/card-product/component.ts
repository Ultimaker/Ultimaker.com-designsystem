import { Component, Prop, Vue } from 'vue-property-decorator';
import { CardProduct as ICardProduct } from '@ultimaker/ultimaker.com-model-definitions/dist/molecules/cards/CardProduct';

import './styles.scss';

@Component({
    name: 'CardProduct',
    template: require('./template.html'),
})

export default class CardProduct extends Vue implements ICardProduct {
    @Prop({ type: Object }) clickEvent?: ICardProduct['clickEvent'];
    @Prop({ type: Object }) image?: ICardProduct['image'] | undefined;
    @Prop({ type: Object }) properties?: ICardProduct['properties'];
    @Prop({ type: String, required: true }) title!: ICardProduct['title'];
    @Prop({ type: String, required: true }) url!: ICardProduct['url'];
}
