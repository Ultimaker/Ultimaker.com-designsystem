import { Vue, Component, Prop } from 'vue-property-decorator';
import { CtaBlock as ICtaBlock } from '@ultimaker/ultimaker.com-model-definitions/dist/molecules/cta/CtaBlock';

@Component({
    name: 'cta-block',
    template: require('./cta-block.html'),
})

export default class CtaBlock extends Vue implements ICtaBlock {
    @Prop({ type: Array, required: true }) ctas!: ICtaBlock['ctas'];
    @Prop({ type: String, required: false }) block?: string;
    @Prop({ type: String, required: true }) styleContentButton!: string;

    modifiers: object = {
        ContentButton: 'button',
        ContentLink: 'large',
    };

    classes: object = {
        ContentButton: this.styleContentButton,
        ContentLink: 'link link--large',
    };

    modifier(type: string) {
        return this.modifiers[type];
    }

    classObject(type: string) {
        return this.classes[type];
    }
}
