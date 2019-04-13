import { Component, Mixins, Prop } from 'vue-property-decorator';
import { CardProduct as ICardProduct } from '@ultimaker/ultimaker.com-model-definitions/dist/molecules/cards/CardProduct';
import ClickEvents from 'src/js/mixins/click-events.ts';

@Component({
    name: 'AnchorOverlay',
    template: require('./template.html'),
})

export default class AnchorOverlay  extends Mixins(ClickEvents) {
    @Prop({ type: Object }) clickEvent?: ICardProduct['clickEvent'];
    @Prop({ type: String, required: true }) title!: string;
    @Prop({ type: String, required: true }) url!: string;
}
