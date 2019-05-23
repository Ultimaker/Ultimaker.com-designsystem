import { Vue, Component, Prop } from 'vue-property-decorator';
import { BrandsProps } from './brands.models';
import WithRender from './brands.vue.html';

@WithRender
@Component({
    name: 'Brands',
})

export class Brands extends Vue implements BrandsProps {
    @Prop({ type: Object }) ctas?: BrandsProps['ctas'];
    @Prop({ type: Object }) expand?: BrandsProps['expand'];
    @Prop({ type: Array, required: true }) items!: BrandsProps['items'];
    @Prop({ type: Object }) limit?: BrandsProps['limit'];
    @Prop({ type: String }) subtitle?: BrandsProps['subtitle'];
    @Prop({ type: String, required: true }) title!: BrandsProps['title'];
}
