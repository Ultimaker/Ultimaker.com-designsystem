import { Vue, Component, Prop } from 'vue-property-decorator';
import { IContentLinkListProps } from 'components/atoms/content-link-list/content-link-list.models';

@Component({
    name: 'content-link-list',
    template: require('./content-link-list.vue.html'),
})

export default class ContentLinkList extends Vue implements IContentLinkListProps {
    @Prop({ type: String, required: true }) block!: string;
    @Prop({ type: Array, default: [] }) links!: [];
}
