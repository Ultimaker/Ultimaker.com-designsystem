import { Vue, Component, Prop } from 'vue-property-decorator';
import { ITagProps, ITag } from './tag.models';

@Component({
    name: 'tag',
    template: require('./tag.html'),
})

export default class Tag extends Vue implements ITagProps {
    @Prop({ type: String, required: true, default: '' })
        tag!: ITag['tag'];
}
