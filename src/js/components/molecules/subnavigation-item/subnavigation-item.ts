import { Component, Prop, Vue } from 'vue-property-decorator';
import { SubNavigationItem as ISubNavigationItem } from '@ultimaker/ultimaker.com-model-definitions/dist/molecules/navigation-item/SubNavigationItem';
import WithRender from './subnavigation-item.vue.html';

@WithRender
@Component({
    name: 'SubNavigationItem',
})

export default class SubNavigationItem extends Vue implements ISubNavigationItem {
    @Prop({ type: String, required: true }) url!: ISubNavigationItem['url'];
    @Prop({ type: Object }) image?: ISubNavigationItem['image'] | undefined;
    @Prop({ type: String, required: true }) label!: ISubNavigationItem['label'];
}
