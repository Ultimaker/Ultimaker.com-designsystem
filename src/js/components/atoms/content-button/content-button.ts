import { Component, Prop, Vue } from 'vue-property-decorator';
import { ContentButton as ContentButtonInterface } from '@ultimaker/ultimaker.com-model-definitions/dist/atoms/cta/ContentButton';
import BaseLink from 'components/atoms/BaseLink/BaseLink.vue';

@Component({
    name: 'ContentButton',
    extends: BaseLink,
})

export class ContentButton extends Vue implements ContentButtonInterface {
    @Prop({ type: String, required: false }) icon?: ContentButtonInterface['icon'];
    @Prop({ type: String, required: false }) url?: ContentButtonInterface['url'];
    @Prop({ type: String, required: true }) label!: ContentButtonInterface['label'];
    @Prop({ type: Object, required: false }) clickEvent?: ContentButtonInterface['clickEvent'];
}
