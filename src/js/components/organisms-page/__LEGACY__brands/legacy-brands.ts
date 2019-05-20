import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
    name: 'LegacyBrands',
    template: require('./legacy-brands.html'),
})

export class LegacyBrands extends Vue {
    @Prop({ type: String, required: true }) title!: string;
    @Prop({ type: Array, required: true }) brands!: [];
    @Prop({ type: Object }) contentLink!: object;
}
