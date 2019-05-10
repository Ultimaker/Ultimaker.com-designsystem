import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import { ContentCover  as IContentCover } from '@ultimaker/ultimaker.com-model-definitions/dist/molecules/contentCover/ContentCover';

@Component({
    name: 'ContentCover',
    template: require('./content-cover.vue.html'),
})

export default class GeneralContent extends Vue implements IContentCover {
    @Prop({ type: String, required: true }) title!: IContentCover['title'];
    @Prop({ type: String, required: true }) description!: IContentCover['description'];
    @Prop({ type: Object }) cta?: IContentCover['cta'] | undefined;
    @Prop({ type: Object }) image?: IContentCover['image'] | undefined;

    getClassNames(type): string {
        return {
            ContentButton: 'content-cover__button button',
            ContentLink: 'content-cover__link link link--medium',
            YoutubeLink: 'content-cover__link link link--medium',
        }[type] || '';
    }
}
