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
    @Prop({ type: Array }) properties?: ICardProduct['properties'];
    @Prop({ type: String, required: true }) title!: ICardProduct['title'];
    @Prop({ type: String, required: true }) url!: ICardProduct['url'];

    imageError: boolean = false;

    get listItems(): object {
        let properties:any = [];
        const items:any = [];

        if (this.properties) {
            properties = this.properties.map(
                (property) => {
                    return {
                        item: {
                            item: {
                                item: property
                            },
                            type: 'SpanLabel',
                        },
                        type: 'LiInline',
                    };
                },
            );
        }

        // return properties;
        return {
            items: properties,
            type: 'LiInline',
        };
    }
}
