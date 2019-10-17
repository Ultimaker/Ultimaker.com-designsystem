import { Vue, Component, Prop } from 'vue-property-decorator';

import { ProductProps } from './product.models';
import WithRender from './product.vue.html';

@WithRender
@Component({
    name: 'Product',
})

export class Product extends Vue implements ProductProps {
    @Prop({ type: String, required: true }) icon!: ProductProps['icon'];
    @Prop({ type: String, required: true }) name!: ProductProps['name'];
    @Prop({ type: Object, required: true }) pricing!: ProductProps['pricing'];
}
