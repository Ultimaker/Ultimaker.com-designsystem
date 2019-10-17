import { Component, Prop, Vue } from 'vue-property-decorator';

import { HeroProductProps } from './hero-product.models';
import WithRender from './hero-product.vue.html';

@WithRender
@Component({
    name: 'HeroProduct',
})

export class HeroProduct extends Vue implements HeroProductProps {
    @Prop({ type: String, required: true }) title!: HeroProductProps['title'];
    @Prop({ type: String, required: false }) subtitle?: HeroProductProps['subtitle'];
    @Prop({ type: String, required: true }) description!: HeroProductProps['description'];
    @Prop({ type: Object, required: false }) image?: HeroProductProps['image'] | undefined;
    @Prop({ type: Object, required: false }) ctas?: HeroProductProps['ctas'] | undefined;
    @Prop({ type: Array, required: true }) products!: HeroProductProps['products'];
    @Prop({ type: Array, required: false }) linkList?: HeroProductProps['linkList'];

    get productsClass() {
        return `hero__products-item hero__products-item--${this.products.length > 1 ? 'multiple' : 'single'}`;
    }
}
