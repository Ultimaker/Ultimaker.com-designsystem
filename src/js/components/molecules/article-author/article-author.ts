import { Vue, Component, Prop } from 'vue-property-decorator';
import { ArticleAuthorProps } from './article-author.models';
import WithRender from './article-author.vue.html';
import { Format } from '../../../utils/format';
import { format } from 'url';

@WithRender
@Component({
    name: 'ArticleAuthor',
})

export class ArticleAuthor extends Vue implements ArticleAuthorProps {
    @Prop({ type: String, required: true }) name!: ArticleAuthorProps['name'];
    @Prop({ type: Object, required: false }) image?: ArticleAuthorProps['image'];
    @Prop({ type: String, required: true }) publishedDate!: ArticleAuthorProps['publishedDate'];

    format = new Format();

    get formatedDate() {
        return this.format.ISODate(this.publishedDate);
    }
}
