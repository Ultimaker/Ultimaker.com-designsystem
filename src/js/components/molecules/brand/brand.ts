import { Vue, Component, Prop } from 'vue-property-decorator';
import { BrandProps } from './brand.models';
import WithRender from './brand.vue.html';

@WithRender
@Component({
    name: 'Brand',
})

export class Brand extends Vue implements BrandProps {
    @Prop({ type: Object }) image?: BrandProps['image'];
}
