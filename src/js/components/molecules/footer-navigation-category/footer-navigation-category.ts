import { Vue, Component, Prop } from 'vue-property-decorator';
import { FooterNavigationCategoryProps } from './footer-navigation-category.models';
import WithRender from './footer-navigation-category.vue.html';
import { items } from '../list-unordered/data/examples/properties-extended';

@WithRender
@Component({
    name: 'FooterNavigationCategory',
})

export class FooterNavigationCategory extends Vue implements FooterNavigationCategoryProps {
    @Prop({ type: String, required: true }) label!: FooterNavigationCategoryProps['label'];
    @Prop({ type: Array, required: false }) items?: FooterNavigationCategoryProps['items'];

    splitCount: number = 8

    classes() {
        return this.items && this.items.length >= this.splitCount ? 'footer-navigation-category--columns' : '';
    }
}
