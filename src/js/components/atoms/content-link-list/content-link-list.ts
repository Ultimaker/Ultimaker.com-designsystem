import { Vue, Component, Prop } from 'vue-property-decorator';
import { IContentLinkListProps } from 'components/atoms/content-link-list/content-link-list.models';
import WithRender from './content-link-list.vue.html';

@WithRender
@Component({
    name: 'ContentLinkList',
})

export class ContentLinkList extends Vue implements IContentLinkListProps {
    @Prop({ type: String, required: true }) block!: string;
    @Prop({ type: Array, default: [] }) links!: [];
}
