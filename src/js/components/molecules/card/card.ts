import { Vue, Component, Prop } from 'vue-property-decorator';

import { ICardProps, ICard } from './card.models';

@Component({
    name: 'card',
    template: require('./card.html'),
})

export default class Card extends Vue implements ICardProps{
    @Prop({ type: String, default: '' })
        block!: string;
    @Prop({ type: Object, required: true, default: {} })
        card!: ICard;

    get classObject ()  {
        const classes: Object = {};

        if (this.block !== '') {
            classes[`${ this.block }__card`] = true;
        }

        return classes;
    }
}
