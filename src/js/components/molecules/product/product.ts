import { Vue, Component, Prop } from 'vue-property-decorator';

import { ProductProps } from './product.models';

@Component({
    name: 'Product',
    template: require('./product.vue.html'),
})

export default class Product extends Vue implements ProductProps {
    @Prop({ type: String, required: true }) icon!: ProductProps['icon'];
    @Prop({ type: String, required: true }) name!: ProductProps['name'];
    @Prop({ type: Object, required: true }) pricing!: ProductProps['pricing'];
}
