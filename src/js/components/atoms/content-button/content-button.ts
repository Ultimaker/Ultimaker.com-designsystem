import { Component, Prop } from 'vue-property-decorator';
import BaseLink from '../BaseLink';
import { ContentButton as ContentButtonInterface } from '@ultimaker/ultimaker.com-model-definitions/dist/atoms/cta/ContentButton';

@Component({
    name: 'ContentButton',
})

export default class ContentButton extends BaseLink implements ContentButtonInterface {
    @Prop({ type: String, required: false }) icon?: ContentButtonInterface['icon'];
    @Prop({ type: String, required: false }) url?: ContentButtonInterface['url'];
    @Prop({ type: String, required: true }) label!: ContentButtonInterface['label'];
    @Prop({ type: Object, required: false }) clickEvent?: ContentButtonInterface['clickEvent'];
}
