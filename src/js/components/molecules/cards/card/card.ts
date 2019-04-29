import { Vue, Component, Prop } from 'vue-property-decorator';

import { ICardProps, ICard } from './card.models';

@Component({
    name: 'card',
    template: require('./card.vue.html'),
})

export default class Card extends Vue implements ICardProps{
    @Prop({ type: String })
    block!: string;
    @Prop({ type: Object, required: true })
    card!: ICard;

    get classObject ()  {
        const classes: Object = {};

        if (this.block !== '') {
            classes[`${ this.block }__card`] = true;
        }

        return classes;
    }
}
