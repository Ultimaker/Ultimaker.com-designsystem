import { Vue, Component, Prop } from 'vue-property-decorator';
import { CtaBlock as ICtaBlock } from '@ultimaker/ultimaker.com-model-definitions/dist/molecules/cta/CtaBlock';
import { Button } from '@ultimaker/ultimaker.com-model-definitions/dist/atoms/cta/Button';
import { ContentLink } from '@ultimaker/ultimaker.com-model-definitions/dist/atoms/cta/ContentLink';

@Component({
    name: 'cta-block',
    template: require('./cta-block.html'),
})

export default class CtaBlock extends Vue implements ICtaBlock {
    @Prop({ type: Array, required: true }) ctas!: ICtaBlock['ctas'];

    get buttons ()  {
        return this.ctas.filter(elem => {
            return elem instanceof Button;
        })
    }

    get contentLinks ()  {
        return this.ctas.filter(elem => {
            return elem instanceof ContentLink;
        })
    }
}
