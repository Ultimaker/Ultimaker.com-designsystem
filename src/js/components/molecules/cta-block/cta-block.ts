import { Vue, Component, Prop } from 'vue-property-decorator';
import { CtaBlock as ICtaBlock } from '@ultimaker/ultimaker.com-model-definitions/dist/molecules/cta/CtaBlock';

@Component({
    name: 'cta-block',
    template: require('./cta-block.html'),
})

export default class CtaBlock extends Vue implements ICtaBlock {
    @Prop({ type: Array, required: true }) ctas!: ICtaBlock['ctas'];
}
