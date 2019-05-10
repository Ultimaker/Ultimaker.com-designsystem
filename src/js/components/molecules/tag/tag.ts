import { Vue, Component, Prop } from 'vue-property-decorator';
import { ITagProps, ITag } from './tag.models';

@Component({
    name: 'tag',
    template: require('./tag.vue.html'),
})

export default class Tag extends Vue implements ITagProps {
    @Prop({ type: Object, required: true })
        tag!: ITag['tag'];
}
