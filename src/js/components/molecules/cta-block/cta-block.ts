import { Vue, Component, Prop } from 'vue-property-decorator';
import { CtaBlock as ICtaBlock } from '@ultimaker/ultimaker.com-model-definitions/dist/molecules/cta/CtaBlock';

@Component({
    name: 'cta-block',
    template: require('./cta-block.html'),
})

export default class CtaBlock extends Vue implements ICtaBlock {
    @Prop({ type: Array, required: true }) ctas!: ICtaBlock['ctas'];
    @Prop({ type: String }) block?: string;
    @Prop({ type: String }) mod?: string | undefined;
    @Prop({ type: String }) styleContentButton?: string;
    @Prop({ type: String }) styleContentLink?: string | undefined;
    @Prop({ type: String }) modContentLink?: string | undefined;
    @Prop({ type: String }) modContentButton?: string | undefined;

    modifiers: object = {
        ContentButton: this.modContentButton || 'primary',
        ContentLink: this.modContentLink || 'large',
    };

    classes: object = {
        ContentButton: this.styleContentButton || 'button',
        ContentLink: this.styleContentLink || 'link',
    };

    modifier(type: string) {
        return this.modifiers[type];
    }

    classObject(type: string) {
        return  `${this.classes[type]}`;
    }

    get classMod () {
        const classes = {};

        if (this.mod !== '' && typeof this.mod === 'string') {
            this.mod.split(' ').forEach((mod) => {
                classes[`cta__block--${mod}`] = true;
            });
        }

        return classes;
    }
}
