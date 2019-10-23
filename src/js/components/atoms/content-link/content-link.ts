import { Component, Prop, Vue } from 'vue-property-decorator';
import { ContentLink as ContentLinkInterface } from '@ultimaker/ultimaker.com-model-definitions/dist/atoms/cta/ContentLink';
import BaseLink from 'components/atoms/BaseLink/BaseLink.vue';

@Component({
    name: 'ContentLink',
    extends: BaseLink,
})

export class ContentLink extends Vue implements ContentLinkInterface {
    @Prop({ type: String, required: false }) icon?: ContentLinkInterface['icon'];
    @Prop({ type: String, required: true }) url!: ContentLinkInterface['url'];
    @Prop({ type: String, required: true }) label!: ContentLinkInterface['label'];
    @Prop({ type: Object, required: false }) clickEvent?: ContentLinkInterface['clickEvent'];
}
