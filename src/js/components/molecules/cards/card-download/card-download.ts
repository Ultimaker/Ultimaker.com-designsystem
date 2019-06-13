import { Vue, Component, Prop } from 'vue-property-decorator';
import { CardDownloadProps } from './card-download.models';
import WithRender from './card-download.vue.html';

@WithRender
@Component({
    name: 'CardDownload',
})

export class CardDownload extends Vue implements CardDownloadProps {
    @Prop({ type: String, required: true }) name!: CardDownloadProps['name'];
    @Prop({ type: Boolean, required: true }) selected!: CardDownloadProps['selected'];
    @Prop({ type: Number, required: true }) index!: CardDownloadProps['index'];
    @Prop({ type: Function, required: true }) setSelectedItem!: CardDownloadProps['setSelectedItem'];
    @Prop({ type: String, required: true }) title!: CardDownloadProps['title'];
    @Prop({ type: String, required: true }) file!: CardDownloadProps['file'];
    @Prop({ type: String, required: true }) description!: CardDownloadProps['description'];
    @Prop({ type: Object, required: false }) image?: CardDownloadProps['image'];

    handleSelect() {
        this.setSelectedItem(this.index);
    }
}
