import { Vue, Component, Prop } from 'vue-property-decorator';
import { BrandsProps } from './brands2.models';
import WithRender from './brands2.vue.html';

@WithRender
@Component({
    name: 'Brands2',
})

export class Brands2 extends Vue implements BrandsProps {
    @Prop({ type: Object }) ctas?: BrandsProps['ctas'];
    @Prop({ type: Object }) expand?: BrandsProps['expand'];
    @Prop({ type: Array, required: true }) items!: BrandsProps['items'];
    @Prop({ type: Object }) limit?: BrandsProps['limit'];
    @Prop({ type: String }) subtitle?: BrandsProps['subtitle'];
    @Prop({ type: String, required: true }) title!: BrandsProps['title'];

    get listItems(): object {
        if (this.items) {
            return {
                items: this.items.map(
                    (item) => {
                        return {
                            item,
                            type: 'LiItem',
                        };
                    },
                ),
            };
        }

        return {};
    }
}
