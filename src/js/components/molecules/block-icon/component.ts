import { Component, Prop, Vue } from 'vue-property-decorator';
import { BlockIcon as IBlockIcon } from '@ultimaker/ultimaker.com-model-definitions/dist/molecules/blocks/BlockIcon';

@Component({
    name: 'BlockIcon',
    template: require('./template.html'),
})

export default class BlockIcon extends Vue implements IBlockIcon {
    @Prop({ type: String, required: true }) title!: IBlockIcon['title'];
    @Prop({ type: String, required: false }) description?: IBlockIcon['description'];
    @Prop({ type: String, required: false }) icon?: IBlockIcon['icon'] | undefined;
    @Prop({ type: Object, required: false }) cta?: IBlockIcon['cta'];

    getClassNames(type): string {
        return {
            ContentButton: 'button',
            ContentLink: 'link link--medium',
            YoutubeLink: '',
        }[type] || '';
    }
}
