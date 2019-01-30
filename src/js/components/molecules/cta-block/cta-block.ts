import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import { CtaBlock as ICtaBlock } from '@ultimaker/ultimaker.com-model-definitions/dist/molecules/cta/CtaBlock';

import AppLink from 'src/js/components/atoms/app-link';

@Component({
    name: 'cta-block',
    template: require('./cta-block.html'),
})

export default class CtaBlock extends Vue implements ICtaBlock {
    @Prop({ type: Array, required: true }) ctas!: ICtaBlock['ctas'];
    @Prop({ type: String, required: false }) block?: string;

    modifiers: object = {
        ContentButton: 'button',
        ContentLink: 'large',
    };

    classes: object = {
        ContentButton: 'button button--primary hero__button',
        ContentLink: 'link link--large',
    };

    modifier(type: string) {
        return this.modifiers[type];
    }

    classObject(type: string) {
        return this.classes[type];
    }
}
