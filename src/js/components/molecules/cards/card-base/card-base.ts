/** @format */

import { Vue, Component, Prop } from 'vue-property-decorator';
import { CardBaseProps } from './card-base.models';

@Component({
    name: 'CardBase',
})

export class CardBase extends Vue implements CardBaseProps {
    @Prop({ type: Object }) clickEvent?: CardBaseProps['clickEvent'];
    @Prop({ type: Object }) image?: CardBaseProps['image'];
    @Prop({ type: String, required: true }) title!: CardBaseProps['title'];
}
