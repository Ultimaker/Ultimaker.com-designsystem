import { Component, Prop, Vue } from 'vue-property-decorator';
import { SubNavigationItemProps } from './sub-navigation-item.models';
import WithRender from './sub-navigation-item.vue.html';

@WithRender
@Component({
    name: 'SubNavigationItem',
})

export class SubNavigationItem extends Vue implements SubNavigationItemProps {
    @Prop({ type: String, required: true }) url!: SubNavigationItemProps['url'];
    @Prop({ type: Object }) image?: SubNavigationItemProps['image'];
    @Prop({ type: String, required: true }) label!: SubNavigationItemProps['label'];
}
