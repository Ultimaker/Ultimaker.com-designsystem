import { Vue, Component, Prop } from 'vue-property-decorator';
import { HeroBasic as IHeroBasic } from '@ultimaker/ultimaker.com-model-definitions/dist/organisms/hero/HeroBasic';

@Component({
    name: 'hero-basic',
    template: require('./hero-basic.html'),
})

export default class HeroBasic extends Vue implements IHeroBasic {
    @Prop({ type: String, required: true }) title!: IHeroBasic['title'];
    @Prop({ type: String, required: false }) subtitle!: IHeroBasic['subtitle'];
    @Prop({ type: String, required: true }) description!: IHeroBasic['description'];
    @Prop({ type: Object, required: true }) image!: IHeroBasic['image'];
    @Prop({ type: Array }) ctas!: IHeroBasic['ctas'];
}
