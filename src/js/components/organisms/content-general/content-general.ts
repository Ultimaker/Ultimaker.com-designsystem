import { Vue, Component, Prop, Watch } from 'vue-property-decorator';

import { ContentGeneralProps } from './content-general.models';
import WithRender from './content-general.vue.html';

@WithRender
@Component({
    name: 'ContentGeneral',
})

export class ContentGeneral extends Vue implements ContentGeneralProps {
    @Prop({ type: String, required: true }) title!: ContentGeneralProps['title'];
    @Prop({ type: String, required: true }) description!: ContentGeneralProps['description'];
    @Prop({ type: Object }) cta?: ContentGeneralProps['cta'] | undefined;
    @Prop({ type: Object }) image?: ContentGeneralProps['image'] | undefined;
    @Prop({ type: Boolean, required: true }) reversed!: ContentGeneralProps['reversed'];

    getClassNames(type): string {
        return {
            ContentButton: 'content-general__button button',
            ContentLink: 'content-general__link link link--medium',
            YoutubeLink: 'content-general__link link link--medium',
        }[type] || '';
    }
}
