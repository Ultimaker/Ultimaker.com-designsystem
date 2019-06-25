import { Vue, Component, Prop } from 'vue-property-decorator';
import { FooterNavigationCategoryProps } from './footer-navigation-category.models';
import WithRender from './footer-navigation-category.vue.html';

@WithRender
@Component({
    name: 'FooterNavigationCategory',
})

export class FooterNavigationCategory extends Vue implements FooterNavigationCategoryProps {
    @Prop({ type: String, required: true }) label!: FooterNavigationCategoryProps['label'];
    @Prop({ type: Array, required: false }) items?: FooterNavigationCategoryProps['items'];
}
