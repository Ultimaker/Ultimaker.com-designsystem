/** @format */

import { CardArticleProps } from './card-article.models';
import { CardBase } from 'components/molecules/cards/card-base/card-base';
import { Component, Prop } from 'vue-property-decorator';
import WithRender from './card-article.vue.html';

@WithRender
@Component({
    name: 'CardArticle',
})
export class CardArticle extends CardBase implements CardArticleProps {
    @Prop({ type: String }) description!: CardArticleProps['description'];
    @Prop({ type: Array }) labels?: CardArticleProps['labels'];
    @Prop({ type: String }) url!: CardArticleProps['url'];

    get listItems(): object {
        let properties: any = [];

        if (this.labels) {
            properties = this.labels.map((property) => ({
                item: {
                    item: {
                        item: property,
                    },
                    type: 'SpanLabel',
                },
                type: 'LiInline',
            }));
        }

        return {
            items: properties,
            type: 'LiInline',
        };
    }
}
