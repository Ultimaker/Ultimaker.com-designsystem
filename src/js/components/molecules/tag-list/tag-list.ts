import { Vue, Component, Prop } from 'vue-property-decorator';

import { ITags, ITaglistProps } from './tag-list.models';
import WithRender from './tag-list.vue.html';

@WithRender
@Component({
    name: 'tag-list',
})

export default class TagList extends Vue implements ITaglistProps {
    @Prop({ type: Array, required: true })
        tags!: ITags;
}
