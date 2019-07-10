/** @format */

import { Vue, Component, Prop } from 'vue-property-decorator';
import { ArticleHeaderProps } from './article-header.models';
import WithRender from './article-header.vue.html';

@WithRender
@Component({
    name: 'ArticleHeader',
})
export class ArticleHeader extends Vue implements ArticleHeaderProps {
    @Prop({ type: Object, required: true }) author!: ArticleHeaderProps['author'];
    @Prop({ type: Array }) labels?: ArticleHeaderProps['labels'];
    @Prop({ type: String, required: true }) publishedDate!: ArticleHeaderProps['publishedDate'];

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
