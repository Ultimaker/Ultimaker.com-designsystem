import { Component, Prop } from 'vue-property-decorator';
import BaseLink from '../BaseLink';
import { ContentLink as ContentLinkInterface } from '@ultimaker/ultimaker.com-model-definitions/dist/atoms/cta/ContentLink';

@Component({
    name: 'ContentLink',
})

export default class ContentLink extends BaseLink {
    @Prop({ type: String, required: false }) icon?: ContentLinkInterface['icon'];
    @Prop({ type: String, required: true }) url!: ContentLinkInterface['url'];
    @Prop({ type: String, required: true }) label!: ContentLinkInterface['label'];
    @Prop({ type: Object, required: false }) clickEvent?: ContentLinkInterface['clickEvent'];
}
