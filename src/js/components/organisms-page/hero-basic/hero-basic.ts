import { Vue, Component, Prop } from 'vue-property-decorator';
import { HeroBasic as IHeroBasic } from '@ultimaker/ultimaker.com-model-definitions/dist/organisms/hero/HeroBasic';

@Component({
    name: 'hero-basic',
    template: require('./hero-basic.vue.html'),
})

export default class HeroBasic extends Vue implements IHeroBasic {
    @Prop({ type: String, required: true }) title!: IHeroBasic['title'];
    @Prop({ type: String, required: false }) subtitle?: IHeroBasic['subtitle'];
    @Prop({ type: String, required: true }) description!: IHeroBasic['description'];
    @Prop({ type: Object, required: false }) image?: IHeroBasic['image'] | undefined;
    @Prop({ type: Object, required: false }) ctas?: IHeroBasic['ctas'] | undefined;
}
