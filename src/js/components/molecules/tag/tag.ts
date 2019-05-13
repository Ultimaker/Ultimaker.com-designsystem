import { Vue, Component, Prop } from 'vue-property-decorator';
import { ITagProps, ITag } from './tag.models';
import WithRender from './tag.vue.html';

@WithRender
@Component({
    name: 'tag',
})

export default class Tag extends Vue implements ITagProps {
    @Prop({ type: Object, required: true })
        tag!: ITag['tag'];
}
