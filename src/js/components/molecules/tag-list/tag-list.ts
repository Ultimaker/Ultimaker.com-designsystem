import { Vue, Component, Prop } from 'vue-property-decorator';

import { ITags, ITaglistProps } from './tag-list.models';

@Component({
    name: 'tag-list',
    template: require('./tag-list.vue.html'),
})

export default class TagList extends Vue implements ITaglistProps {
    @Prop({ type: Array, required: true })
        tags!: ITags;
}
